
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./topHeader.css";
export default function TopHeader() {
  return (
    <>
      <div className="topHeader d-lg-block d-none">
        <Container fluid="md">
          <Row>
            <Col lg={6}>
              <ul className="topHeaderMenu">
                <li>
                  <Link to="#">Have any Trouble ?</Link>
                </li>
                <li>
                  <Link to="tel:01234567890">
                    {" "}
                    <BsTelephoneFill /> (+880) 1234 567 890
                  </Link>
                </li>
                <li>
                  <Link to="mailto:gyan@gmail.com">
                    <MdEmail /> gyan@gmail.com
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={6} className="text-end">
              <Link to="/login" className="loginBtn">
                Login/Register
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}
