import { motion } from "framer-motion";

const partners = [
  {
    name: "Apple",
    logo: "/lovable-uploads/Apple_logo_white.svg",
  },
  {
    name: "Google Workspace",
    logo: "/lovable-uploads/GoogleWorkspace_Logo_White.png",
  },
  {
    name: "Datto",
    logo: "/lovable-uploads/datto-white.webp",
  },
  {
    name: "Kaseya",
    logo: "/lovable-uploads/Kaseya_PNG-4x_White_Logo.png",
  },
  {
    name: "Jamf",
    logo: "/lovable-uploads/jamf-logo.png",
  },
  {
    name: "SonicWall",
    logo: "/lovable-uploads/sonicwall-logo-white.png",
  },
  {
    name: "Webflow",
    logo: "/lovable-uploads/webflow-logo-white.svg",
  },
  {
    name: "Ubiquiti",
    logo: "/lovable-uploads/ubiquiti-white-logo-1024x309-1-300x143.png",
  },
];

const Partners = () => {
  return (
    <section className="w-full bg-dark py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-light text-center mb-16"
        >
          Unsere Partner
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[200px] aspect-[3/2] relative group"
            >
              <div className="absolute inset-0 rounded-xl bg-dark-secondary/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-full h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;