import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import { icons } from "../data";
const { html, css, react, redux, firebase, styledComponents } = icons;

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
  width: 90%;
`;

const ProjectContainer = styled.div``;
const Heading = styled.h1`
  font-weight: 400;
  margin-bottom: 2rem;
`;
const ParaSmall = styled.p`
  font-weight: 700;
`;
const Para = styled.p``;
const BtnContainer = styled.div`
  margin: 2rem 0 4rem 0;
  a {
    &:not(:last-child) {
      margin-right: 1.4rem;
    }
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;
const TechInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
`;
const Left = styled.div``;

const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Right = styled.div``;

const HeadingSmall = styled.h4`
  margin-bottom: 0.8rem;
`;

const InfoContainer = styled.div`
  margin: 4rem 0 2rem 0;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }
`;

const ProjectDetails = ({ title }) => {
  return (
    <StyledSection>
      <Container>
        <ProjectContainer>
          <Heading>{title}</Heading>
          <ParaSmall>Summary</ParaSmall>
          <Para>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab eius
            consequuntur?
          </Para>
          <BtnContainer>
            <Button
              color="#fefcfd"
              bg="#172026"
              text="Github"
              href="https://github.com/anuj-My/Pinterest"
              target="_blank"
            />
            <Button color="#fefcfd" bg="#172026" text="View" href="" />
          </BtnContainer>
          <ImgContainer>
            <Image src="https://miro.medium.com/max/1400/1*1AktzTtx2ZOH1kb8yv7Piw.jpeg" />
          </ImgContainer>
          <TechInfoContainer>
            <Left>
              <HeadingSmall>Tech Stack Used</HeadingSmall>
              <IconsContainer>
                <Icon src={html} />
                <Icon src={css} />
                <Icon src={styledComponents} />
                <Icon src={react} />
                <Icon src={redux} />
                <Icon src={firebase} />
              </IconsContainer>
            </Left>
            <Right>
              <HeadingSmall>Type</HeadingSmall>
              <Para>Social Media</Para>
            </Right>
          </TechInfoContainer>
          <InfoContainer>
            <Heading>Explanation</Heading>
            <Para>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quaerat illo quisquam perspiciatis eius laboriosam, officia
              voluptas necessitatibus vitae minus exercitationem id cum
              distinctio omnis, quia pariatur obcaecati reprehenderit
              accusantium!
            </Para>
          </InfoContainer>
        </ProjectContainer>
      </Container>
    </StyledSection>
  );
};

export default ProjectDetails;
