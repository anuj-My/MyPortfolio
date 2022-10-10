import styled from "styled-components";

const QuoteContainer = styled.div`
  background: linear-gradient(to right, #17202645, #000000a6),
    url("https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283");
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fefcfd;
  width: 100%;
  height: 30rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 4rem;
    font-weight: 300;
    text-align: center;

    @media screen and (max-width: 1100px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 2.4rem;
    }
  }
`;
const Bottom = styled.div`
  font-style: italic;

  h4::before {
    content: "";
    display: block;
    width: 14px;
    background-color: white;
    height: 2px;
    position: relative;
    top: 12px;
    right: 22px;
  }
`;

const Quote = ({ quote, error }) => {
  const { content, author } = quote;
  return (
    <QuoteContainer>
      <Content>
        {error !== "" && <h1>{error}</h1>}
        <Top>
          <h3>{content}</h3>
        </Top>
        <Bottom>
          <h4>{author}</h4>
        </Bottom>
      </Content>
    </QuoteContainer>
  );
};

export default Quote;
