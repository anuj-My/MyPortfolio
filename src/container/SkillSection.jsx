import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { client, urlFor } from "../client";

import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../data";

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
  width: 100%;
`;

const SkillWrapper = styled.div`
  display: flex;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Icon = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 4.5rem;
  object-fit: contain;
`;

const RightContainer = styled.div`
  flex: 1;

  h1 {
    color: #172026;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    margin-top: 4rem;
    display: inline-block;
    font-weight: 600;
    color: blue;
  }
`;

const SkillSection = () => {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    const query = `*[_type == 'skills']`;

    client.fetch(query).then((data) => setSkills(data));
  }, []);

  if (!skills) return;
  const { title, description } = skills[0];

  return (
    <StyledSection id="Skills">
      <Container>
        <SectionHeading title="My skills" />
        <SkillWrapper>
          <LeftContainer>
            <IconsWrapper>
              {skillsData.map(({ image, title }, index) => {
                return (
                  <Icon title={title} key={index}>
                    <Image src={image} />
                  </Icon>
                );
              })}
            </IconsWrapper>
          </LeftContainer>
          <RightContainer>
            <h1>{title}</h1>
            <p>{description}</p>

            <NavLink to="/about">Keep reading by bio</NavLink>
          </RightContainer>
        </SkillWrapper>
      </Container>
    </StyledSection>
  );
};

export default SkillSection;
