import { motion } from "framer-motion";

const partners = [
  {
    name: "Apple",
    logo: "/lovable-uploads/Apple_logo_white.svg",
    url: "https://www.apple.com"
  },
  {
    name: "Google Workspace",
    logo: "/lovable-uploads/GoogleWorkspace_Logo_White.png",
    url: "https://workspace.google.com/"
  },
  {
    name: "Datto",
    logo: "/lovable-uploads/datto-white.webp",
    url: "https://www.datto.com/"
  },
  {
    name: "Kaseya",
    logo: "/lovable-uploads/Kaseya_PNG-4x_White_Logo.png",
    url: "https://www.kaseya.com/"
  },
  {
    name: "Jamf",
    logo: "/lovable-uploads/jamf-logo.png",
    url: "https://www.jamf.com/"
  },
  {
    name: "SonicWall",
    logo: "/lovable-uploads/sonicwall-logo-white.png",
    url: "https://www.sonicwall.com/"
  },
  {
    name: "Webflow",
    logo: "/lovable-uploads/webflow-logo-white.svg",
    url: "https://webflow.com/"
  },
  {
    name: "Ubiquiti",
    logo: "/lovable-uploads/ubiquiti-white-logo-1024x309-1-300x143.png",
    url: "https://ui.com/"
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
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="absolute inset-0 rounded-xl bg-dark-secondary/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;