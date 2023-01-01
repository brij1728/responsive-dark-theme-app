import "./App.css";

import { Body, Header, ToggleContainer } from "./styles";

import { Button } from "./components";
import { CardList } from "./components/CardList/CardList";
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
      <Body>
        <h4>A Body!</h4>
        <CardList />
      </Body>
      {/* <Home />
      <Button secondary={true}>Hello</Button> */}
    </div>
  );
}

export default App;
