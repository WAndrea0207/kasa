
import "./Banner.scss";

export default function Banner({ image, title }) {
    return (
        <div className="banner">
            <img src={image} alt={title || "Banner"} className="banner__image" />
            {title && <h1 className="banner__text">{title}</h1>}
        </div>
    );
}
