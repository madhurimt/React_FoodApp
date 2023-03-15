//Title functional components
const Title = () => {
  return (
    <a href="#">
      <h2>Food Villa</h2>
    </a>
  );
};

//header Component

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
