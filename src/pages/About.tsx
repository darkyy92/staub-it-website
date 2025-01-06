import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto px-6 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto pb-32"
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
            <p className="text-light-secondary text-lg font-medium mb-6">
              Wir bieten moderne Konzepte, persönliche Beziehungen und eine einfache Preisgestaltung.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-light mb-4">
                Wir stehen für Vertrautheit
              </h3>
              <p className="text-light-secondary mb-8">
                Bei uns bekommst du die persönliche Note, die du verdienst. Unsere Kunden schätzen die bodenständige und humorvolle Art der Gebrüder Staub.
              </p>

              <h3 className="text-2xl font-semibold text-light mb-4">
                Wir stehen für Innovation
              </h3>
              <p className="text-light-secondary mb-8">
                Stets mit der neusten Technik vertraut und immer auf der Suche nach dem gewissen Etwas. Die Technologie entwickelt sich rasant – profitiere von unserer Neugier, unserer praktischen Erfahrung und unserem Fachwissen.
              </p>

              <h3 className="text-2xl font-semibold text-light mb-4">
                Wir stehen für transparente Preisgestaltung
              </h3>
              <p className="text-light-secondary">
                Du bezahlst nur, wofür du uns auch wirklich brauchst. Fixe Wartungsverträge, SLA oder Notfallzuschläge gibt es bei uns nicht. Jeder Kunde hat bei uns höchste Priorität.
              </p>
            </motion.div>
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
                <li>• Massgeschneiderte Lösungen</li>
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