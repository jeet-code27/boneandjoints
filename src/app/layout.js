// app/layout.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import FloatingContact from '@/components/layout/FloatingContact';

export const metadata = {
  metadataBase: new URL('https://boneandjoints.in'),
  title: 'Dr. Abhishek Saxena - Orthopedic Surgeon In Ajmer',
  description: 'Dr. Abhishek Saxena is a leading orthopedic surgeon in Ajmer providing advanced bone and joint treatments. Visit Our Clinic for expert orthopedic care, joint replacements, and sports injury treatments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    
      </head>
      <body>
        <Header />
        <main className='bg-gray-50'>{children}</main>
        <FloatingContact/>
        <Footer />
      </body>
    </html>
  );
}