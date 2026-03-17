import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "../../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = ({ isLightMode, t, lang, fadeUp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = PROJECTS.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  // Lógica para arrastar com o dedo/mouse
  const [dragStartX, setDragStartX] = useState(0);
  
  const handleDragStart = (e) => {
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX));
  };
  
  const handleDragEnd = (e) => {
    const dragEndX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    if (!dragStartX || !dragEndX) return;
    
    if (dragStartX - dragEndX > 50) nextSlide();
    else if (dragEndX - dragStartX > 50) prevSlide();
    
    setDragStartX(0);
  };

  return (
    <section
      id="projetos"
      className={`py-24 overflow-hidden relative ${
        isLightMode ? "bg-[#e5e5e5]" : "bg-[#121212]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 flex items-center gap-4">
            <span className="text-samurai-gold font-mono text-lg">{t.projNum}</span>
            {t.projTitle}
          </h2>

          {/* Container do Carrossel 3D */}
          <div 
            className="relative w-full flex flex-col items-center justify-center min-h-[550px] mt-10"
            style={{ perspective: "1200px" }}
          >
            {/* Botão Anterior */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 md:left-4 z-20 p-4 rounded-full border transition-all hover:scale-110 ${
                isLightMode 
                  ? "bg-white border-[#d4d4d4] text-neutral-800 hover:text-samurai-gold shadow-lg" 
                  : "bg-neutral-900 border-neutral-700 text-white hover:border-samurai-gold hover:text-samurai-gold"
              }`}
            >
              <ChevronLeft size={28} />
            </button>

            {/* A Pista do Carrossel - Altura aumentada para suportar o zoom */}
            <div
              className="relative flex justify-center items-center w-full h-[520px]"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <AnimatePresence mode="popLayout">
                {PROJECTS.map((project, i) => {
                  let diff = i - currentIndex;
                  if (diff > Math.floor(total / 2)) diff -= total;
                  if (diff < -Math.floor(total / 2)) diff += total;

                  const isActive = diff === 0;

                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        // Separa mais os cards laterais (75%)
                        x: diff === 0 ? "0%" : diff > 0 ? "75%" : "-75%",
                        // Dá zoom de 10% no card do meio, e diminui bem os de trás
                        scale: diff === 0 ? 1.08 : 0.75,
                        // Inclina mais as laterais
                        rotateY: diff === 0 ? 0 : diff > 0 ? -35 : 35,
                        // Deixa as laterais mais escuras/transparentes
                        opacity: isActive ? 1 : 0.2,
                        zIndex: isActive ? 10 : 1,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        // Largura base maior para todos os cards
                        width: "100%",
                        maxWidth: "400px", 
                      }}
                      className={`cursor-grab active:cursor-grabbing ${isActive ? "drop-shadow-2xl" : ""}`}
                    >
                      <div className={isActive ? "" : "pointer-events-none"}>
                        <ProjectCard
                          isLightMode={isLightMode}
                          project={project}
                          lang={lang}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Botão Próximo */}
            <button
              onClick={nextSlide}
              className={`absolute right-0 md:right-4 z-20 p-4 rounded-full border transition-all hover:scale-110 ${
                isLightMode 
                  ? "bg-white border-[#d4d4d4] text-neutral-800 hover:text-samurai-gold shadow-lg" 
                  : "bg-neutral-900 border-neutral-700 text-white hover:border-samurai-gold hover:text-samurai-gold"
              }`}
            >
              <ChevronRight size={28} />
            </button>

            {/* Indicadores (Bolinhas) */}
            <div className="flex gap-3 mt-6 z-20">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-samurai-gold scale-125 shadow-[0_0_10px_#D4AF37]"
                      : isLightMode ? "bg-[#d4d4d4]" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;