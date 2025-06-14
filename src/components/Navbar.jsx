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
        <a href="#">
          <img src={logo} alt="Logo" className="h-10" />
        </a>

        <div className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-red-600">
            Accueil
          </a>

          <a
          href="#actualiteBlog"
          className="text-gray-700 hover:text-red-600"
          >
            Actualités-Blog
          </a>

          <a href="#propos" className="text-gray-700 hover:text-red-600">
            À propos
          </a>

          <a href="#contact"  className="text-gray-700 hover:text-red-600">
            Contact
          </a>
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
