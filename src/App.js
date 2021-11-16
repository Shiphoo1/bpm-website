import NavigationContainer from "./components/NavigationContainer";
import SectionOne from "./components/SectionOne";
import Logos from "./components/Logos";

function App() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500;800&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <NavigationContainer />
      <SectionOne />
      <Logos />
    </div>
  );
}

export default App;
