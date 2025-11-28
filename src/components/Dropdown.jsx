import { useState } from "react";
import "./Dropdown.scss";
import chevron from "../assets/chevron.webp";

export default function Dropdown({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className={`dropdown__arrow ${isOpen ? "open" : ""}`}>
                <img src={chevron} alt="chevron" className="dropdown__chevron" />
                </span>
            </button>
            {isOpen && (
                <div className="dropdown__content">
                    {children}
                </div>
            )}
        </div>
    );
}