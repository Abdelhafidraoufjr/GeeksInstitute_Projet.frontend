import background from '../assets/4088661.jpg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="h-full w-full backdrop-blur-sm bg-black/40 flex flex-col items-center justify-center px-4">
        <h2
          className="text-white text-2xl md:text-4xl font-semibold text-center"
          style={{ fontFamily: 'Amiri, serif' }}
        >
          الصحة النفسية والرفاهية
        </h2>

        <h1 className="playfair-display text-red text-5xl md:text-7xl font-bold text-center text-red-600 mt-4">
          Santé Mentale & Bien Être
        </h1>

        <p className="text-white text-lg md:text-xl text-center mt-4 max-w-2xl">
          Un espace communautaire pour partager conseils, récits et ressources autour du bien-être mental.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-900 text-white px-9 py-3 rounded-md text-lg font-semibold text-center"
          >
            Nous Contacter
          </a>
          <a
            href="#explorer"
            className="bg-white hover:bg-gray-200 text-red-700 px-9 py-3 rounded-md text-lg font-semibold text-center"
          >
            Explorer le Blog
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
        <ChevronDownIcon className="h-8 w-8 text-white mx-auto" />
        <p className="text-white text-sm mt-1">Faire défiler vers le bas</p>
      </div>
    </div>
  );
}
