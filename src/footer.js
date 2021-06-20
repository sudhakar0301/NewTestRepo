const Footer = (props) => {
  const FooterStyles = {
    height: "50px",
    width: "100%",
    backgroundColor: "#e3d5e0",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "2%"
  };
  return (
    <div className="footer-wrapper" style={FooterStyles}>
      <p>@copyrights reserved</p>
    </div>
  );
};

export default Footer;
