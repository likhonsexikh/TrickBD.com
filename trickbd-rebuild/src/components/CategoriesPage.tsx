import { categories } from '@/data/categories';
import Link from 'next/link';

const CategoriesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 rounded-md p-4">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/category/${category.id}`}>{category.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
