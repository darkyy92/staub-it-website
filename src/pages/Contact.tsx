import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_1onplgm',
        'template_o16txxf',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'hello@staub-it.ch',
        },
        '-1c0cLJt9lxrW4Dj-'
      );

      toast({
        title: "Nachricht gesendet",
        description: "Wir werden uns in Kürze bei dir melden.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Fehler",
        description: "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später noch einmal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.75rem',
  };

  const center = {
    lat: 47.4772,  // Coordinates for Sirnach
    lng: 8.9975,
  };

  const mapOptions = {
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
    ],
  };

  return (
    <div className="bg-dark">
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
              <div className="glass-card p-8 rounded-xl border-dark-secondary/30">
                <h2 className="text-2xl font-semibold text-light mb-8">
                  Kontaktinformationen
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center text-light/80 hover:text-light transition-colors">
                    <MapPin className="w-5 h-5 mr-4 text-primary" />
                    <span>Frauenfelderstrasse 39, CH-8370 Sirnach</span>
                  </div>
                  <div className="flex items-center text-light/80 hover:text-light transition-colors">
                    <Phone className="w-5 h-5 mr-4 text-primary" />
                    <span>+41 52 347 11 80</span>
                  </div>
                  <div className="flex items-center text-light/80 hover:text-light transition-colors">
                    <Mail className="w-5 h-5 mr-4 text-primary" />
                    <span>hello@staub-it.ch</span>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-xl border-dark-secondary/30 overflow-hidden">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={mapOptions}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
            <div className="glass-card p-8 rounded-xl border-dark-secondary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-light/90 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-secondary/50 border-dark-secondary/30 text-light placeholder:text-light/50 focus:border-primary/50 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-light/90 mb-2 block">
                    E-Mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-secondary/50 border-dark-secondary/30 text-light placeholder:text-light/50 focus:border-primary/50 focus:ring-primary/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-light/90 mb-2 block">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-dark-secondary/50 border-dark-secondary/30 text-light placeholder:text-light/50 focus:border-primary/50 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-light/90 mb-2 block">
                    Nachricht
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md bg-dark-secondary/50 border border-dark-secondary/30 text-light placeholder:text-light/50 focus:border-primary/50 focus:ring-primary/50 min-h-[120px] p-3"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
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