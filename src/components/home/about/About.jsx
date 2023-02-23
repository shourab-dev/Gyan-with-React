import aboutStyle from "./aboutStyle.module.css";
import Text from "../../utils/Text";
import { useEffect, useState, usePrevious } from "react";
//* SWIPER SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../utils/Heading";
import { aboutContents } from "../../../response";

const About = () => {
  const [aboutSliders, setAboutSliders] = useState([]);
  useEffect(() => {
    setAboutSliders(aboutContents);
  }, []);

  return (
    <section id={aboutStyle.about}>
      <Heading
        title="About Us"
        detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua."
      />
      <Container className={aboutStyle.spaceFromTop}>
        <Row>
          <Col lg={6} className={aboutStyle.aboutImage}>
            <div className={aboutStyle.imageContainer}>
              <Swiper pagination={true} modules={[Pagination]}>
                {aboutSliders.map((aboutSlide) => {
                  return (
                    <SwiperSlide>
                      <div className="imageSlide">
                        <img src={aboutSlide.image} alt={aboutSlide.title} title={aboutSlide.title} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Col>
          <Col lg={6} className={aboutStyle.aboutText}>
                <Text />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
