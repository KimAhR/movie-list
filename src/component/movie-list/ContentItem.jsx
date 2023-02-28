import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function ContentItem({ item }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    name,
    first_air_date,
    profile_path,
  } = item;

  const img_url =
    "https://image.tmdb.org/t/p/w154" + (poster_path || profile_path);

  // title이 있으면 movie, profile 있으면 person 둘다 없으면 tv
  const type = title ? "movie" : profile_path ? "person" : "tv";

  return (
    <Container>
      <Link to={`${type}/${id}`}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <Title>{title ?? name}</Title>
        <ReleaseDate>{release_date ?? first_air_date}</ReleaseDate>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  line-height: 1rem;
  & + & {
    margin-left: 15px;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 170px;
  background-color: #eee;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;
export default React.memo(ContentItem);
