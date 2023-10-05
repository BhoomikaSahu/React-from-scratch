const ResCard = (props) => {
  const { info } = props.resObj;
  // console.log(info,'info');
  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + info.cloudinaryImageId} />
      <h1>{info.name}</h1>
      <div>{info.avgRating}</div>
      <div>{info.cuisines.map((c) => `${c}, `)}</div>
      <div>{info.locality}</div>
    </div>
  );
};

export default ResCard;
