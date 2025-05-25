import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout'; // Import the client component


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Get Me a Chai - A website for chai lovers',
  description: 'This website is a crowdfunding platform for creators lovers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}