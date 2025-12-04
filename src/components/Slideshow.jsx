import { useState } from "react";
import "./Slideshow.scss";
import arrow from "../assets/arrow.webp";

export default function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Pas de flèches si une seule image
    if (pictures.length <= 1) {
        return (
            <div className="slideshow">
                <img src={pictures[0]} alt="Slide" className="slideshow__image" />
            </div>
        );
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt="Slide" className="slideshow__image" />

            <button className="slideshow__arrow slideshow__arrow--left" onClick={goToPrevious}>
                <img src={arrow} alt="Précédent" />
            </button>

            <button className="slideshow__arrow slideshow__arrow--right" onClick={goToNext}>
                <img src={arrow} alt="Suivant" />
            </button>

            <p className="slideshow__counter">
                {currentIndex + 1}/{pictures.length}
            </p>
        </div>
    );
}
