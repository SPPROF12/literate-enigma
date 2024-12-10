import { useNavigate } from "react-router-dom";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-green-800 text-white mt-auto">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-green-200">
              Planning and Monitoring Tool for Responsible and Sustainable Digital Health Systems
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick("/environmental-issues")}
                  className="text-green-200 hover:text-green-100 transition-colors"
                >
                  Environmental Issues
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("/initial-planning")}
                  className="text-green-200 hover:text-green-100 transition-colors"
                >
                  Start Planning
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/shaderesearch" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ShadeResearch" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-100">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/shade-research-hub" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.kcl.ac.uk/research/shade-research-hub" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-green-100">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <a
              href="https://shade-newsletter.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-200 hover:text-green-100 transition-colors"
            >
              Subscribe to our newsletter
            </a>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} SHADE Research Hub: Green Digital Health Tool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;