function Review({ review }) {
  return (
    <div>
      <div>
        {review.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.review.avatar} />
              <p>{item.review.title}</p>
              <p>{item.review.description}</p>
              <p>{item.review.date}</p>
              <p>{item.review.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
