import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import "./SupportCardStyle.css";

// * DUMMY DATA FROM RESPONSE
import { supportContents } from "../../../response";

export default function SupportCard() {
  const [supportCards, setSupportCards] = useState([]);
  useEffect(() => {
    setSupportCards(supportContents);
  }, []);

  return (
    <section id="supportCardsGroup">
      <Container>
        <Row className="justify-content-md-center">
          {supportCards.map((supportCard, index) => {
            return (
              <Col
                md={supportCards.length - 1 == index ? 12 : 6}
                lg={3}
                className="text-center supportCard"
              >
                <img src={supportCard.icon} alt={supportCard.title} />
                <h4>{supportCard.title}</h4>
                <Link to={supportCard.callToActionUrl}>
                  {supportCard.callToAction}
                  <span>
                    <BsArrowRightShort />
                  </span>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
