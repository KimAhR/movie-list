import { Link } from "react-router-dom";

// react router를 사용할 때는 Link를 이용해야 새로고침이 일어나지 않는다.
function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
