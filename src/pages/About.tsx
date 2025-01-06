import { motion } from "framer-motion";
import { TeamMember } from "@/components/team/TeamMember";

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
              <p className="text-light-secondary">
                Stets mit der neusten Technik vertraut und immer auf der Suche nach dem gewissen Etwas. Die Technologie entwickelt sich rasant – profitiere von unserer Neugier, unserer praktischen Erfahrung und unserem Fachwissen.
              </p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-light mb-12 text-center">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <TeamMember
                image="/lovable-uploads/13c00a65-e2ed-457f-a1de-27e8a136c8a5.png"
                name="Joël Staub"
                role="Gründer"
                delay={0.2}
              />
              <TeamMember
                image="/lovable-uploads/caca66d0-a9bf-4682-b66b-c5f8a4fb4915.png"
                name="Thierry Staub"
                role="IT Consultant & Web Design"
                delay={0.4}
              />
              <TeamMember
                image="/lovable-uploads/847edaaf-de19-414f-9556-8e32c18dc9ed.png"
                name="Gabriela Cattaneo"
                role="Web Design"
                delay={0.6}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <TeamMember
                image="/lovable-uploads/3db257cd-5cef-489a-a09a-e24e8732ee94.png"
                name="Nadja Staub"
                role="Administration"
                delay={0.8}
              />
              <TeamMember
                image="/lovable-uploads/c4c03475-416c-4cbf-94d7-dfe488710b4e.png"
                name="Mölang"
                role="Security"
                delay={1.0}
              />
              <TeamMember
                image="/lovable-uploads/bee82b60-bc44-44cc-9f8b-c7e202430ec0.png"
                name="Shadow"
                role="Security"
                delay={1.2}
              />
            </div>
          </motion.div>

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
                <li>• Premium Support</li>
                <li>• Transparente Preisgestaltung</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;