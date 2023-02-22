import { Container, Row, Col } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import PrimaryButton from "../../utils/PrimaryButton";
import { CommonCss } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import "./BannerStyle.css";
export default function Banner() {
  return (
    <section
      id="banner"
      style={{ backgroundImage: `url("/images/banner.webp")` }}
    >
      <div className="button_group">
        <button className="image-swiper-button-prev">
          <GrPrevious />
        </button>
        <button className="image-swiper-button-next">
          <GrNext />
        </button>
      </div>
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            spaceBetween={0}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="bannerCnt col-lg-6">
                <h2>Let’s Learn</h2>
                <h3>For Bright Future</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus comodo viverra
                  maecenas accumsan lacus vel facilisis.
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="bannerCnt col-lg-6">
                <h2>Let’s Learn 2nd slide</h2>
                <h3>For Bright Future</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus comodo viverra
                  maecenas accumsan lacus vel facilisis.
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="bannerCnt col-lg-6">
                <h2>Let’s Learn 3rd slide</h2>
                <h3>For Bright Future</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus comodo viverra
                  maecenas accumsan lacus vel facilisis.
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
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  );
}
