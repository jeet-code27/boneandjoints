import AboutHero from "@/components/AboutHero";
import ReplacementService from "@/components/ReplacmentService";

export default function Replacement() {
    return (
     <>
      <AboutHero 
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Replacement', path: '/replacement' }
         ]}
      />
      <ReplacementService/>
     </>
    );
  }
  