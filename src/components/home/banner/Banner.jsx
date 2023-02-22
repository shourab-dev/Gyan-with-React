import { Container, Row, Col } from "react-bootstrap";
import PrimaryButton from "../../utils/PrimaryButton";
import { CommonCss } from "../../constant";
import "./BannerStyle.css";
export default function Banner() {
  return (
    <section
      id="banner"
      style={{ backgroundImage: `url("/images/banner.webp")` }}
    >
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <div className="bannerCnt col-lg-6">
            <h2>Let’s Learn</h2>
            <h3>For Bright Future</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus comodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <PrimaryButton
              margin={`20px 10px 0 0`}
              name="Start a Course"
            ></PrimaryButton>
            <PrimaryButton
              bgColor={CommonCss.primaryColor}
              name="Take a Tour"
            ></PrimaryButton>
          </div>
        </Row>
      </Container>
    </section>
  );
}
