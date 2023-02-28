import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import React from "react";

function TitleBox({ title, filter, fetchData }) {
  const [filterList, setFilterList] = useState(filter);

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
  }, [filterList, fetchData]);

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
    `}
`;

export default React.memo(TitleBox);
