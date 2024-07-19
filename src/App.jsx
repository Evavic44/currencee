import Header from "./components/Header/Header";
import Logo from "./components/Logo";
import Status from "./components/Status/Status";
import Converter from "./components/Converter";
import Result from "./components/Converter/Result";
import Convert from "./components/Converter/Convert";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";

export default function App() {
  return (
    <div className="app">
      <Header>
        <Logo />
        <Status />
      </Header>
      <Converter>
        <Convert />
        <Result />
      </Converter>
      <Footer>
        <ThemeSwitch />
      </Footer>
    </div>
  );
}
