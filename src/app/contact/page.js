import AboutHero from "@/components/AboutHero";
import ContactPage from "@/components/ContactPage";

export default function Contact(){
    return(
        <>
                    <AboutHero
                bannerImage="/images/aboutus-banner.jpg"
                title="Dr. Abhishek Saxena"
                subtitle="Transforming Lives with Advanced Orthopedic Solutions"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Contact Us', path: '/contact' }
                ]}
                />
                <ContactPage/>
        </>
    )
}