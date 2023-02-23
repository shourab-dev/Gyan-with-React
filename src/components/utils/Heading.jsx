import { Container, Col } from "react-bootstrap";
import myStyle from "./utilsStyles/HeadingStyle.module.css";
export default function Heading({ title, detail }) {
  return (
    <Container>
      <Col md={6} className={myStyle.heading}>
        <h2>{title}</h2>
        <p>{detail}</p>
      </Col>
    </Container>
  );
}
