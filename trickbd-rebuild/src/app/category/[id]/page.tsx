import { categories } from '@/data/categories';
import { posts } from '@/data/posts';
import Link from 'next/link';

type CategoryPageProps = {
  params: {
    id: string;
  };
};

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = categories.find((c) => c.id === parseInt(params.id));

  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryPosts = posts.filter((p) => category.postIds.includes(p.id));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryPosts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
