import Nav from "./components/nav/Nav";
import AnimatedRouter from "./components/router/AnimatedRouter";
import { GlobalStyles } from "./components/shared/global";

function App() {
  const setActive = (query, id) => {
    const elementsArr = document.querySelectorAll(`${query}`);
    elementsArr.forEach((element) => element.classList.remove("active"));
    document.getElementById(`${id}`).classList.add("active");
  };

  return (
    <>
      <GlobalStyles />
      <Nav />
      <AnimatedRouter setActive={setActive} />
    </>
  );
}

export default App;
