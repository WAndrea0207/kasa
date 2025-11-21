import {createBrowserRouter, Outlet, RouterProvider, redirect} from "react-router-dom";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";


function RootLayout() {
    return (
        <>
            <Outlet /> {/* Renders child routes */}
        </>
    );
}

// Loader: Fetch product data before rendering
async function productLoader({ params }) {
    try {
        const response = await fetch('../public/products.json');
        const data = await response.json();
        const product = data.find(p => p.id === params.id);

        if (!product) {
            return redirect("/404"); // Redirects to 404 page if a product does not exist in the mock data
        }

        return product;
    } catch (err) {
        throw new Response(err, { status: 500 }); // Network failure
    }
}

// Configure routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products/:id",
                element: <Product />,
                loader: productLoader,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "404",
                element: <NotFound />,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}