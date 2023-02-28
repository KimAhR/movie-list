import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

function Header() {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <h1>
            <Link to="/">Nepp Movie</Link>
          </h1>
          <NavBar>
            <GnbList>
              <li>
                <Link to="movie">영화</Link>
              </li>
              <li>
                <Link to="tv">TV프로그램</Link>
              </li>
              <li>
                <Link to="person">인물</Link>
              </li>
            </GnbList>
          </NavBar>
        </LeftBox>

        <Search />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #eee;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  height: 60px;

  margin: 0 auto;
  h1 {
    line-height: 60px;
  }
`;

const LeftBox = styled.div`
  display: flex;
`;

const NavBar = styled.nav`
  margin-left: 30px;
`;

const GnbList = styled.ul`
  display: flex;
  align-items: center;

  height: 60px;
  li + li {
    margin-left: 20px;
  }
`;

export default Header;
