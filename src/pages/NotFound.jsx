import {Link} from "react-router";

export default function NotFound() {
    return (
        <main>
            <h1>404 — Page introuvable</h1>
            <p>Désolé, la page que vous cherchez n'existe pas.</p>
            <p>
                <Link to="/">Retour à l'accueil</Link>
            </p>
        </main>
    );
}