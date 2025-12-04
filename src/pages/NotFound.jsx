import {Link} from "react-router";
import "./NotFound.scss";

export default function NotFound() {
    return (
        <main className="notfound">
            <h1>404</h1>
            <p>Désolé, la page que vous cherchez n'existe pas.</p>
            <p>
                <Link to="/">Retour à l'accueil</Link>
            </p>
        </main>
    );
}