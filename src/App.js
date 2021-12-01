import NavigationContainer from "./components/NavigationContainer";
import Test from "./components/Test";
import Logos from "./components/Logos";
import Advantages from "./components/Advantages";
import SnapShots from "./components/SnapShots";
import FreeTest from "./components/FreeTest";
import Comments from "./components/Comments";
import FAQ from "./components/FAQ";

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
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <NavigationContainer />
      <Test />
      <Logos />
      <Advantages />
      <SnapShots />
      <FreeTest />
      <Comments />
      <FAQ />
    </div>
  );
}

export default App;
