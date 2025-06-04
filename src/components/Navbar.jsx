import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 hover:text-red-600">
            Accueil
          </Link>
          <Link
            to="/actualiteBlog"
            className="text-gray-700 hover:text-red-600"
          >
            Actualités-Blog
          </Link>
          <Link to="/propos" className="text-gray-700 hover:text-red-600">
            À propos
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/ajouter-blog"
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                Add Post
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-400 transition"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
