import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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

  return (
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
          className="w-full text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>
    </div>
  );
};