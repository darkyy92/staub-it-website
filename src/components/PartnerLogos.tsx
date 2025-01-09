import { motion } from "framer-motion";
import { logos } from "@/constants/logos";

const PartnerLogos = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark">
            Wir arbeiten mit führenden Technologiepartnern zusammen, um dir die beste Lösung zu bieten
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={`logo-${index}`}
              whileHover={{ scale: 1.05 }}
              className="w-full flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[80px] w-auto object-contain transition-all duration-300 hover:shadow-lg"
                style={{ maxWidth: "200px" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;