import { motion } from "framer-motion";

const Impressum = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light text-center mb-16">
          Impressum
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 rounded-xl mb-8 prose prose-invert max-w-none"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Kontaktadresse
              </h2>
              <p className="text-light-secondary">
                Staub IT<br />
                Weierstrasse 137<br />
                8405 Winterthur<br />
                Schweiz<br />
                E-Mail: joel@staub-it.ch<br />
                Tel: 052 347 11 80
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Vertretungsberechtigte Personen
              </h2>
              <p className="text-light-secondary">
                Joël Staub, Inhaber
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Handelsregistereintrag
              </h2>
              <p className="text-light-secondary">
                Eingetragener Firmenname: Staub IT<br />
                Nummer: CHE-168.645.819
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Mehrwertsteuernummer
              </h2>
              <p className="text-light-secondary">
                CHE-168.645.819 MWST
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Haftungsausschluss
              </h2>
              <p className="text-light-secondary">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Haftung für Links
              </h2>
              <p className="text-light-secondary">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-light-secondary mb-4">
                Urheberrechte
              </h2>
              <p className="text-light-secondary">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Staub IT oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Impressum;
