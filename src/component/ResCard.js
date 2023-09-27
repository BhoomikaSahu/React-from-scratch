const ResCard = (props) => {
  const { info } = props.resObj;
  return (
    <div className="res-card">
      <img className="res-logo" src={info.image.url} />
      <h1>{info.name}</h1>
      <div>{info.rating.aggregate_rating}</div>
      <div>{info.cuisine.map((c) => `${c.name}, `)}</div>
      <div>{info.locality.address}</div>
    </div>
  );
};

export default ResCard;
