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
  title: 'Health Blogs by Dr. Abhishek Saxena',
  description: 'Expert articles on orthopedics, joint health, and posture by Dr. Abhishek Saxena',
  openGraph: {
    title: 'Health Blogs by Dr. Abhishek Saxena',
    description: 'Expert articles on orthopedics, joint health, and posture by Dr. Abhishek Saxena',
    type: 'website',
    url: 'https://boneandjoints.in/blog',
  },
};

export default function BlogPage() {
  const blogs = getBlogs();

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
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent mb-4">
              Health Insights by Dr. Abhishek Saxena
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert articles on orthopedics, joint health, and maintaining your well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-square w-full">
                  <Image 
                    src={blog.image || '/images/placeholder.jpg'} 
                    alt={blog.alt || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fit"
                    priority={blog.id <= 2} // Prioritize loading for first two images
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-blue-600">{blog.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">
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