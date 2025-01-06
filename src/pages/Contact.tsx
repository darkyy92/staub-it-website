import { motion } from "framer-motion";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import ServicePageLayout from "@/components/layout/ServicePageLayout";

const Contact = () => {
  return (
    <ServicePageLayout>
      <div className="container mx-auto px-6 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto pb-32"
        >
          <h1 className="text-4xl font-bold text-light mb-8 text-center">
            Kontaktiere uns
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
            </div>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default Contact;