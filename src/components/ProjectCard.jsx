import React from "react";
import Button from "./Button";
import { techs } from "../data";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));

  gap: 1rem;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const LeftContainer = styled.div`
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.8rem;
  font-weight: 400;
`;
const BadgeContainer = styled.div`
  margin-bottom: 2.8rem;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Badge = styled.span`
  display: inline-block;
  background-color: #172026;
  color: #fefcfd;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

const Desc = styled.p`
  margin-top: 3.2rem;
`;
const RightContainer = styled.div``;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4rem;
`;

const ProjectCard = ({ item }) => {
  const { title, desc, imgUrl } = item;
  console.log(title, desc, imgUrl);
  return (
    <>
      <ProjectContainer>
        <LeftContainer>
          <Title>{title}</Title>
          <BadgeContainer>
            {techs.map(({ title, id }) => {
              return <Badge key={id}> {title}</Badge>;
            })}
          </BadgeContainer>
          <Button color="#fefcfd" bg="#172026" text="View Project" />

          <Desc>{desc}</Desc>
        </LeftContainer>
        <RightContainer>
          <ImgContainer>
            <Image src={imgUrl} />
          </ImgContainer>
        </RightContainer>
      </ProjectContainer>
    </>
  );
};

export default ProjectCard;
