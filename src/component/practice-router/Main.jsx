import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./page/About";
import Home from "./page/Home";
import Post from "./page/Post";
import PostEdit from "./PostEdit";
import PostItem from "./PostItem";
import PostList from "./PostList";

// react-router-dom을 사용하기 위해서 BrowserRouter로 감싸 주어야한다.
function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* path(경로)에 따라 보여줄 element(컴포넌트)를 작성 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />}>
          {/* 
            중첩 라우팅 : 상위 경로 이후의 경로에 따라서 선택적으로 컴포넌트 출력
                => 상위 컴포넌트에서 Outlet 컴포넌트를 통해 출력할 수 있다.
           */}
          <Route path="" element={<PostList />} />
          <Route path=":postId" element={<PostItem />} />
          <Route path="edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Main;
