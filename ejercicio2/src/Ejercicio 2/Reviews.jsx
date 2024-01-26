import Rating from "../Rating";
import Review from "../Review";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <Rating rating={reviews}></Rating>
      <Review review={reviews}></Review>
    </div>
  );
};

export default Reviews;
