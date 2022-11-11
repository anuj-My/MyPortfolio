import React, { useState, useEffect } from "react";
import PortableText from "react-portable-text";
import { client } from "../client";
import styled from "styled-components";
import NormalSocialMediaIcons from "../components/NormalSocialMediaIcons";
import Quote from "../components/Quote";
import SectionHeading from "../components/SectionHeading";

const StyledSection = styled.section`
  padding: 15rem 30rem;
  display: grid;
  align-items: center;

  @media screen and (max-width: 1372px) {
    padding: 15rem 20rem;
  }

  @media screen and (max-width: 1172px) {
    padding: 15rem 10rem;
  }

  @media screen and (max-width: 960px) {
    padding: 15rem 5rem;
  }

  @media screen and (max-width: 837px) {
    padding: 15rem 3rem;
  }
`;

const Container = styled.div`
  width: 100%;
`;
const AboutContentContainer = styled.div`
  h2 {
    font-weight: 400;
    margin: 1rem 0;
  }
  p {
    font-size: 1.8rem;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const AboutSection = ({ quote, error }) => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = `*[_type == 'about']`;

    client.fetch(query).then((data) => setAbout(data));
  }, []);

  if(!about) return 

  return (
    <>
      <StyledSection>
        <Container>
          <SectionHeading title="About Me" />
          <AboutContentContainer>
            <div className="about-content">
              {about.map((item, index) => {
                return (
                  <div key={index}>
                    <h2>{item.title}</h2>

                    <PortableText
                      content={item.content}
                      projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                      dataset="production"
                    />
                  </div>
                );
              })}
              {/* <p>
                I'm Anuj Maurya, a Web Developer based in Delhi, India. I Love
                building beautiful <strong>UI Designs</strong> and{" "}
                <strong>Web Apps </strong>.
              </p>
              <h2>How I Started?</h2>
              <p>
                My journey started at the end of the year 2020, I started
                learning Web Technologies so that I can make my career in IT
                Industry, from my school time I have always been fascinated by
                programming related stuff, when I got to know about Web
                Development I decide to enter the Web Development domain, so far
                I have learned Front-end technologies like HTML5, CSS3, JS,
                React, and other frameworks and libraries related to CSS and JS,
                I have a basic understanding of back-end development.
              </p>
              <p>
                I have an understanding of the importance of being able to adapt
                to a technology field that is changing rapidly. I'm always
                willing to explore and learn new skills and technologies.
              </p> */}
            </div>
          </AboutContentContainer>
        </Container>
      </StyledSection>
      <Quote quote={quote} error={error} />
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontWeight: "500",
        }}
      >
        Lets Chat!
      </h1>
      <NormalSocialMediaIcons />
    </>
  );
};

export default AboutSection;
