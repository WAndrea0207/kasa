import { useLoaderData } from "react-router-dom";
import Slideshow from "../components/Slideshow.jsx";
import Tags from "../components/Tags.jsx";
import Rating from "../components/Rating.jsx";
import Host from "../components/Host.jsx";
import Dropdown from "../components/Dropdown.jsx";
import "./Product.scss";

export default function Product() {
    const product = useLoaderData();

    return (
        <main className="product">
            <Slideshow pictures={product.pictures} />

            <div className="product__info">
                <div className="product__left">
                    <div className="product__header">
                        <h1 className="product__title">{product.title}</h1>
                        <p className="product__location">{product.location}</p>
                    </div>
                    <Tags tags={product.tags} />
                </div>

                <div className="product__right">
                    <Host name={product.host.name} picture={product.host.picture} />
                    <Rating rating={product.rating} />
                </div>
            </div>

            <div className="product__dropdowns">
                <Dropdown title="Description">
                    {product.description}
                </Dropdown>
                <Dropdown title="Équipements">
                    <ul>
                        {product.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>
        </main>
    );
}