import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="404">
            <h2>Oooooooooooooos.......</h2>
            <p>La page que vous essayez d'acceder n'existe pas</p>
            <Link to='/'>Allez a la page d'acceuil........</Link>

        </div>
    );

}
export default NotFound;