// app/layout.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import FloatingContact from '@/components/layout/FloatingContact';

export const metadata = {
  metadataBase: new URL('https://boneandjoints.in'),
  title: 'Dr. Abhishek Saxena - Orthopedic Surgeon In Ajmer',
  description: 'Your trusted healthcare provider',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Note: You don't need to manually add title and meta tags in Next.js 13+ */}
        {/* The metadata export above will handle this automatically */}
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