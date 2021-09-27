import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  mainCtn: {
    display: "flex",
    background: colors.white,
  },
  mainSection: {
    width: "70%",
    margin: "7% auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& div h1": {
      fontSize: "2rem",
      fontWeight: 300,
      letterSpacing: "1px",
      marginBottom: "1rem",
    },
    "& div:nth-child(1) p": {
      color: colors.grey,
    },
  },
  headerRight: {
    display: "flex",
    width: "30%",
    justifyContent: "space-between"
  },
  filter: {
    display: "flex",
    alignItems: "center",
    "& img": {
        marginLeft: "2rem"
    }
  },
  createButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: colors.darkPurple,
    color: "#fff",
    padding: "0.8rem 1rem",
    borderRadius: "2rem",

    "& div": {
        background: "#fff",
        width: "2.2rem",
        height: "2.2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginRight: "1rem"
    }
  },
});

export default useStyles;
