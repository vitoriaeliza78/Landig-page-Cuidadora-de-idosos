"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS das animações

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
      offset: 100,   
    });
  }, []);

  return null; // Este componente não renderiza nada na tela
}