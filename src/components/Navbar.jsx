export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-indigo-600">MonSite</div>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Accueil</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">À propos</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  )
}
