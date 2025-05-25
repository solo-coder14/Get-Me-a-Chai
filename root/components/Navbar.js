import React, { useState } from "react";
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 1);
  }

  return (
    <div>
      <div className=''>
        <nav className=' py-7 flex justify-between px-5 h-12 bg-gray-900 items-center'>
          <div className="font-bold text-2xl flex items-center"><Link href="/" >Buy Me a Chai</Link><span><img src="/tea.gif" className="w-10" alt="" /></span></div>
          {session && <div className="flex gap-2">

            <div className=" relative">
              <button
                onClick={() => setIsOpen(!isOpen)} onBlur={handleDropdown}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                {session.user.name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="dropDown right-0 absolute mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium truncate">{session.user.email}</div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  >
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </Link>
                    </li>
                    
                    <li>
                      <Link href={`/${session.user.name}`} className="block px-4 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Your page
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button onClick={() => signOut()} className="text-start w-full cursor-pointer px-4 py-2 transition-all text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>}
          {!session && <div>
            <Link href={"/login"}>
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer">Login</button>
            </Link> </div>}


        </nav>
      </div>
    </div>
  )
}

export default Navbar
