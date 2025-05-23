// app/sitemap.js
export default async function sitemap() {
    const baseUrl = "https://boneandjoints.in";
    const currentDate = new Date();
  
    // Static pages with priority and frequency
    const staticPages = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/bookconsultation`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ];
  
    // Replacement services
    const replacementPages = [
      '/replacement',
      '/replacement/knee-replacement',
      '/replacement/hip-replacement',
      '/replacement/shoulder-replacement'
    ].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    }));
  
    // Arthroscopy services
    const arthroscopyPages = [
      '/arthroscopy',
      '/arthroscopy/shoulder-arthroscopy',
      '/arthroscopy/knee-arthroscopy'
    ].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    }));
  
    // Sports injury pages
    const sportsInjuryPages = [
      '/sports-injury',
      '/sports-injury/knee-injury',
      '/sports-injury/back-injury',
      '/sports-injury/sprains'
    ].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  
    // Conditions pages
    const conditionPages = [
      '/conditions/slaptears',
      '/conditions/acl-injury',
      '/conditions/pcl-injury',
      '/conditions/meniscus-injury',
      '/conditions/mpfl-mcl-lcl-injury',
      '/conditions/recurrent-shoulder-dislocation',
      '/conditions/rotator-cuff-tear',
      '/conditions/injuries-around-shoulder',
      '/conditions/cartilage-injury',
      '/conditions/atfl-tear',
      '/conditions/tennis-elbow',
      '/conditions/golfer-elbow',
      '/conditions/hip-labral-tear'
    ].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  
    // Nutrition & Fitness
    const nutritionPage = {
      url: `${baseUrl}/nutrition-fitness`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    };
  
    // Blog posts (could be dynamic if you have a CMS)
    const blogPosts = [
      '/blog/orthopedic-doctor-in-ajmer-dr-abhishek-saxena',
      '/blog/orthopedic-care-sports-injury-prevention-recovery',
      '/blog/knee-replacement-surgery-ajmer-expectations-preparation',
      '/blog/best-arthroscopy-surgery-ajmer-joint-pain-treatment',
      '/blog/best-bone-specialist-doctor-in-ajmer-dr-abhishek-saxena',
      '/blog/top-orthopedic-doctor-in-ajmer-dr-abhishek-saxena',


    ].map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    }));
  
    return [
      ...staticPages,
      ...replacementPages,
      ...arthroscopyPages,
      ...sportsInjuryPages,
      ...conditionPages,
      nutritionPage,
      ...blogPosts
    ];
  }