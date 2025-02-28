import AboutHero from "@/components/AboutHero";

export default function BookConsultation(){
    return(
        <>
                    <AboutHero
                bannerImage="/images/aboutus-banner.jpg"
                title="Dr. Abhishek Saxena"
                subtitle="Transforming Lives with Advanced Orthopedic Solutions"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About', path: '/nutrition-fitness' }
                ]}
            />
        </>
    )
}