import React from "react";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

// Import des images
import expresso from "./asset/téléchargement.jpeg";
import cappuccino from "./asset/téléchargement (1).jpeg";
import glace from "./asset/images.jpeg";

const products = [
  { name: "Café Expresso", desc: "Goût fort et riche.", price: "1500 F", image: expresso },
  { name: "Café Cappuccino", desc: "Crémeux et délicieux.", price: "2000 F", image: cappuccino },
  { name: "Café Glacé", desc: "Parfait pour les journées chaudes.", price: "1800 F", image: glace },
];

export default function Home() {
  const whatsappBase = "https://wa.me/225564502115";

  return (
    <div className="font-sans text-gray-800">

      <header className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-wide">Khalil Shop</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-yellow-200">À propos</a>
            <a href="#products" className="hover:text-yellow-200">Produits</a>
            <a href="#delivery" className="hover:text-yellow-200">Livraison</a>
            <a href="#contact" className="hover:text-yellow-200">Contact</a>
          </nav>
          <a
            href={`${whatsappBase}?text=Bonjour Khalil Shop 👋, je souhaite commander`}
            className="md:inline-flex hidden bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
          >
            Commander
          </a>
        </div>
      </header>

      <section id="home" className="bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            ☕ Le café qui réveille Abidjan
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Des grains sélectionnés, un goût unique, livré chez vous.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={`${whatsappBase}?text=Bonjour Khalil Shop 👋, je souhaite commander`}
              className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-700"
            >
              Commander maintenant
            </a>
            <a
              href="tel:0564502115"
              className="px-6 py-3 rounded-full border border-yellow-800 hover:bg-yellow-100"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">À propos de nous</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Chez <strong>Khalil Shop</strong>, chaque tasse est une expérience.
          Nous sélectionnons les meilleurs grains pour offrir un café d’exception aux amateurs d’Abidjan.
        </p>
      </section>

      <section id="products" className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Nos cafés</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white p-6 rounded-2xl shadow">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="font-bold text-lg text-center">{p.name}</h3>
                <p className="text-gray-600 text-center mt-2">{p.desc}</p>
                <p className="text-yellow-800 font-bold text-center mt-2">{p.price}</p>
                <a
                  href={`${whatsappBase}?text=Bonjour, je veux ${p.name}`}
                  className="block mt-4 text-center bg-yellow-800 text-white px-4 py-2 rounded-full hover:bg-yellow-700"
                >
                  Commander {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Zone de livraison</h2>
        <p className="text-gray-700 flex items-center justify-center gap-2">
          <FaMapMarkerAlt /> Abidjan et environs
        </p>
      </section>

      <section id="contact" className="bg-yellow-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
          <p className="flex justify-center items-center gap-2 mb-4">
            <FaPhone /> 0564502115
          </p>
          <a
            href={`${whatsappBase}?text=Bonjour Khalil Shop 👋`}
            className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full shadow hover:bg-green-500"
          >
            <FaWhatsapp /> Discuter sur WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-yellow-900 text-white text-center py-4">
        © {new Date().getFullYear()} Khalil Shop — Tous droits réservés.
      </footer>
    </div>
  );
}
