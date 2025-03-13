import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTopButton/scrollToTop";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full">
      <div className="w-full px-4 py-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4 flex-1 ml-4">
            <h3 className="text-white text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm break-words w-100">
              Delivering excellence in logistics and transportation solutions
              since 2010. Your trusted partner in global shipping and freight
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 md:flex md:justify-end mr-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+48 123 456 312</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@company.com</span>
                </li>
                <li className="flex items-center gap-2 mr-6">
                  <MapPin size={16} />
                  <span>123 Logistics Ave, CA 90210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 mr-16">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
