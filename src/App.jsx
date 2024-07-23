import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading type="h1">App</Heading>
            <div>
              <Heading type="h2">Check In And Out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => console.log("clockin")}
              >
                Check In
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => console.log("clockout")}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <form>
              <Heading as="h3">Form</Heading>
              <Input type="number" placeholder="Number Of guest" />
              <Input type="number" placeholder="Number Of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;
