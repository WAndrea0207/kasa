import "./Rating.scss";
import star from "../assets/star.webp";

export default function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((num) => (
                <img
                    key={num}
                    src={star}
                    alt="étoile"
                    className={num <= rating ? "rating__star--active" : "rating__star--inactive"}
                />
            ))}
        </div>
    );
}
