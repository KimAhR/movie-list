import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function PostEdit() {
  // 경로에 Query String 값을 쉽게 가져올 수 있다.
  const [searchParams] = useSearchParams();

  const postId = searchParams.get("postId");

  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    // 쿼리스트링으로 postId가 전달되면 url 포함시키고, 안되면 빼기.
    const url = `http://localhost:5000/posts/${postId || ""}`;
    const method = postId ? "patch" : "post";

    let result = await axios[method](url, {
      title: inputs.title,
      body: inputs.body,
    });

    navigate("/post/" + result.data.id);
  };

  useEffect(() => {
    // postId가 있으면 inputs 기존 게시물 제목, 내용 inputs에 업데이트
    if (postId) {
      axios.get("http://localhost:5000/posts/" + postId).then((res) => {
        const { data } = res;
        setInputs({ title: data.title, body: data.body });
      });
    }
  }, [postId]);

  return (
    <div>
      <div>
        <label>
          제목 :
          <input
            type="text"
            name="title"
            onChange={handleInputs}
            value={inputs.title}
          />
        </label>
      </div>
      <div>
        <label>
          내용 :
          <input
            type="text"
            name="body"
            onChange={handleInputs}
            value={inputs.body}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>{postId ? "수정하기" : "등록하기"}</button>
    </div>
  );
}

export default PostEdit;
