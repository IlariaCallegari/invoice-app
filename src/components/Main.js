import useStyles from "../styles/main-style";
import Navbar from "./Navbar";

function Main() {
    const {mainCtn} = useStyles()
  return (
    <div className={mainCtn}>
      <Navbar />
      <main>main</main>
    </div>
  );
}

export default Main;
