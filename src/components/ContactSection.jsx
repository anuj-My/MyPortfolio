import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

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

const ContactFormContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 4rem; */

  form {
    padding: 2rem;
    background-color: #172026;
    margin: 2rem 0;
    border-radius: 5px;
  }
  .input-label-group label {
    color: #fefcfd;
    font-size: 1.4rem;
    opacity: 0.8;
  }
  .input-label-group {
    margin-bottom: 1rem;
  }

  .input-wrap {
    width: 100%;
    margin-right: 2rem;
  }

  .input-box {
    padding: 1rem;
    font-size: 1.6rem;
    margin-top: 0.3rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-family: "poppins", sans-serif;
  }

  .input-box:focus {
    outline-color: skyblue;
  }

  .textarea-group-wrap {
    margin-bottom: 2rem;
  }
  .textarea-group-wrap .input-wrap {
    height: 10rem;
    margin-right: 1rem;
  }

  .textarea-group-wrap textarea {
    height: 100%;
  }

  .textarea-group-wrap textarea:focus {
    outline-color: skyblue;
  }
`;

const ContactForm = styled.div`
  @media screen and (max-width: 1150px) {
    padding: 0;
  }
`;

const ContactSection = () => {
  return (
    <StyledSection id="contact">
      <Container>
        <SectionHeading title="Contact" />
        <ContactFormContainer>
          <ContactForm>
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              className="flex"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="group-input-wrap">
                <div className="input-label-group">
                  <label htmlFor="first-name">First Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="first-name"
                      id="first-name"
                      placeholder="First Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="last-name">Last Name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="input-box"
                      name="last-name"
                      id="last-name"
                      placeholder="Last Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="input-label-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-box"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="textarea-group-wrap">
                <div className="input-label-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrap">
                    <textarea
                      className="input-box"
                      name="message"
                      id="message"
                      placeholder="Write Your Message Here..."
                      min="5"
                      resize="false"
                      style={{ resize: "none" }}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <Button
                color="#172026"
                bg="#fefcfd"
                text="Say hello!"
                as="button"
                type="submit"
              />
            </form>
          </ContactForm>
        </ContactFormContainer>
      </Container>
    </StyledSection>
  );
};

export default ContactSection;
