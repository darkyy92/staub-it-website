import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Cloud, Lock, History, Zap } from "lucide-react";

const CloudBackup = () => {
  return (
    <div className="container mx-auto px-6 sm:px-4 pt-32 pb-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 px-4">
          Cloud Backup
        </h1>
        <p className="text-xl text-light-secondary mb-12 leading-relaxed px-4">
          Sichere und zuverlässige Datensicherung in der Cloud. Schütze deine wichtigen Daten vor Verlust und greife von überall darauf zu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <ServiceCard
            icon={Cloud}
            title="Cloud Storage"
            description="Sichere Speicherung deiner Daten in der Cloud mit automatischer Synchronisation und Versionierung."
          />
          <ServiceCard
            icon={Lock}
            title="Verschlüsselung"
            description="Deine Daten werden Ende-zu-Ende verschlüsselt und sind nur für dich zugänglich."
          />
          <ServiceCard
            icon={History}
            title="Backup History"
            description="Behalte den Überblick über alle Änderungen und stelle bei Bedarf ältere Versionen wieder her."
          />
          <ServiceCard
            icon={Zap}
            title="Schnelle Wiederherstellung"
            description="Im Notfall kannst du deine Daten schnell und einfach wiederherstellen."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CloudBackup;