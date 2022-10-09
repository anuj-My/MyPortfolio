import React from "react";

import styled from "styled-components";
import SectionHeading from "./SectionHeading";

const StyledSection = styled.section`
  padding: 5rem 30rem;
  display: grid;
  align-items: center;

  @media screen and (max-width: 1372px) {
    padding: 5rem 20rem;
  }

  @media screen and (max-width: 1172px) {
    padding: 5rem 10rem;
  }

  @media screen and (max-width: 960px) {
    padding: 5rem 5rem;
  }

  @media screen and (max-width: 837px) {
    padding: 5rem 3rem;
  }
`;

const Container = styled.div`
  width: 85%;
  max-width: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const AboutContentContainer = styled.div``;

const AboutSection = () => {
  return (
    <StyledSection id="about">
      <Container>
        <SectionHeading title="About Me" />
        <AboutContentContainer>
          <div className="about-content">
            <p>
              I'm Anuj Maurya, a Web Developer based in Delhi, India. I Love
              building beautiful UI Design and Web Apps. I have an understanding
              of the importance of being able to adapt in a technology field
              which is changing rapidly. I'm always willing to explore and learn
              new skills and technologies.
            </p>
          </div>
          <div className="illustration"></div>
        </AboutContentContainer>
      </Container>
    </StyledSection>
  );
};

export default AboutSection;
