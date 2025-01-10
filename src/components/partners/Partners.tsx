import { motion } from "framer-motion";

const partners = [
  {
    name: "Apple",
    logo: "/lovable-uploads/7246ebb8-2a99-448d-a15e-4f79361420a5.png",
  },
  {
    name: "Google Workspace",
    logo: "/lovable-uploads/bee82b60-bc44-44cc-9f8b-c7e202430ec0.png",
  },
  {
    name: "Datto",
    logo: "/lovable-uploads/03c9638f-4310-4299-921f-e2fbce62352d.png",
  },
  {
    name: "Kaseya",
    logo: "/lovable-uploads/13c00a65-e2ed-457f-a1de-27e8a136c8a5.png",
  },
  {
    name: "Jamf",
    logo: "/lovable-uploads/338ac460-81e6-4c42-8a3b-2b7dcd0754a1.png",
  },
  {
    name: "SonicWall",
    logo: "/lovable-uploads/3db257cd-5cef-489a-a09a-e24e8732ee94.png",
  },
  {
    name: "Webflow",
    logo: "/lovable-uploads/55135e9d-8f12-4d79-9e49-7d164aeda7ec.png",
  },
  {
    name: "Ubiquiti",
    logo: "/lovable-uploads/6f385a8e-8ea5-485e-91aa-0ec0da45e9c6.png",
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