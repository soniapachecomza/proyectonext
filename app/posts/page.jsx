import PostCard from "../../components/PostCard";
import './Posts.css'

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  //await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate loading
  return data;
}
//renderiza
export default async function PostPage() {
  const posts = await loadPosts();
  console.log(posts);

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
