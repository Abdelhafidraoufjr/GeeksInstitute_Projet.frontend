import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <div className="hidden md:flex gap-6">
          <a href="/" className="text-gray-700 hover:text-red-600">
            Accueil
          </a>
          <a href="#actualiteBlog" className="text-gray-700 hover:text-red-600">
            Actualités-Blog
          </a>
          <a href="/propos" className="text-gray-700 hover:text-red-600">
            À propos
          </a>
          <a href="/contact" className="text-gray-700 hover:text-red-600">
            Contact
          </a>
        </div>
        <div>
          <a
            href="/login"
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Se connecter
          </a>
        </div>
      </div>
    </nav>
  );
}
