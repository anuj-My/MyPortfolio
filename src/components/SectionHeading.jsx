import styled from "styled-components";

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 800px) {
    gap: 1rem;
  }
`;
const HeadingPrimary = styled.h1`
  font-size: 4rem;
  font-family: "Major Mono Display", monospace;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  &::after {
    content: "";
    display: block;
    width: 4.5rem;
    height: 5px;
    margin-top: 3px;
    background-color: #172026;
    border-radius: 5px;
  }
`;

export const Divider = styled.div`
  width: 30%;
  height: 1px;
  margin-top: 3px;
  background-color: #172026;
  opacity: 0.3;
`;

const SectionHeading = ({ title }) => {
  return (
    <HeadingWrapper>
      <HeadingPrimary>{title}</HeadingPrimary>
      <Divider></Divider>
    </HeadingWrapper>
  );
};

export default SectionHeading;
