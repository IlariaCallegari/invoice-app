import { createUseStyles } from "react-jss";
import colors from "../utils/colors";

const useStyles = createUseStyles({
  navbar: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: colors.blue, 
    borderRadius: "0 1.3rem 1.3rem 0",
  },
  logoCtn: {
    background: colors.darkPurple,
    height: "6.438rem",
    width: "6.438rem",
    borderRadius: "0 1.3rem 1.3rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "& img": {
      width: "2.5rem",
      height: "2.357rem",
      zIndex: 2,
    },
    "& span": {
      background: colors.lightPurple,
      height: "50%",
      width: "100%",
      position: "absolute",
      bottom: 0,
      zIndex: 1,
      borderRadius: "1.3rem 0 1.3rem 0",
    },
  },
  iconCtn: {
      height: "6.438rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  },
  avatarCtn: {
    height: "6rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: `1px solid rgba(126, 136, 195, 0.2)`,
    "& img": {
        width: "2.5rem",
        borderRadius: "50%"
    }
  }
  
});

export default useStyles;
