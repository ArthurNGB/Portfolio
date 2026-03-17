import React from "react";
import { motion } from "framer-motion";
import ExpItem from "../ui/ExpItem";
import { EXPERIENCES } from "../../data/experiences";

const Experience = ({ isLightMode, t, lang, fadeUp }) => (
  <section
    id="experiencia"
    className={`py-24 relative overflow-hidden ${isLightMode ? "bg-[#f0f0f0]" : "bg-samurai-dark"}`}
  >
    {/* Elemento de fundo para dar mais vida */}
    <div className={`absolute -left-40 top-40 w-96 h-96 blur-[100px] rounded-full pointer-events-none ${isLightMode ? "bg-samurai-gold/10" : "bg-samurai-gold/5"}`} />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold flex items-center gap-4 antialiased">
            <span className="text-samurai-gold font-mono text-lg">{t.expNum}</span>
            {t.expTitle}
          </h2>
        </div>

        <div
          className={`border-l-2 ml-2.5 md:ml-4 pb-4 transition-colors duration-300 ${
            isLightMode ? "border-[#d4d4d4]" : "border-neutral-800"
          }`}
        >
          {EXPERIENCES.map((exp, i) => (
            <ExpItem
              key={i}
              item={exp}
              isLightMode={isLightMode}
              lang={lang}
              t={t}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;