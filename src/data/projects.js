// 1. Importe as imagens aqui em cima (ajuste o caminho se necessário)
import thumbLucioCosta from '../assets/thumbnails/Video Project 2.gif';
import thumbApptite from '../assets/thumbnails/Video Project 3.gif';
import thumbRoomB from '../assets/thumbnails/WhatsApp Image 2026-03-17 at 15.56.01.jpeg'

export const PROJECTS = [
  {
    year: "2024",
    title: { pt: "LucioCostaSalão", en: "LucioCostaSalão" },
    // 2. Passe a variável importada, NÃO uma string
    thumbnail: thumbLucioCosta, 
    description: {
      pt: "Plataforma de gerenciamento de agendamentos para barbearia e geração de relatórios.",
      en: "Appointment management platform for barbershops and report generation.",
    },
    techs: ["PHP", "JavaScript", "MariaDB"],
    links: { 
      demo: "",
      github: "https://github.com/ArthurNGB/Lucio-Costa-Salao" 
    },
  },
  {
    year: "2025",
    title: { pt: "Apptite", en: "Apptite" },
    // 2. Passe a variável importada aqui também
    thumbnail: thumbApptite, 
    description: {
      pt: "Plataforma de busca de restaurantes altamente personalizada...",
      en: "A highly personalized restaurant search platform...",
    },
    techs: ["Java", "Spring Boot", "MySQL"],
    links: { 
      demo: "",
      github: "https://github.com/ArthurNGB/Apptite" 
    },
  },
  {
    year: "2025",
    title: { pt: "RoomBookings", en: "RoomBookings" },
    thumbnail: thumbRoomB, // Deixe vazio ou null se não tiver
    description: {
      pt: "Sistema para gerenciamento de cadastro de reservas de salas de reunião.",
      en: "System for managing meeting room reservations.",
    },
    techs: ["Java"],
    links: { 
      demo: "", 
      github: "https://github.com/ArthurNGB/roombookings"
    },
  },
];