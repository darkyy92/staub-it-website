import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Schmidt",
    company: "TechCorp GmbH",
    text: "Staub IT hat unsere IT-Infrastruktur komplett modernisiert. Der Service ist erstklassig und das Team immer hilfsbereit.",
    rating: 5,
  },
  {
    name: "Sarah Weber",
    company: "Digital Solutions AG",
    text: "Die AI-Lösungen von Staub IT haben unsere Prozesse revolutioniert. Wir sind begeistert von der Expertise und Professionalität.",
    rating: 5,
  },
  {
    name: "Thomas Müller",
    company: "Innovate GmbH",
    text: "Zuverlässiger Partner für alle IT-Fragen. Besonders die schnelle Reaktionszeit bei Problemen ist beeindruckend.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-light-secondary">
            Erfahre, wie wir anderen Unternehmen helfen konnten
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="glass-card p-6 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-light-secondary mb-4">{testimonial.text}</p>
              <div>
                <p className="text-light font-semibold">{testimonial.name}</p>
                <p className="text-light-secondary text-sm">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;