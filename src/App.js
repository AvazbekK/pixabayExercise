import "./App.css";
import Navbar from "./components/navBar";
import Search from "./components/search/search";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme();
function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <div>
          <Navbar />
        </div>
        <Search />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
