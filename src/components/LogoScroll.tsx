import { motion } from "framer-motion";

const logos = [
  {
    src: "/lovable-uploads/6f385a8e-8ea5-485e-91aa-0ec0da45e9c6.png",
    alt: "Atelier Zürich",
    height: 40
  },
  {
    src: "/lovable-uploads/3ded16b2-e3f4-48d9-91f3-20121bbcb0cf.png",
    alt: "Architektur Logo",
    height: 40
  },
  {
    src: "/lovable-uploads/7246ebb8-2a99-448d-a15e-4f79361420a5.png",
    alt: "Erlenbach Schule",
    height: 40
  },
  {
    src: "/lovable-uploads/dc3a12c9-9f69-4da9-bf3c-d4775cc06850.png",
    alt: "BDE Architekten",
    height: 40
  },
  {
    src: "/lovable-uploads/338ac460-81e6-4c42-8a3b-2b7dcd0754a1.png",
    alt: "Allderm",
    height: 40
  },
  {
    src: "/lovable-uploads/7759990f-b012-40c1-850c-080c61cbafdc.png",
    alt: "Sekwila",
    height: 40
  },
  {
    src: "/lovable-uploads/55135e9d-8f12-4d79-9e49-7d164aeda7ec.png",
    alt: "Gölz Consulting",
    height: 40
  },
  {
    src: "/lovable-uploads/e443cb32-7dae-44c7-8639-f667512fdd4e.png",
    alt: "Bovet",
    height: 40
  }
];

const LogoScroll = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-dark via-dark-secondary to-dark">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Unsere Kunden</span>
          </h2>
          <p className="text-xl text-light-secondary max-w-2xl mx-auto">
            Vertrauen auf unsere Expertise
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade overlay left */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-dark to-transparent z-10" />
        
        {/* Fade overlay right */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-dark to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center py-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[40px] w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[40px] w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;