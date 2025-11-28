import { useEffect, useState } from "react";
import "./Home.scss";
import Card from "../components/Card.jsx";
import Banner from "../components/Banner.jsx";
import bannerHome from "../assets/banner-home.webp";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <main className="home">
            <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />
            <div className="home__cards">
                {products.map(product => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        cover={product.cover}
                    />
                ))}
            </div>
        </main>
    );
}