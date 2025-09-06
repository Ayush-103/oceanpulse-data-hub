import { Waves, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const links = {
    research: [
      "Oceanography",
      "Marine Biology", 
      "Molecular Studies",
      "Data Analytics",
      "Ecosystem Modeling"
    ],
    resources: [
      "Publications",
      "Data Portal",
      "Research Tools",
      "Documentation",
      "Training Programs"
    ],
    about: [
      "Our Team",
      "Facilities",
      "Collaborations",
      "News & Events",
      "Careers"
    ]
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-ocean rounded-lg shadow-glow">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CMLRE</h3>
                <p className="text-sm text-white/70">Marine Living Resources & Ecology</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              India's premier marine research institute advancing ocean science 
              for sustainable development and ecosystem conservation.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80">info@cmlre.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80">+91-484-2398618</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  CMLRE, Kochi - 682508<br />
                  Kerala, India
                </span>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Research Areas</h4>
            <ul className="space-y-3">
              {links.research.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About & Contact</h4>
            <ul className="space-y-3 mb-6">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Contact Us
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest research updates and marine science insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div className="mb-4 md:mb-0">
              © 2024 Centre for Marine Living Resources and Ecology. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;