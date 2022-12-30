import "./App.css";

import { Body, Header, ToggleContainer } from "./styles";

import { Button } from "./components";
import { Home } from "./pages";
import { useToggleLightMode } from "./theme";

function App() {
  const { isLightMode, toggleLightMode } = useToggleLightMode();

  return (
    <div className="App">
      <Header>
        <h3>A Header!</h3>
        <ToggleContainer isOn={isLightMode} onClick={toggleLightMode} />
      </Header>
      <Body>A Body!</Body>
      <Home />
      <Button secondary={true}>Hello</Button>
    </div>
  );
}

export default App;
