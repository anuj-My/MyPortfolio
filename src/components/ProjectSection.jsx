import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectInfo } from "../data";
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
  const renderedProjectList = projectInfo.map((item) => {
    return <ProjectCard item={item} key={item.id} />;
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
