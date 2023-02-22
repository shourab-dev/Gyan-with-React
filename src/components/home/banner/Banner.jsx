import { Container, Row, Col } from "react-bootstrap";
import PrimaryButton from "../../utils/PrimaryButton";
import { CommonCss } from "../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ArrowsGroup from "../../utils/ArrowsGroup";
import "swiper/css";
import "swiper/css/navigation";
import "./BannerStyle.css";
// * DUMMYP RESONSE DATA
import { Banners } from "../../../response";
//* USING STATE
import { useState, useEffect } from "react";

export default function Banner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  return (
    <section
      id="banner"
      style={{ backgroundImage: `url("/images/banner.webp")` }}
    >
      <ArrowsGroup
        prevArrow="image-swiper-button-prev"
        nextArrow="image-swiper-button-next"
      />
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
            {banners.map((Banner) => {
              return (
                <SwiperSlide key={Banner.id}>
                  <div className="bannerCnt col-lg-6">
                    <h2>{Banner.moto}</h2>
                    <h3>{Banner.title}</h3>
                    <p>{Banner.detail}</p>
                    <PrimaryButton
                      margin={`20px 10px 10px 0`}
                      name={Banner.callToAction}
                      href={Banner.callToActionUrl}
                    ></PrimaryButton>
                    <PrimaryButton
                      bgColor={CommonCss.primaryColor}
                      name={Banner.secondaryButton}
                      href={Banner.secondaryButtonUrl}
                    ></PrimaryButton>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
}
