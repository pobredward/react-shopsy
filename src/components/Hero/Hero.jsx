import React from "react";
import Image1 from "../../assets/hero/arginine.png";
import Image2 from "../../assets/hero/creatine.png";
import Image3 from "../../assets/hero/arginine.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "밀리터리 프로틴",
    description:
      "운동 후 단백질 보충을 복용하면 근육 합성이 촉진될 수 있습니다. 이는 근육을 더 크고 강하게 만들어줍니다. 근력운동은 근육을 손상시킬 수 있습니다. 단백질 보충은 근육 손상을 최소화하고 빠른 회복을 돕는 데 도움이 될 수 있습니다. 충분한 단백질 섭취는 근력운동에 필수적입니다. 단백질 보충은 근력 향상을 지원하고 근육 성장을 촉진할 수 있습니다. 연령 또는 활동 수준 변화로 인한 근력 손실을 예방하거나 감소시킬 수 있습니다. 단백질 보충제는 근육의 대사량을 증가시켜 체지방 감소를 돕는 데 도움이 될 수 있습니다.",
  },
  {
    id: 2,
    img: Image2,
    title: "크레아틴",
    description:
      "크레아틴은 인플러시브 에너지 시스템에서 사용되는 에너지원으로서, 근육 내 에너지 공급을 촉진하여 더 많은 에너지를 생산할 수 있도록 도와줍니다. 이는 높은 강도의 운동을 계속할 수 있는 데 유리합니다. 크레아틴 보충은 근육 세포 내 수분 및 크레아틴 인산의 축적을 촉진할 수 있습니다. 이는 근육 부피를 증가시키고, 근육의 외관을 더 크고 풍성하게 만들 수 있습니다. 크레아틴은 근육 성장을 촉진할 수 있으며, 이는 근육의 근력 및 근량을 증가시킬 수 있습니다. 크레아틴은 근육 내 에너지 회복을 돕는데, 이는 근육 손상을 빠르게 회복시키고 근육 피로를 감소시키는 데 도움이 됩니다.",
  },
  {
    id: 3,
    img: Image3,
    title: "아르기닌",
    description:
      "아르기닌은 아미노산 중 하나로서 혈관을 확장시키고 혈액순환을 촉진하는데 도움을 줄 수 있습니다. 이로써 근육에 산소와 영양분을 공급함으로써 근성장을 촉진할 수 있습니다. 또한, 아르기닌은 혈류를 향상시킴으로써 근육 손상을 회복하는 데 도움을 줄 수 있으며, 이는 근력운동 후 근육의 회복 속도를 증가시킬 수 있습니다.",
  },
];

const Hero = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    // slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-20 rounded-3xl rotate-45 -z-9"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <h1 className="flex text-8xl justify-center mb-10">ALL IN ONE</h1>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm w-[500px]"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="flex justify-start"
                  >
                    <button
                      onClick={() => alert("사전 등록이 완료되었습니다")}
                      className="bg-gradient-to-r from-primary hover:scale-105 duration:200 text-white py-2 px-4 to-primary rounded-full"
                    >
                      사전 등록하기
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
