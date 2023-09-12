import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));

  gap: 2rem;

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
  margin-bottom: 1.5rem;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Badge = styled.span`
  display: inline-block;
  background-color: #172026f5;
  color: #fefcfd;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 1.2rem;

  &:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

const Desc = styled.p`
  margin-top: 3rem;
`;
const RightContainer = styled.div``;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 2rem;
`;

const ProjectCard = ({ item }) => {
  const { title, description, slug, imgUrl, badges } = item;

  return (
    <>
      <ProjectContainer>
        <LeftContainer>
          <Title>{title}</Title>
          <span style={{fontSize: '12px', marginBottom: '1rem'}}>Test Account: email: <strong>abhi@test.com</strong> and pass: <strong>123456789</strong></span>
          <BadgeContainer>
            {badges?.map((item) => {
              return <Badge key={item}> {item}</Badge>;
            })}
          </BadgeContainer>
          <NavLink to={`/projects/${slug?.current}`}>
            <Button
              color="#fefcfd"
              bg="#172026"
              text="View Project"
              as="button"
            />
          </NavLink>

          <Desc>{description && `${description?.slice(0, 140)}...`}</Desc>
        </LeftContainer>
        <RightContainer>
          <ImgContainer>
            <Image src={imgUrl?.asset?.url} alt={imgUrl?.alt} />
          </ImgContainer>
        </RightContainer>
      </ProjectContainer>
    </>
  );
};

export default ProjectCard;
