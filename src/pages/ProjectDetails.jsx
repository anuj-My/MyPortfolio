import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortableText from "react-portable-text";
import { urlFor } from "../client";
import styled from "styled-components";
import { client } from "../client";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Footer from "../container/Footer";

const StyledSection = styled.section`
  padding: 12rem 30rem 0rem 30rem;
  min-height: 100vh;
  display: grid;
  align-items: center;

  @media screen and (max-width: 1372px) {
    padding: 12rem 20rem;
  }

  @media screen and (max-width: 1172px) {
    padding: 12rem 10rem;
  }

  @media screen and (max-width: 960px) {
    padding: 12rem 5rem;
  }

  @media screen and (max-width: 837px) {
    padding: 12rem 3rem;
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

const HeadingSmall = styled.h4`
  margin-bottom: 0.8rem;
`;

const InfoContainer = styled.div`
  margin: 4rem 0 2rem 0;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
  }
  p {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
  ul {
    margin-bottom: 1.6rem;
    li {
      font-size: 1.4rem;
    }
  }
`;

const ProjectDetails = () => {
  const history = useNavigate();
  const { slug } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const query = `*[slug.current == '${slug}']{
      title,
      site,
      _id,
      description,
      slug,
      imgUrl{
        asset->{
          _id,
          url
        }       
      },
      content,
      images
    }`;

    client.fetch(query).then((projectData) => setProject(projectData[0]));
  }, [slug]);

  if (!project) return <div>loading...</div>;

  const { title, site, description, imgUrl, content, images } = project;

  return (
    <>
      project && (
      <StyledSection>
        <Container>
          <Button
            color="#fefcfd"
            bg="#172026"
            text={"Go Back"}
            onClick={() => history(-1)}
            style={{
              marginBottom: "3rem",
              fontSize: "1.4rem",
              padding: "1rem 2.5rem",
            }}
          />
          <ProjectContainer>
            <Heading>{title}</Heading>
            <ParaSmall>Summary</ParaSmall>
            <Para>{description}</Para>
            <BtnContainer>
              <Button
                color="#fefcfd"
                bg="#172026"
                text="Github"
                href={`https://github.com/anuj-My/${title}`}
                target="_blank"
              />
              <Button
                color="#fefcfd"
                bg="#172026"
                text="View"
                href={`https://${site}.netlify.com`}
                target="_blank"
              />
            </BtnContainer>
            <ImgContainer>
              <Image src={imgUrl.asset.url} alt={title} />
            </ImgContainer>
            <TechInfoContainer>
              <Left>
                <HeadingSmall>Tech Stack Used</HeadingSmall>
                <IconsContainer>
                  {images &&
                    images.map((image, index) => {
                      return <Icon src={urlFor(image).url()} key={index} />;
                    })}
                </IconsContainer>
              </Left>
              {/* <Right>
                <HeadingSmall>Type</HeadingSmall>
                <Para>Social Media</Para>
              </Right> */}
            </TechInfoContainer>
            <InfoContainer>
              <PortableText
                content={content}
                projectId={process.env.REACT_APP_SANITY_PROJECT_ID}
                dataset="production"
              />
            </InfoContainer>
          </ProjectContainer>
        </Container>
      </StyledSection>
      )
      <Footer />
    </>
  );
};

export default ProjectDetails;
