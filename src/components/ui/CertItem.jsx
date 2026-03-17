import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Hash } from "lucide-react";

const CertItem = ({ item, isLightMode, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 md:pl-16 mb-12 group"
    >
      {/* Dot na timeline */}
      <div
        className={`absolute w-5 h-5 rounded-full -left-[11px] top-6 border-4 transition-colors duration-300
          ${isLightMode
            ? "bg-[#f0f0f0] border-[#d4d4d4] group-hover:border-samurai-gold group-hover:bg-samurai-gold/20"
            : "bg-samurai-dark border-neutral-800 group-hover:border-samurai-gold group-hover:bg-samurai-gold/20"
          }`}
      />

      {/* Card da Certificação */}
      <div
        className={`p-6 md:p-8 border transition-all duration-300 relative overflow-hidden ${
          isLightMode
            ? "bg-white border-[#d4d4d4] hover:border-samurai-gold/50 hover:shadow-lg"
            : "bg-[#0a0a0a] border-neutral-800 hover:border-samurai-gold/50 hover:bg-[#0f0f0f]"
        }`}
      >
        {/* Brilho de canto */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-samurai-gold/5 blur-3xl rounded-full pointer-events-none group-hover:bg-samurai-gold/10 transition-colors duration-500" />

        {/* Ano + badge issuer */}
        <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
          <span
            className={`flex items-center gap-2 font-mono text-xs border px-3 py-1.5 rounded-full font-bold transition-colors
              ${isLightMode
                ? "text-neutral-500 border-[#d4d4d4] group-hover:border-samurai-gold/30 group-hover:text-samurai-gold"
                : "text-neutral-500 border-neutral-800 group-hover:border-samurai-gold/30 group-hover:text-samurai-gold"
              }`}
          >
            <Award size={12} className="text-samurai-gold" />
            {item.year}
          </span>

          <span className="text-xs font-mono font-bold text-samurai-gold border border-samurai-gold/30 px-3 py-1.5 rounded-full bg-samurai-gold/10">
            {item.issuer}
          </span>
        </div>

        {/* Título */}
        <h3 className={`text-2xl font-serif font-bold mb-2 transition-colors duration-300 relative z-10 group-hover:text-samurai-gold ${isLightMode ? "text-neutral-900" : "text-white"}`}>
          {item.title[lang]}
        </h3>

        {/* Credential ID */}
        {item.credentialId && (
          <div className="font-mono text-xs mb-5 flex items-center gap-2 font-bold text-neutral-500 relative z-10">
            <Hash size={12} className="text-samurai-gold" />
            ID: {item.credentialId}
          </div>
        )}

        {/* Descrição */}
        <p
          className={`font-light text-sm md:text-base leading-relaxed mb-5 relative z-10 ${
            isLightMode ? "text-neutral-600" : "text-neutral-400"
          }`}
        >
          {item.description[lang]}
        </p>

        {/* Tags de tecnologia */}
        <div className="flex flex-wrap gap-2 mb-5 relative z-10">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded border transition-colors ${
                isLightMode
                  ? "border-[#d4d4d4] text-neutral-500 bg-neutral-100"
                  : "border-neutral-800 text-neutral-500 bg-neutral-900"
              } group-hover:border-samurai-gold/20 group-hover:text-samurai-gold`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link do certificado */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono font-bold text-samurai-gold hover:text-yellow-500 transition-colors uppercase tracking-widest relative z-10"
          >
            {lang === "pt" ? "Ver Certificado" : "View Certificate"}
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertItem;