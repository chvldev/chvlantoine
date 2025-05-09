import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    document.title = "Antoine Chauvel | CHVL";
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Logo Section */}
      <motion.img
        src="/CHVL2.png"
        alt="CHVL Logo"
        className="w-60 h-60 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name + Tagline */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Antoine Chauvel
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-2 mb-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Creating amazing ventures & building my dream life
      </motion.p>

      {/* Social Links */}
      <div className="flex gap-6 mb-10">
        <a href="https://www.instagram.com/chvlantoine" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
        </a>
        <a href="https://x.com/chvlantoine" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:text-blue-400 transition" />
        </a>
        <a href="http://tiktok.com/@chvlantoine" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="w-6 h-6 hover:text-white transition" />
        </a>
      </div>

      {/* Ventures */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <a
          href="https://www.declarations-juridiques.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
        >
          <h2 className="font-bold text-xl">Déclarations Juridiques</h2>
          <p className="text-sm text-gray-400">GDPR made simple</p>
        </a>
        <a
          href="https://mesadherents.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
        >
          <h2 className="font-bold text-xl">MesAdhérents.fr</h2>
          <p className="text-sm text-gray-400">Manage your members easily</p>
        </a>
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center opacity-50">
          <h2 className="font-bold text-xl">Kodup</h2>
          <p className="text-sm text-gray-400">Coming soon</p>
        </div>
      </div>
    </main>
  );
}
