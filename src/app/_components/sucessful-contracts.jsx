"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Sucessful = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const contracts = [
    {
      id: 1,
      title: "Looking for Math Teacher",
      paymentType: "Fixed Price",
      client: {
        name: "Edward Smith",
        role: "Founder of MathTech",
        rating: "5.0",
        image: "/images/profimg1.png",
      },
      talent: {
        name: "Edward Smith",
        role: "Math Teacher",
        rating: "5.0",
        image: "/images/profimg2.jpg",
      },
      description:
        "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      jobDetails: {
        startDate: "Jan 15, 2025",
        endDate: "Not Estimated",
      },
    },
    {
      id: 2,
      title: "Web Development Project",
      paymentType: "Hourly Rate",
      client: {
        name: "Sarah Johnson",
        role: "CEO of WebSolutions",
        rating: "4.8",
        image: "/images/profimg1.png",
      },
      talent: {
        name: "Michael Brown",
        role: "Frontend Developer",
        rating: "4.9",
        image: "/images/profimg2.jpg",
      },
      description:
        "Need a skilled frontend developer to build a responsive e-commerce website with React and Node.js.",
      jobDetails: {
        startDate: "Feb 1, 2025",
        endDate: "Mar 15, 2025",
      },
    },
    {
      id: 3,
      title: "Mobile App Design",
      paymentType: "Fixed Price",
      client: {
        name: "David Wilson",
        role: "Product Manager",
        rating: "4.7",
        image: "/images/profimg1.png",
      },
      talent: {
        name: "Emily Davis",
        role: "UI/UX Designer",
        rating: "5.0",
        image: "/images/profimg2.jpg",
      },
      description:
        "Looking for a creative designer to create wireframes and high-fidelity prototypes for our new mobile app.",
      jobDetails: {
        startDate: "Jan 20, 2025",
        endDate: "Feb 28, 2025",
      },
    },
    {
      id: 4,
      title: "Content Writing",
      paymentType: "Hourly Rate",
      client: {
        name: "Robert Taylor",
        role: "Marketing Director",
        rating: "4.9",
        image: "/images/profimg1.png",
      },
      talent: {
        name: "Jennifer Lee",
        role: "Content Writer",
        rating: "4.8",
        image: "/images/profimg2.jpg",
      },
      description:
        "Need a professional writer to create blog posts and marketing content for our tech startup.",
      jobDetails: {
        startDate: "Feb 10, 2025",
        endDate: "Ongoing",
      },
    },
    {
      id: 5,
      title: "Data Analysis",
      paymentType: "Fixed Price",
      client: {
        name: "Lisa Anderson",
        role: "Research Lead",
        rating: "5.0",
        image: "/images/profimg1.png",
      },
      talent: {
        name: "Daniel Kim",
        role: "Data Scientist",
        rating: "4.9",
        image: "/images/profimg2.jpg",
      },
      description:
        "Seeking a data analyst to process and visualize survey results for our market research project.",
      jobDetails: {
        startDate: "Mar 1, 2025",
        endDate: "Apr 15, 2025",
      },
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <div className="contracts position-relative">
        <h2 className="text-center my-4">
          SUCCESSFUL <span>CONTRACTS</span>
        </h2>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          freeMode={true}
          onSlideChange={updateNavigation}
          onSwiper={updateNavigation}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper py-lg-5 py-3"
        >
          {contracts.map((contract) => (
            <SwiperSlide key={contract.id}>
              <div className="card-details">
                <div className="d-flex justify-content-between">
                  <h3 className="text-uppercase">contract</h3>
                  <div className="text-end contract-title">
                    <h4>{contract.title}</h4>
                    <p>
                      <strong>Payment Type:</strong> {contract.paymentType}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="people-card">
                    <div className="people-card-text">
                      <div className="d-flex justify-content-between text-end">
                        <img src={contract.client.image} alt="Client" />
                        <div>
                          <p className="m-0">client</p>
                          <h4>{contract.client.rating}</h4>
                        </div>
                      </div>
                    </div>
                    <h4 className="p-0">{contract.client.name}</h4>
                    <p className="p-0">{contract.client.role}</p>
                  </div>
                  <div className="people-card">
                    <div className="people-card-text">
                      <div className="d-flex justify-content-between text-end">
                        <img src={contract.talent.image} alt="Talent" />
                        <div>
                          <p className="talent-clr">Talent</p>
                          <h4>{contract.talent.rating}</h4>
                        </div>
                      </div>
                    </div>
                    <h4 className="p-0">{contract.talent.name}</h4>
                    <p className="p-0">{contract.talent.role}</p>
                  </div>
                </div>

                <div>
                  <h4>Description</h4>
                  <p>{contract.description}</p>
                </div>
                <div>
                  <h4>Job Details</h4>
                  <div className="d-flex justify-content-between gap-4">
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>{contract.jobDetails.startDate}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h4>End Date: </h4>
                        <p>{contract.jobDetails.endDate}</p>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="d-flex justify-content-between">
                        <h4>Budget: </h4>
                        <p>$5,000</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h4>Duration: </h4>
                        <p>3 months</p>
                      </div>
                    </div>
                  </div>

                  <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">
                    Fixed-priced contract is under the protection of the payment
                    system.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          className={`swiper-button-prev ${
            isBeginning ? "swiper-button-disabled" : ""
          }`}
          onClick={handlePrev}
          disabled={isBeginning}
        >
          {/* <FaArrowLeft /> */}
          <img src="/images/left-arrow.png" alt="" />
        </button>
        <button
          className={`swiper-button-next ${
            isEnd ? "swiper-button-disabled" : ""
          }`}
          onClick={handleNext}
          disabled={isEnd}
        >
          {/* <FaArrowRight /> */}
          <img src="/images/rightarrow.png" alt="" />
        </button>
      </div>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: unset;
          bottom: -100px;
          width: 10px;
          padding: 30px;
          height: 20px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border: none;
          outline: none;
        }
          .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after, .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    content: none;
}

        .swiper-button-prev {
          left: 40%;
        }

        .swiper-button-next {
          right: 40%;
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .swiper-button-prev svg,
        .swiper-button-next svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Sucessful;
