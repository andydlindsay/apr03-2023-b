import Header from "./Header";

const Navbar = (props) => {
  console.log('props', props);

  return (
    <nav>
      <p>Navbar component</p>
      <Header heading={props.headingFromParent} />
    </nav>
  );
};

export default Navbar;
