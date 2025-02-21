// app/page.jsx
import AppointmentSection from '@/components/AppointmentSection';
import DoctorProfile from '@/components/DoctorProfile';
import ExpertiseSection from '@/components/ExpertiseSection';
import ImageGallerySlider from '@/components/ImageGallerySlider';
import ImageSlider from '@/components/ImageSlider';
import PatientReviews from '@/components/PatientReviews';
import StatsComponent from '@/components/StatsComponent';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function Home() {
  return (
    <>
      <main className='bg-white'>
      <ImageSlider />
      <DoctorProfile />
      <StatsComponent />
      <ExpertiseSection />
      <WhyChooseUs/>
      <ImageGallerySlider/>
      <PatientReviews/>
      <AppointmentSection/>
      </main>
    </>
  );
}
