import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import SearchBox from "../SearchBox";
import "./Header.css"
import Logo from "../Header/Images/logo.png"
//create fuction for top navigation menu with search box
const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout ()
   

   );
  };

  return (

    <header>
    
  
  




    
      <Navbar className="nav" >
        <Container className="nav">
          <LinkContainer to="/">
            <Navbar.Brand className="nav"><img src={Logo} alt="" className="logo__image"/></Navbar.Brand>
          </LinkContainer>
          <div className="nav"> <SearchBox /> </div>
          

          <Nav className="ml-auto nav">
          <LinkContainer to="/products">
              <Nav.Link className="nav" >
              <i className="fas fa-heart nav"></i> Products
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className="nav">
                <i className="fas fa-shopping-cart nav"></i> Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="profile">
                  <NavDropdown.Item className="nav">Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="nav">
                  <i className="fas fa-user nav"></i> SignIn
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="admin" id="useradmin">
                <LinkContainer to="/admin/users">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/products">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orders">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
