const Header = (props) => {
  const headerStyles = {
    height: "50px",
    width: "100%",
    backgroundColor: "#e3d5e0",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "2%"
  };
  return (
    <div className="header-wrapper" style={headerStyles}>
      <h3> {props.name ? `Hello ${props.name}` : "Login "}</h3>
    </div>
  );
};

export default Header;
