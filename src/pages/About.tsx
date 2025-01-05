import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-dark pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-light mb-8 text-center">
            Über Staub IT
          </h1>
          <div className="glass-card p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-light mb-4">
              Unsere Mission
            </h2>
            <p className="text-light-secondary mb-6">
              Wir bei Staub IT haben es uns zur Aufgabe gemacht, innovative und
              zuverlässige IT-Lösungen anzubieten, die deinem Unternehmen einen
              echten Mehrwert bieten. Mit unserer Expertise und Leidenschaft für
              Technologie unterstützen wir dich dabei, deine digitale
              Transformation erfolgreich zu gestalten.
            </p>
            <h2 className="text-2xl font-semibold text-light mb-4">
              Unsere Expertise
            </h2>
            <p className="text-light-secondary">
              Mit über 10 Jahren Erfahrung in der IT-Branche verfügen wir über das
              Know-how, um dich bei allen technischen Herausforderungen zu
              unterstützen. Unser Team besteht aus hochqualifizierten
              Spezialisten, die stets auf dem neuesten Stand der Technik sind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-light mb-3">
                Unsere Werte
              </h3>
              <ul className="text-light-secondary space-y-2">
                <li>• Zuverlässigkeit und Qualität</li>
                <li>• Innovation und Fortschritt</li>
                <li>• Kundenorientierung</li>
                <li>• Nachhaltigkeit</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-light mb-3">
                Warum Staub IT?
              </h3>
              <ul className="text-light-secondary space-y-2">
                <li>• Persönliche Betreuung</li>
                <li>• Maßgeschneiderte Lösungen</li>
                <li>• 24/7 Support</li>
                <li>• Faire Preise</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;