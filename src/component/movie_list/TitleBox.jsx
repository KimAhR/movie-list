// import styled from "styled-components";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import React from "react";

function TitleBox({ title, filter, fetchData }) {
  const [filterList, setFilterList] = useState(filter);

  console.log(fetchData);

  const handleFilter = (id) => {
    // 누른 버튼만 active true, 나머지는 false로
    setFilterList(
      filterList.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  useEffect(() => {
    const { url } = filterList.find((filter) => filter.active);
    fetchData(url);
  }, [fetchData, filterList]);

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <TabList>
        {/* active가 true인 TabItem만 검은색 배경에 흰색 글씨 만들기 */}
        {filterList.map((filter) => (
          <TabItem
            key={filter.id}
            active={filter.active}
            onClick={() => handleFilter(filter.id)}
          >
            {filter.text}
          </TabItem>
        ))}
      </TabList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
`;

const TabList = styled.ul`
  display: flex;
  margin-left: 20px;
  border: 1px solid black;
`;

const TabItem = styled.li`
  padding: 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: white;
    `}/* background-color: ${(props) => props.active && "black"};
      color: ${(props) => props.active && "white"}; */
`;

export default React.memo(TitleBox);
