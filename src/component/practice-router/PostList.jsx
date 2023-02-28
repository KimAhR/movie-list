import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState(null);
  const fetchData = async () => {
    let result = await axios.get("http://localhost:5000/posts");

    setPosts(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(posts);
  if (!posts) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id + ""}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to="edit">작성하기</Link>
      </button>
    </div>
  );
}

export default PostList;
