import AboutHero from "@/components/AboutHero";
import ArthroscopyService from "@/components/ArthroscopyService";


export default function Arthroscopy(){
    return (
        <div className="w-full overflow-x-hidden">
        <AboutHero 
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Arthoscopy', path: '/arthroscopy' }
         ]}
      />
      <ArthroscopyService/>
        </div>
    )
}