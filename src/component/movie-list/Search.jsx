import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tmdbAxios } from "../../api/tmdbAxios";
import SearchResultItem from "./SearchResultItem";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const timer = useRef(null);

  const handleQuery = (e) => {
    // query 값이 바뀔 때마다 실행
    if (timer.current) {
      // 예약된 스케줄이 있으면 취소
      clearTimeout(timer.current);
    }
    // 스케줄 취소 직후 바로 새로운 스케줄 등록
    timer.current = setTimeout(() => {
      setQuery(e.target.value);
    }, 400);
  };

  const fetchData = useCallback(async () => {
    if (!query) {
      // query가 빈문자일 때는 요청하지않고 데이터 비우기
      setSearchResult(null);
      return;
    }
    let { data } = await tmdbAxios.get("search/multi", {
      // Query String
      params: {
        query: query,
        language: "ko-KR",
      },
    });

    setSearchResult(data.results);
  }, [query]);

  const navigate = useNavigate();
  const handleLink = (url) => {
    navigate(url);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  return (
    <Container>
      {/* onBlur : input에서 커서가 사라졌을 때 */}
      <Input
        type="text"
        onChange={handleQuery}
        onBlur={() => {
          setTimeout(() => {
            setSearchResult(null);
          }, 200);
        }}
      />
      <ResultList>
        {searchResult?.map((data) => (
          <SearchResultItem data={data} />
        ))}
      </ResultList>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  outline: none;
`;

const ResultList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
`;

export default Search;
