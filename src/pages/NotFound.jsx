import {Link} from "react-router";
import "./NotFound.scss";

export default function NotFound() {
    return (
        <main className="notfound">
            <h1>404</h1>
            <p>Oups! La page que<span className="break-mobile">vous demandez n'existe pas.</span></p>
            <p>
                <Link to="/">Retourer sur la page d'accueil</Link>
            </p>
        </main>
    );
}