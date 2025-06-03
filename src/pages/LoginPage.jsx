import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-indigo-900 via-indigo-800 to-indigo-700 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 ">
        <h2 className="text-3xl font-extrabold text-red-600 mb-6 text-center">
          Connexion a espace utilisateur
        </h2>
        <h2 className="text-2xl font-extrabold text-black-600 mb-6 text-center">
        تسجيل الدخول إلى مساحة المستخدم
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-red-600 font-medium mb-2">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              requireds
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="exemple@domaine.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-red-600 font-medium mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Votre mot de passe"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-red-700">
          Pas encore de compte ?{' '}
          <a href="#" className="font-semibold text-red-900 hover:underline">
            Inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
