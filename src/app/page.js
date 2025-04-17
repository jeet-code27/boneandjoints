// app/page.jsx
import AllCondition from '@/components/AllConditions';
import AppointmentSection from '@/components/AppointmentSection';
import DoctorProfile from '@/components/DoctorProfile';
import ElfsightWidget from '@/components/ElfsightWidget';
import ExpertiseSection from '@/components/ExpertiseSection';
import ImageGallerySlider from '@/components/ImageGallerySlider';
import ImageSlider from '@/components/ImageSlider';
import StatsComponent from '@/components/StatsComponent';
import WhyChooseUs from '@/components/WhyChooseUs';

// Static metadata for the home page
export const metadata = {
  title: 'Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena',
  description: 'Dr. Abhishek Saxena is a leading orthopedic surgeon in Ajmer providing advanced bone and joint treatments. Visit Our Clinic for expert orthopedic care, joint replacements, and sports injury treatments.',
  keywords: 'orthopedic surgeon Ajmer, bone specialist Ajmer, joint replacement surgeon, Dr. Abhishek Saxena, best orthopedic doctor in Ajmer, sports injury treatment, fracture treatment, knee replacement, hip replacement, Ajmer orthopedic clinic',
  openGraph: {
    title: 'Leading Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena',
    description: 'Expert orthopedic care for bone and joint problems at Bone & Joints Clinic in Ajmer. Specializing in joint replacements, fractures, and sports injuries.',
    images: [
      {
        url: '/images/abhishek.png',
        width: 800,
        height: 600,
        alt: 'Dr. Abhishek Saxena - Orthopedic Surgeon Ajmer',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in',
    siteName: 'Bone & Joints Clinic Ajmer',
  },
  alternates: {
    canonical: 'https://boneandjoints.in',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Orthopedic Surgeon in Ajmer | Dr. Abhishek Saxena',
    description: 'Advanced orthopedic treatments for bone and joint problems at Bone & Joints Clinic in Ajmer.',
    images: ['/images/abhishek.png'],
  },
  // Additional structured data for local business
  other: {
    'application-name': 'Bone & Joints Clinic',
    'author': 'Dr. Abhishek Saxena',
    'generator': 'Next.js',
    'theme-color': '#ffffff',
  },
};

export default function Home() {
  return (
    <>
      <ImageSlider />
      <DoctorProfile />
      <StatsComponent />
      <ExpertiseSection />
      <WhyChooseUs/>
      <ImageGallerySlider/>
      <AllCondition/>
      <ElfsightWidget/>
      <AppointmentSection/>
    </>
  );
}