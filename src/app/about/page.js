import AboutDoctor from "@/components/AboutDoctor";
import AboutHero from "@/components/AboutHero";
import AppointmentSection from "@/components/AppointmentSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PatientReviews from "@/components/PatientReviews";
import StatsComponent from "@/components/StatsComponent";

export default function AboutPage() {
    return (
      <>
      <AboutHero 
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' }
         ]}
      />
      <AboutDoctor doctorImage="/images/abhishek.png" />
      <StatsComponent/>
      <ExpertiseSection/>
      <PatientReviews/>
      <AppointmentSection/>
      </>  
    );
  }