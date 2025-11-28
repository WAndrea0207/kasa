import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ id, title, cover }) {
    return (
        <Link to={`/../../products/${id}`} className="card">
            <img src={cover} alt={title} className="card__image" />
            <h2 className="card__title">{title}</h2>
        </Link>
    );
}