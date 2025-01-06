import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Wir werden uns in Kürze bei dir melden.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-6 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-light mb-8 text-center">
            Kontaktiere uns
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-light mb-6">
                  Kontaktinformationen
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-light-secondary">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Frauenfelderstrasse 39, CH-8370 Sirnach</span>
                  </div>
                  <div className="flex items-center text-light-secondary">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>+41 52 347 11 80</span>
                  </div>
                  <div className="flex items-center text-light-secondary">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>hello@staub-it.ch</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-light">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-light">
                    E-Mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-light">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-light">
                    Nachricht
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-primary hover:bg-primary-dark text-white transition-colors"
                >
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
