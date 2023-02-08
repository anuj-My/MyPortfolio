import { socialMediaDetails } from "../data";
import styled from "styled-components";

const IconsContainer = styled.div`
  left: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 51;
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

const NormalSocialMediaIcons = () => {
  const iconsList = socialMediaDetails.map(({ url, icon, title }, index) => {
    console.log(title, url);
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

export default NormalSocialMediaIcons;
