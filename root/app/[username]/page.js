"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { findAllPayments, fetchuser, initiatePayment } from '@/actions/userAction'

function Username() {
  const { data: session } = useSession()
  const router = useRouter()
  const params = useParams()
  const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' })
  const [paymentInfo, setPaymentInfo] = useState([])
  const [paychangeState, setPaychangeState] = useState(false)


  useEffect(() => {
    if (session === undefined) return;
    if (!session) {
      router.push('/login');
    } else {
      getPayment()
    }
  }, [router, session, paychangeState]);



  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })

  }

  const pay = async () => {
    // console.log(paymentform)
    await initiatePayment(params.username, paymentform)
    setPaymentform({ name: '', message: '', amount: '' })

    setPaychangeState(!paychangeState)

  }

  const getPayment = async () => {
    const res = await findAllPayments()
    setPaymentInfo(res);
  }


  const getData = async () => {
    const res = await fetchuser(params.username)
    console.log(res)
  }

  return (
    <div>
      <div className=''>

        <div className="cover w-full relative bg-amber-600 flex justify-center items-end">
          <img
            className="object-cover w-full"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1743724800&token-hash=3jRRjnWnIycOk6k6K03qY-fepaDiVq5PShRw7Y2mnLQ%3D"
            alt=""
          />
          <div
            className="profilePic absolute border-2 -bottom-10 border-white rounded-full w-24 h-24 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.ytimg.com/vi/czR6DrMptJE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBm-s4RSY9BGKY3Km3KS0ASs_RaiQ"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center mt-12'>
        <div className="username font-bold text-lg">
          @Mohammad Woafi
          {/* @{session.user.name} */}
        </div>
        <div className="username text-slate-400">
          Creating Animated art for VTT's
        </div>
        <div className="username text-slate-400">
          16,804 members . 96 posts . $16,890/release
        </div>
      </div>
      <div className='payment flex gap-3 justify-center items-center my-8'>
        <div className='supporters rounded-xl bg-slate-900 w-1/2 h-85 py-7 px-10'>
          <span className='text-lg font-bold'>Supporters</span>
          <ul className='flex flex-col pl-4 my-4'>
            {paymentInfo.map((item, index) => (
              <div key={index} className='py-1' >
                <li> {item.name} donated {item.amount}$</li>
                <li>Message: {item.message}</li>
              </div>

            ))}

          </ul>
        </div>
        <div className="makepayment rounded-xl bg-slate-900 w-96 h-85 py-7 px-10">
          <h1 className='text-lg font-bold'>Make a payment</h1>
          <div className='flex flex-col gap-3 my-5 justify-center items-center'>
            <input onChange={handleChange} name="name" value={paymentform.name} type="text" className='bg-gray-800 w-full p-2 rounded-lg' placeholder='Name' />
            <textarea rows="4" onChange={handleChange} name="message" value={paymentform.message} type="text" className='bg-gray-800 w-full p-2 rounded-lg' placeholder='Message'></textarea>
            <input onChange={handleChange} name="amount" value={paymentform.amount} type="text" className='bg-gray-800 w-full p-2 rounded-lg' placeholder='Amount' />

            <button onClick={pay} type="button" className="text-white w-30 bg-green-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2">
              Donate
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Username
