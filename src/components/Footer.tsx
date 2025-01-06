import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-light text-sm">
            © {new Date().getFullYear()} Staub IT. Alle Rechte vorbehalten.
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-light text-sm hover:text-primary">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;