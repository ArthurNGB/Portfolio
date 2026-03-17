import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ChevronDown, ChevronRight, Calendar } from "lucide-react";

const ExpItem = ({ item, isLightMode, lang, t, isLast }) => {
  const [open, setOpen] = useState(false);

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
        className={`absolute w-5 h-5 rounded-full -left-[11px] top-6 border-4 transition-colors duration-300 ${
          isLightMode
            ? "bg-[#f0f0f0] border-[#d4d4d4] group-hover:border-samurai-gold group-hover:bg-samurai-gold/20"
            : "bg-samurai-dark border-neutral-800 group-hover:border-samurai-gold group-hover:bg-samurai-gold/20"
        } ${item.current ? "!border-samurai-gold !bg-samurai-gold/20 shadow-[0_0_15px_#D4AF37]" : ""}`}
      />

      {/* Card da Experiência */}
      <div
        className={`p-6 md:p-8 border transition-all duration-300 relative overflow-hidden ${
          isLightMode
            ? "bg-white border-[#d4d4d4] hover:border-samurai-gold/50 hover:shadow-lg"
            : "bg-[#0a0a0a] border-neutral-800 hover:border-samurai-gold/50 hover:bg-[#0f0f0f]"
        }`}
      >
        {/* Efeito de brilho super suave no canto do card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-samurai-gold/5 blur-3xl rounded-full pointer-events-none group-hover:bg-samurai-gold/10 transition-colors duration-500" />

        {/* Período + badge "ATUAL" */}
        <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
          <span
            className={`flex items-center gap-2 font-mono text-xs border px-3 py-1.5 rounded-full font-bold transition-colors ${
              item.current
                ? "text-samurai-gold border-samurai-gold/30 bg-samurai-gold/10"
                : isLightMode
                ? "text-neutral-500 border-[#d4d4d4] group-hover:border-samurai-gold/30 group-hover:text-samurai-gold"
                : "text-neutral-500 border-neutral-800 group-hover:border-samurai-gold/30 group-hover:text-samurai-gold"
            }`}
          >
            <Calendar size={12} /> {item.period}
          </span>
          
          {item.current && (
            <span className="text-xs font-mono font-bold text-emerald-500 border border-emerald-500/30 px-3 py-1.5 rounded-full bg-emerald-500/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> ATUAL
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-serif font-bold mb-2 transition-colors duration-300 relative z-10 ${isLightMode ? "text-neutral-900" : "text-white"} group-hover:text-samurai-gold`}>
          {item.role[lang]}
        </h3>

        <div className="font-mono text-sm mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 font-bold text-neutral-500 relative z-10">
          <span className="flex items-center gap-2">
            <Briefcase size={14} className="text-samurai-gold" /> {item.company}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-samurai-gold" /> {item.location}
          </span>
        </div>

        <p
          className={`font-light text-sm md:text-base leading-relaxed mb-4 relative z-10 ${
            isLightMode ? "text-neutral-600" : "text-neutral-400"
          }`}
        >
          {item.description[lang]}
        </p>

        {/* Botão expandir */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-xs font-mono font-bold text-samurai-gold hover:text-yellow-500 transition-colors uppercase tracking-widest mt-2 relative z-10"
        >
          {open ? t.seeLess : t.seeMore}
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={14} />
          </motion.div>
        </button>

        {/* Highlights expandíveis */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden space-y-3 pt-4 border-t border-dashed border-neutral-800 relative z-10"
              style={{ borderColor: isLightMode ? "#d4d4d4" : "#262626" }}
            >
              {item.highlights[lang].map((h, i) => (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className={`text-sm flex items-start gap-3 ${
                    isLightMode ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className="text-samurai-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="leading-relaxed">{h}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExpItem;