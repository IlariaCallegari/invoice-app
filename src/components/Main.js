import useStyles from "../styles/main-style";
import Navbar from "./Navbar";
import iconPlus from "../assets/icon-plus.svg";
import iconArrowDown from "../assets/icon-arrow-down.svg";

function Main() {
  const { mainCtn, mainSection, header, headerRight, filter, createButton } =
    useStyles();
  return (
    <div className={mainCtn}>
      <Navbar />
      <main className={mainSection}>
        <div className={header}>
          <div>
            <h1>Invoices</h1>
            <p>There are 7 total invoices</p>
          </div>
          <div className={headerRight}>
            <div className={filter}>
              <p>Filter by status</p>
              <img src={iconArrowDown} alt="arrow down" />
            </div>
            <div className={createButton}>
              <div>
                <img src={iconPlus} alt="plus sign" />
              </div>
              <p>New Invoice</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
