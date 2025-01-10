import { motion } from "framer-motion";

const Datenschutz = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light text-center mb-16">
          Datenschutzerklärung
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-xl mb-8 prose prose-invert max-w-none"
        >
          <p className="text-light-secondary leading-relaxed">
            Wir freuen uns sehr über Ihr Interesse an unserem Schweizer Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Staub IT. Eine Nutzung der Internetseiten der Staub IT ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
          </p>

          <h2 className="text-2xl font-semibold text-light-secondary mt-8 mb-4">
            Begriffsbestimmungen
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-light-secondary mb-2">
                a) Personenbezogene Daten
              </h3>
              <p className="text-light-secondary">
                Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light-secondary mb-2">
                b) Betroffene Person
              </h3>
              <p className="text-light-secondary">
                Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light-secondary mb-2">
                Name und Anschrift des Verantwortlichen
              </h3>
              <p className="text-light-secondary">
                Staub IT<br />
                Weierstrasse 137<br />
                8405 Winterthur<br />
                Schweiz<br />
                Tel.: +41523471180<br />
                E-Mail: joel@staub-it.ch<br />
                Webseite: https://staub-it.ch
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-light-secondary mt-8 mb-4">
            Cookies
          </h2>
          <p className="text-light-secondary">
            Die Internetseiten der Staub IT verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen.
          </p>

          <h2 className="text-2xl font-semibold text-light-secondary mt-8 mb-4">
            Kontaktmöglichkeit über die Internetseite
          </h2>
          <p className="text-light-secondary">
            Die Internetseite der Staub IT enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Datenschutz;
