import React from "react";
import background from "../assets/4088661.jpg";

function SectionOne() {
  return (
    <div
      className="overflow-y-auto h-[600px]  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="h-full w-full backdrop-blur-sm bg-black/40 flex flex-col items-center justify-center px-4">
        <h2
          className="text-white text-2xl md:text-4xl font-semibold text-center"
          style={{ fontFamily: "Amiri, serif" }}
        >
          الصحة النفسية والرفاهية
        </h2>

        <h1 className="playfair-display text-red-600 text-5xl md:text-7xl font-bold text-center text-red-600 mt-4">
          Santé Mentale & Bien Être
        </h1>

        <p className="text-white text-lg md:text-xl text-center mt-4 max-w-2xl">
          Un espace communautaire pour partager conseils, récits et ressources
          autour du bien-être mental.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-900 text-white px-9 py-3 rounded-md text-lg font-semibold text-center"
          >
            Nous Contacter
          </a>
          <a
            href="#actualiteBlog"
            className="bg-white hover:bg-gray-200 text-red-700 px-9 py-3 rounded-md text-lg font-semibold text-center"
          >
            Explorer le Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
