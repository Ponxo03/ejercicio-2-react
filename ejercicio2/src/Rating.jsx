function Rating({ rating }) {
  return (
    <div>
      <div>
        {rating.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
