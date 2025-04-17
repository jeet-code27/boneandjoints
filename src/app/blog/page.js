import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}

export const metadata = {
  title: 'Orthopedic Health Blogs | Expert Articles on Joint Care by Dr. Abhishek Saxena, Ajmer',
  description: 'Get expert insights on knee pain, arthritis, sports injuries, joint replacements and orthopedic treatments. Dr. Abhishek Saxena shares valuable health tips and surgical advances.',
  keywords: [
    'orthopedic blog',
    'joint pain advice',
    'knee replacement guide',
    'sports injury prevention',
    'arthritis treatment tips',
    'bone health articles',
    'orthopedic surgeon blog Ajmer',
    'Dr. Abhishek Saxena articles',
    'post-surgery recovery tips',
    'orthopedic health education'
  ].join(', '),
  openGraph: {
    title: 'Orthopedic Health Blogs by Dr. Abhishek Saxena | Ajmer',
    description: 'Expert medical articles on joint care, orthopedic treatments and surgical advances from leading Ajmer orthopedic specialist',
    type: 'website',
    url: 'https://boneandjoints.in/blog',
    images: [
      {
        url: '/images/orthopedic-blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Orthopedic Health Blogs by Dr. Abhishek Saxena',
      },
    ],
    siteName: 'Bone & Joints Clinic',
  },
  alternates: {
    canonical: 'https://boneandjoints.in/blog',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orthopedic Health Blogs by Dr. Abhishek Saxena',
    description: 'Expert insights on joint care and orthopedic treatments from Ajmer specialist',
    images: ['/images/orthopedic-blog-og.jpg'],
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

  // Generate schema.org markup for better SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogs.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "url": `https://boneandjoints.in/blog/${blog.slug}`,
        "datePublished": blog.date,
        "author": {
          "@type": "Person",
          "name": blog.author || "Dr. Abhishek Saxena"
        },
        "image": blog.image || '/images/placeholder.jpg'
      }
    }))
  };

  return (
    <>
      <AboutHero 
        bannerImage="/images/aboutus-banner.jpg"
        title="Dr. Abhishek Saxena"
        subtitle="Transforming Lives with Advanced Orthopedic Solutions"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blogs', path: '/blog' }
        ]}
      />
      
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent mb-4">
              Orthopedic Health Insights
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert articles on joint care, surgical advances and healthy living by Dr. Abhishek Saxena
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative aspect-square w-full" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                  <Image 
                    src={blog.image || '/images/placeholder.jpg'} 
                    alt={blog.alt || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={blog.id <= 2}
                  />
                  <meta itemProp="url" content={blog.image} />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <time 
                      dateTime={new Date(blog.date).toISOString()} 
                      itemProp="datePublished"
                      className="text-sm text-gray-500"
                    >
                      {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    <span className="mx-2 text-gray-400">•</span>
                    <span itemProp="author" className="text-sm text-blue-600">
                      {blog.author || "Dr. Abhishek Saxena"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700" itemProp="headline">
                    <Link href={`/blog/${blog.slug}`} itemProp="url">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4" itemProp="description">
                    {blog.excerpt || blog.content.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags && blog.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                    aria-label={`Read more about ${blog.title}`}
                    itemProp="url"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}