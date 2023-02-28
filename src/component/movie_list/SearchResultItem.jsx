import { Link } from "react-router-dom";
import styled from "styled-components";

function SearchResultItem({ data }) {
  const { id, media_type, title, name } = data;
  return (
    <Container>
      <Link to={`${media_type}/${id}`}>{title || name}</Link>
    </Container>
  );
}

const Container = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  &:hover {
    background-color: #eee;
  }
`;

export default SearchResultItem;
