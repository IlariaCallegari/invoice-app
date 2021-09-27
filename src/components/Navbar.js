import logo from "../assets/logo.svg";
import iconMoon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import useStyles from "../styles/navbar-style";

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
          <img src={iconMoon} alt="moon Img" />
        </div>
        <div className={avatarCtn}>
          <img src={avatar} alt="user avatar img" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
