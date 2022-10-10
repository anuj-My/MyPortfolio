import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 4.5rem;
  object-fit: contain;
`;
const Icon = ({ src }) => {
  return <Image src={src} />;
};

export default Icon;
