import styled from "styled-components";

import { socialMediaDetails } from "../data";

const IconsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 51;

  &::after {
    content: "";
    display: block;
    height: 11rem;
    width: 1px;
    background-color: #172026;
    margin-top: 2rem;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 2rem;
    &::after {
      display: none;
    }
    flex-direction: row;
    position: static;
  }
`;

const IconsWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  a {
    display: inline-block;
    color: #172026;
    font-size: 2rem;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(#000, 0.8);
    color: #fefcfd;
    background-color: #172026;

    a {
      color: #fefcfd;
    }

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }
`;

const SocialMediaIcons = () => {
  const iconsList = socialMediaDetails.map(({ url, icon, title }, index) => {
    return (
      <IconsWrapper key={index}>
        <a title={title} href={url} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </IconsWrapper>
    );
  });

  return <IconsContainer>{iconsList}</IconsContainer>;
};

export default SocialMediaIcons;
