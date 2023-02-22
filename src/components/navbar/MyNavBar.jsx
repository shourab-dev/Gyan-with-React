import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import TopHeader from "../topHeader/TopHeader";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./mynavbar.css";
import PrimaryButton from "../utils/PrimaryButton";
export default function MyNavBar() {
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar sticky="top" className="MyNavBar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.webp" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle  bsPrefix="myNavToggler" className="d-lg-none" aria-controls="myCustomNav">
            <AiOutlineMenu />
          </Navbar.Toggle>

          <Navbar.Collapse id="myCustomNav">
            <Nav className="m-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About us
              </Link>
              <Link className="nav-link" to="/courses">
                Our courses
              </Link>
              <Link className="nav-link" to="/testimonial">
                Testimonial
              </Link>
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </Nav>
            <div>
              <PrimaryButton href="/about" name="Get Started Now" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
