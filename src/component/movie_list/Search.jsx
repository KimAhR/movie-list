import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { tmdbAxios } from "../../api/tmdbAxios";
import SearchResultItem from "./SearchResultItem";
function Search() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const timer = useRef(null);

  const handleQuery = (e) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer.current);
      //예약된 스케줄이 있으면 취소
    }
    //스케줄 취소 직후 바로 새로운 스케줄 등록
    timer.current = setTimeout(() => {
      fetchData();
    }, 1000);
  };

  const fetchData = useCallback(async () => {
    if (!query) {
      setSearchResult(null);
      return;
    } //쿼리가 빈문자일 때는 요청 x
    let { data } = await tmdbAxios.get("search/multi", {
      //Query String
      params: {
        query: query,
        language: "ko-KR",
      },
    });
    setSearchResult(data.result);
  }, [query]);

  useEffect(() => {
    fetchData();
    //query 값이 바뀔 때마다 실행
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
        onBlur={() => searchResult(null)} // co
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
const ResultList = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  &:hover {
    background-color: black;
  }
`;
export default Search;
