import { useState, useEffect } from "react";
import { client } from "../client";
import styled from "styled-components";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

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

const ProjectSection = () => {
  const [projectsInfo, setProjectsInfo] = useState(null);

  useEffect(() => {
    const query = `*[_type == 'projects']{
      title,
      slug,
      badges,
      description,
      imgUrl{
        asset->{
          _id,
          url
        },
        alt
      }
    }`;
    client.fetch(query).then((projectData) => setProjectsInfo(projectData));
  }, []);

  if (projectsInfo === null) return;

  const renderedProjectList = projectsInfo.map((item, index) => {
    return <ProjectCard item={item} key={index} />;
  });

  return (
    <StyledSection id="projects">
      <Container>
        <SectionHeading title="Projects" />
        {renderedProjectList}
      </Container>
    </StyledSection>
  );
};

export default ProjectSection;
