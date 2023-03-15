import React,{ useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { signOutEmployer } from "../../redux/actions/employerActions";

function Navbars() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const user = useSelector((state) => state.technicianReducer);
  const users = useSelector((state) => state.employerReducer);
  console.log(user)
  console.log(users)

  const logoutHandler = () => {
    dispatch(signOutEmployer());
    navigate("/")
  };

useEffect(() => {}, [user, users]);
  return (
    <Navbar collapseOnSelect expand="lg" className="nerve">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Mega-Construct
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/architecture" className="text-white">
              Workers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">
              login
            </Nav.Link>
            <NavDropdown
              title={user.technician.fullName || users.employer.fullName}
              id="collapsible-nav-dropdown"
            >
              <Nav.Link as={Link} to="/profile">
                My Profile
              </Nav.Link>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;