import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AppointmentSection from "@/components/AppointmentSection";
import ElfsightWidget from "@/components/ElfsightWidget";
import ExpertiseSection from "@/components/ExpertiseSection";
import StatsComponent from "@/components/StatsComponent";

// Static metadata
export const metadata = {
  title: 'About Dr. Abhishek Saxena | Orthopedic Specialist',
  description: 'Dr. Abhishek Saxena is a leading orthopedic specialist in ajmer committed to transforming lives with advanced orthopedic solutions. Learn about his expertise and services.',
  keywords: 'Dr. Abhishek Saxena, orthopedic specialist, orthopedic surgeon, advanced orthopedic solutions',
  openGraph: {
    title: 'About Dr. Abhishek Saxena | Orthopedic Specialist',
    description: 'Dr. Abhishek Saxena is a leading orthopedic specialist committed to transforming lives with advanced orthopedic solutions.',
    images: [
      {
        url: '/images/abhishek.png',
        width: 800,
        height: 600,
        alt: 'Dr. Abhishek Saxena',
      },
    ],
    type: 'website',
    url: 'https://boneandjoints.in/about',
  },
};

export default function AboutPage() {
    return (
      <>
        <AboutHero 
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'About Us', path: '/about' }
          ]}
        />
        <AboutDoctor doctorImage="/images/abhishek.png" />
        <StatsComponent/>
        <ExpertiseSection/>
        <ElfsightWidget/>
        <AppointmentSection/>
      </>  
    );
}