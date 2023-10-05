import "./Rating.sass";
import Star from "../../assets/images/Stars.svg";
function Rating({ rating }) {
  const maxStar = 5;
  const Stars = [];
  for (let i = 0; i < maxStar; i++) {
    Stars.push(
      <i
        className={i < rating ? "fa-solid fa-star red" : "fa-solid fa-star grey"}
        key={i}
      ></i>
    );
  }
  return <div className="rating">{Stars}</div>;
}
export default Rating;
