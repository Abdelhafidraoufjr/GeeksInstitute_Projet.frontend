import { useState } from "react";

export default function AjouterBlog() {
  const [createur, setCreateur] = useState("");
  const [titre, setTitre] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contenu, setContenu] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ createur, titre, imageUrl, contenu }),
    }).then((res) => res.json());
    //   .then((data) => setMessage("Blog ajouté avec succès !"))
    //   .catch((err) => setMessage("Erreur lors de l'ajout du blog."));

    setCreateur("");
    setTitre("");
    setImageUrl("");
    setContenu("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
          Ajouter un Blog
        </h2>

        {message && <p className="text-center text-red-600 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-red-600 font-medium mb-2">
              Nom du créateur
            </label>
            <input
              type="text"
              value={createur}
              onChange={(e) => setCreateur(e.target.value)}
              required
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Nom du créateur"
            />
          </div>
          <div>
            <label className="block text-red-600 font-medium mb-2">
              Titre du blog
            </label>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Titre"
            />
          </div>

          <div>
            <label className="block text-red-600 font-medium mb-2">
              URL de l'image
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="https://exemple.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-red-600 font-medium mb-2">
              Contenu du blog
            </label>
            <textarea
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Écrivez votre article ici..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}
