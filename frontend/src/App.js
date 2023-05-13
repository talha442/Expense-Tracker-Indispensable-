import styled from "styled-components";
import bg from "./img/bg2.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    // Background Image Passed as a prop
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;
