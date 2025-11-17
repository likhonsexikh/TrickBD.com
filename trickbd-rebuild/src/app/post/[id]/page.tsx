import { posts } from '@/data/posts';

type PostPageProps = {
  params: {
    id: string;
  };
};

const PostPage = ({ params }: PostPageProps) => {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
