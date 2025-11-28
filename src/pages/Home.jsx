import "./Home.scss";
import products from "../products.json";
import Card from "../components/Card.jsx";

export default function Home() {
    return (
        <main className="home">
            <div className="home__banner">
                <img src="../../src/assets/banner1.svg" alt="Chez vous, partout et ailleurs" className="home__banner__image" />
                <h1 className="home__banner__text">Chez vous, partout et ailleurs</h1>
            </div>
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