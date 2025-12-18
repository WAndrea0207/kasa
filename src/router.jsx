import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

// Loader: Fetch product data before rendering
async function productLoader({ params }) {
    try {
        const response = await fetch('/products.json');
        const data = await response.json();
        const product = data.find(p => p.id === params.id);

        if (!product) {
            return redirect("/404");
        }

        return product;
    } catch (err) {
        return redirect("/404");
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "products/:id", element: <Product />, loader: productLoader },
            { path: "about", element: <About /> },
            { path: "404", element: <NotFound /> },
            { path: "*", element: <NotFound /> }
        ],
    },
]);

export default router;
