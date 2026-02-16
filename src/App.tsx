import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';

function App() {
  const [currentReason, setCurrentReason] = useState<string | null>(null);
  const [showReason, setShowReason] = useState(false);

  // Razones por las que te amo - mezcla de ingeniería, psiquiatría, 18 años de historia, 3 hijos, fe
  const reasons = [
    "Porque como ingeniero, sé que tu amor es la arquitectura más sólida de mi vida.",
    "Porque tu mente brillante como psiquiatra ilumina no solo a tus pacientes, sino mi corazón.",
    "Porque en 18 años has sido mi mejor proyecto, y cada día mejoramos juntos.",
    "Porque nuestros 3 hijos son el código fuente perfecto de nuestro amor.",
    "Porque eres mi constante en un mundo de variables, mi algoritmo del amor verdadero.",
    "Porque tu empatía profesional hace que cada paciente se sienta comprendido, y yo también.",
    "Porque construimos un hogar con la misma paciencia que se construye un edificio: ladrillo a ladrillo.",
    "Porque nuestra fe en Cristo nos une más que cualquier conexión de ingeniería.",
    "Porque balanceas la ciencia de la mente con el arte del corazón perfectamente.",
    "Porque eres la mejor 'debugger' de mis problemas emocionales.",
    "Porque cada diagnóstico que haces viene del amor y la compasión genuina.",
    "Porque juntos criamos 3 seres humanos increíbles con amor y dedicación.",
    "Porque eres mi refugio cuando el sistema falla y todo parece caerse.",
    "Porque tu resiliencia profesional me inspira a ser mejor cada día.",
    "Porque nuestra comunidad de fe es más fuerte contigo a mi lado.",
    "Porque tus manos curan almas mientras sostienes la mía con ternura.",
    "Porque después de 18 años, sigues siendo la feature más importante de mi vida.",
    "Porque eres madre, esposa, doctora y mi mejor amiga en un solo corazón.",
    "Porque tu sabiduría psiquiátrica me ayuda a entender que el amor es el mejor tratamiento.",
    "Porque juntos somos prueba de que la fe mueve montañas y construye familias.",
    "Porque eres la única que entiende mis planos y mis sueños por igual.",
    "Porque nuestros hijos heredaron tu inteligencia y mi terquedad, ¡perfecto balance!",
    "Porque tu vocación de servir a otros me enseña humildad todos los días.",
    "Porque eres el diseño más hermoso que Dios puso en mi camino.",
    "Porque cada consulta que das es un acto de amor hacia la humanidad.",
    "Porque 18 años después, aún me haces sentir mariposas como el primer día.",
    "Porque eres la mejor inversión de mi vida, con retornos infinitos de amor.",
    "Porque tu fe inquebrantable es la base de nuestra familia bendecida.",
    "Porque me enseñaste que los planos más hermosos son los que dibujamos juntos.",
    "Porque eres mi compañera en esta obra maestra llamada vida."
  ];

  const generateRandomReason = () => {
    setShowReason(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * reasons.length);
      setCurrentReason(reasons[randomIndex]);
      setShowReason(true);
    }, 300);
  };

  const exportPrescription = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('PRESCRIPCIÓN MÉDICA', 105, 20, { align: 'center'});
    
    // Divider
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    
    // Doctor info
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Dr. Jafeth Lagos', 20, 35);
    doc.setFontSize(10);
    doc.text('Especialista en Amor y Construcción de Familias', 20, 40);
    
    // Date
    const today = new Date().toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    doc.text(`Fecha: ${today}`, 20, 50);
    
    // Patient section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Paciente:', 20, 60);
    doc.setFont('helvetica', 'normal');
    doc.text('Mi Esposa Amada', 50, 60);
    
    // Diagnosis
    doc.setFont('helvetica', 'bold');
    doc.text('Diagnóstico:', 20, 70);
    doc.setFont('helvetica', 'normal');
    doc.text('Amor profundo y eterno', 50, 70);
    
    // Prescription box
    doc.setFillColor(255, 240, 245);
    doc.rect(20, 80, 170, 80, 'F');
    doc.setLineWidth(0.3);
    doc.rect(20, 80, 170, 80);
    
    // Rx symbol
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Rx', 25, 90);
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
    const prescriptionText = [
      '',
      'Se prescribe:',
      '',
      '- Besos diarios: Administrar 3 veces al día, o más según necesidad',
      '- Abrazos terapéuticos: Tomar generosamente, especialmente al despertar',
      '- Palabras de amor: Dosis ilimitadas, uso continuo recomendado',
      '- Tiempo de calidad: Mínimo 1 hora diaria, sin interrupciones',
      '- Caricias: Aplicar con frecuencia para máxima efectividad',
      '- Risas compartidas: Renovar constantemente',
      '',
      'Tratamiento indefinido. Renovación automática todos los días.'
    ];
    
    let yPos = 95;
    prescriptionText.forEach(line => {
      doc.text(line, 25, yPos);
      yPos += 6;
    });
    
    // Notes
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Nota: Este amor es para toda la vida. No tiene efectos secundarios,', 20, 170);
    doc.text('solo beneficios eternos. Administrar con fe, paciencia y alegría.', 20, 175);
    
    // Signature
    doc.setFont('helvetica', 'normal');
    doc.text('_______________________________', 120, 195);
    doc.setFont('helvetica', 'bold');
    doc.text('Dr. Jafeth Lagos', 140, 200);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Ingeniero del Amor Eterno', 135, 205);
    
    // Footer
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('18 años construyendo amor | 3 hijos bendecidos | Fe inquebrantable', 105, 285, { align: 'center' });
    
    // Save
    doc.save('Receta_de_Amor.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex flex-col font-serif">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 mb-4">
              Para Mi Esposa Amada
            </h1>
            <p className="text-lg md:text-xl text-gray-600 italic">
              18 años de amor, 3 hijos hermosos, una fe inquebrantable
            </p>
          </motion.div>

          {/* Reason display */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showReason && currentReason ? (
                <motion.div
                  key={currentReason}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed">
                    {currentReason}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-gray-400 italic">
                    Presiona el botón para descubrir una razón por la que te amo...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateRandomReason}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              💕 Descubre una Razón
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={exportPrescription}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              📋 Exportar Receta
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center py-6 text-gray-500 text-sm italic"
      >
        <p>Ánimo, ¡Cristo ha resucitado! ✝️</p>
      </motion.footer>
    
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
