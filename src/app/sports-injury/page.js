// SportsInjury.jsx
import AboutHero from "@/components/AboutHero";
import SportsInjuryService from "@/components/SportsInjuryService";

export default function SportsInjury() {
  return (
    <div className="w-full overflow-x-hidden">
      <AboutHero
        bannerImage="/images/aboutus-banner.jpg"
        title="Dr. Abhishek Saxena"
        subtitle="Transforming Lives with Advanced Orthopedic Solutions"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Sports Injury', path: '/sports-injury' }
        ]}
      />
      <SportsInjuryService />
    </div>
  );
}