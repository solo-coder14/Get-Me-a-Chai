'use client'; // Mark this as a client component
import { SessionProvider } from "next-auth/react"

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <SessionProvider>
        {pathname !== '/login' && <Navbar />}
        <div className={pathname == '/login'? "min-h-[93vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" : "min-h-[86.8vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"}>
          {children}
        </div>
        <Footer />
      </SessionProvider>
    </>
  );
}