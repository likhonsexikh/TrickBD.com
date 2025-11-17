import { posts } from '@/data/posts';
import Link from 'next/link';

const HomePage = () => {
  const featuredPosts = posts.filter((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured);

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
