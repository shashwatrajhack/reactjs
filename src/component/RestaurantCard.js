const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating}</h5>
        <h5>Rs {costForTwo / 100} FOR TWO</h5>
        <h5>{deliveryTime} min</h5>
      </div>
    );
  };

  export default RestaurantCard;