"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Sucessful = () => {
  return (
    <>
      <div className="contracts">
        <h2 className="text-center my-4">
          SUCCESSFUL <span>CONTRACTS</span>
        </h2>

        {/* <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div> */}


        <Swiper
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
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
    modules={[FreeMode, Pagination]}
    className="mySwiper py-lg-5 py-3"
      >
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-details">
          <div className="d-flex justify-content-between">
            <h3  className="text-uppercase">contract</h3>
            <div className="text-end">
              <h4>Looking for Math Teacher</h4>
              <p>
                <strong>Payment Type:</strong>Fixed Price
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg1.png" />
                        <div>
                            <p class="m-0">client</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Founder of MathTech</p>
            </div>
            <div className="people-card">
                <div className="people-card-text">
                    <div className="d-flex justify-content-between text-end">
                        <img src="/images/profimg2.jpg" />
                        <div>
                            <p className="talent-clr">Talent</p>
                            <h4>5.0</h4>
                        </div>
                    </div>

                </div>
            <h4 className="p-0">Edward Smith</h4>
            <p className="p-0">Math Teacher</p>
            </div>

          </div>

          <div>
            <h4>Description</h4>
            <p>We are looking for a teacher to provide one-on-one algebra 
            and geometry tutoring, 60-minute sessions, twice weekly.</p>
          </div>
          <div>
            <h4>Job Details</h4>
            <div className="d-flex justify-content-between gap-4">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Start Date: </h4>
                        <p>Jan 15, 2025.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>End Date:  </h4>
                        <p>Not Estimated</p>
                    </div>
                </div>
            </div>

            <p className="bg-black w-100 rounded-4 text-white text-center p-2 m-0">Fixed-priced contract is under the protection of the
            payment system.</p>
          </div>

        </div>
        </SwiperSlide>
      </Swiper>

      </div>
    </>
  );
};

export default Sucessful;
