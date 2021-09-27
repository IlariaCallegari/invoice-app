import logo from "../assets/logo.svg";
import { ReactComponent as IconMoon } from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import useStyles from "../styles/navbar-style";
import colors from "../utils/colors"

function Navbar() {
  const { navbar, logoCtn, iconCtn, avatarCtn } = useStyles();
  return (
    <nav className={navbar}>
      <div className={logoCtn}>
        <img src={logo} alt="invoice app logo" />
        <span></span>
      </div>
      <div>
        <div className={iconCtn}>
          <IconMoon fill={colors.slate}/>
        </div>
        <div className={avatarCtn}>
          <img src={avatar} alt="user avatar img" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
