import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsPDF } from 'jspdf';
import './App.css';

const loveReasons = [
  "Desde niños en la iglesia hasta hoy: eres el cimiento sobre el que construí mi vida.",
  "De confidentes en crisis a compañeros de comunidad: gracias por caminar conmigo este Paso.",
  "Nuestros 10 años de casados son el sistema operativo más estable y lleno de gracia que conozco.",
  "Eres la mejor psiquiatra: lograste debuguear mi corazón y optimizar mi paz mental.",
  "Nuestros hijos son el mejor fork de nuestro código: dos versiones beta (9 y 5 años) y una actualización de seguridad perfecta (2 años).",
  "Gracias por ser mi 'Safe Space' donde mi alma puede hacer un deploy sin miedo al juicio.",
  "Eres el neurotransmisor que activa mi dopamina desde hace casi 18 años.",
  "Amo que nuestra historia no tenga 'technical debt': cada crisis académica y romántica fue un aprendizaje que nos fortaleció.",
  "Caminar en la misma comunidad es mi feature favorito de nuestra vida juntos.",
  "Eres la administradora de mi cordura en este clúster caótico y hermoso que es nuestra casa.",
  "A tu lado, la vida tiene una disponibilidad del 99.9% y una latencia emocional inexistente.",
  "Eres la única que sabe leer mi código fuente y recetarme exactamente lo que mi alma necesita.",
  "Nuestra familia es una arquitectura de alta disponibilidad: el Amor es nuestra base de datos compartida.",
  "Gracias por analizar mis procesos internos y darme siempre el feedback más humano y lleno de fe.",
  "Te amo por ser mi balance de carga en la tierra y mi compañera de camino hacia el Cielo."
];

function App() {
  const [currentReason, setCurrentReason] = useState<string>('');
  const [reasonIndex, setReasonIndex] = useState<number>(-1);

  const generateReason = () => {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    setReasonIndex(randomIndex);
    setCurrentReason(loveReasons[randomIndex]);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Set up fonts
    doc.setFont('helvetica', 'bold');
    
    // Header
    doc.setFontSize(20);
    doc.text('Clínica de Arquitectura Emocional', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Dr. Jafeth', 105, 30, { align: 'center' });
    doc.text('Especialista en Sistemas del Corazón', 105, 37, { align: 'center' });
    
    // Separator line
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);
    
    // Date and prescription header
    doc.setFontSize(11);
    doc.text('Fecha: 14 de febrero de 2026', 20, 55);
    doc.text('Paciente: Mi Esposa Bella', 20, 62);
    
    // Prescription symbol
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Rx', 20, 75);
    
    // Prescription content
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    
    if (currentReason) {
      doc.text('Diagnóstico: Necesidad de recordar el amor infinito', 20, 85);
      
      // Add the current reason
      const splitReason = doc.splitTextToSize(currentReason, 170);
      doc.setFont('helvetica', 'italic');
      doc.text(splitReason, 20, 95);
      
      doc.setFont('helvetica', 'normal');
      doc.text('Posología: Leer diariamente, especialmente en momentos de duda.', 20, 95 + (splitReason.length * 7) + 10);
      doc.text('Duración: Indefinida (hasta que Cristo vuelva)', 20, 95 + (splitReason.length * 7) + 17);
    } else {
      doc.text('Diagnóstico: Amor infinito e incondicional', 20, 85);
      doc.text('Tratamiento: Recordatorios diarios de nuestro amor', 20, 95);
      doc.text('Posología: Leer con frecuencia y guardar en el corazón', 20, 105);
    }
    
    // Signature section
    doc.setLineWidth(0.3);
    doc.line(130, 160, 190, 160);
    doc.text('Dr. Jafeth', 160, 165, { align: 'center' });
    doc.setFontSize(9);
    doc.text('Vitam Impendere Amori - 14/02/2026', 160, 170, { align: 'center' });
    
    // Footer
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Ánimo, ¡Cristo ha Resucitado!', 105, 280, { align: 'center' });
    
    // Save PDF
    doc.save('receta-de-amor.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-teal-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-rose-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Para Mi Esposa Bella
          </h1>
          <p className="text-xl text-teal-700 italic" style={{ fontFamily: "'Crimson Text', serif" }}>
            Un mensaje de amor en el día de San Valentín
          </p>
        </div>

        {/* Reason Display Area */}
        <div className="min-h-[300px] flex items-center justify-center mb-12 px-8">
          <AnimatePresence mode="wait">
            {currentReason ? (
              <motion.div
                key={reasonIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p 
                  className="text-2xl text-gray-800 leading-relaxed"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  "{currentReason}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-xl text-gray-500 italic" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Presiona el botón para ver una razón de mi amor por ti
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={generateReason}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full shadow-lg transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Generar Razón
          </motion.button>
          
          <motion.button
            onClick={exportToPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Playfair Display', serif" }}
            disabled={!currentReason}
          >
            Exportar Receta
          </motion.button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <motion.p 
            className="text-2xl font-bold text-rose-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Ánimo, ¡Cristo ha Resucitado!
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default App;
