import "./Tags.scss";

export default function Tags({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span key={index} className="tags__item">{tag}</span>
            ))}
        </div>
    );
}
