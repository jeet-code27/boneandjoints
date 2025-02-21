// app/layout.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Dr. Abhishek Saxena - Orthopedic Surgeon In Ajmer',
  description: 'Your trusted healthcare provider',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main >{children}</main> {/* Added padding-top */}
        <Footer />
      </body>
    </html>
  );
}
