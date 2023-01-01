import "./App.css";

import { Body, Header, ToggleContainer } from "./styles";

import { Button } from "./components";
import { Home } from "./pages";
import { useToggleDarkTheme } from "./theme";

function App() {
  const { isDarkMode, toggleDarkMode } = useToggleDarkTheme();

  return (
    <div className="App">
      <Header>
        <h3>A Header!</h3>
        <ToggleContainer isOn={isDarkMode} onClick={toggleDarkMode} />
      </Header>
      <Body>A Body!</Body>
      <Home />
      <Button secondary={true}>Hello</Button>
    </div>
  );
}

export default App;
