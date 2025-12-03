type Year = {
  year: number;
};

const Footer = () => {
  const current: Year = { year: new Date().getFullYear() };

  return <p className="footer">© {current.year}. All rights reserved.</p>;
};

export default Footer;
