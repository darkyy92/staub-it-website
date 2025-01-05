import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Schmidt",
    company: "TechCorp GmbH",
    text: "Staub IT hat meine IT-Infrastruktur komplett modernisiert. Der Service ist erstklassig und das Team immer hilfsbereit.",
    rating: 5,
  },
  {
    name: "Sarah Weber",
    company: "Digital Solutions AG",
    text: "Die AI-Lösungen von Staub IT haben meine Prozesse revolutioniert. Ich bin begeistert von der Expertise und Professionalität.",
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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-secondary to-dark" />
      
      {/* Decorative elements */}
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
            <span className="text-gradient">Was andere über uns sagen</span>
          </h2>
          <p className="text-xl text-light-secondary max-w-2xl mx-auto">
            Erfahre, wie wir dir und anderen helfen konnten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="glass-card p-8 rounded-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>
              
              <p className="text-light-secondary text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-800 pt-6">
                <p className="text-xl font-semibold text-light">
                  {testimonial.name}
                </p>
                <p className="text-light-secondary">
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
