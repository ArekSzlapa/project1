import Logo from "../images/React-icon.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="ReactLogo" />
      <h2>ReactFunFacts!</h2>
      <h3>React course - Project 1</h3>
    </nav>
  );
};

export default Navbar;
