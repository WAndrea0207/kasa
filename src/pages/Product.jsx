import { useLoaderData } from "react-router-dom";

export default function Product() {
    const product = useLoaderData(); // Data is ready on first render

    return (
        <div>
            { product.id }
        </div>
    );
}