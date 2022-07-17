import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("./ReviewData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mb-36 px-2 md:mx-56">
      <div className="space-y-3 pb-10 text-center">
        <h2 className="text-6xl font-bold text-yellow">REVIEWS</h2>
        <p className="text-2xl font-bold text-white">What do our users say?</p>
      </div>
      <Carousel responsive={responsive}>
        {reviews.map((review) => (
          <div
            key={review?.id}
            className="reviewCard p-6 text-white"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-6">
              <div className="pb-4">
                <img
                  src={review?.image}
                  alt=""
                  width="100"
                  height="100"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">{review?.username}</p>
                <div className="star-rating">
                  <Rating
                    initialRating={review?.rating}
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar />}
                    readonly
                  />
                </div>
              </div>
            </div>
            <div>
              <p>{review?.review}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientReview;
