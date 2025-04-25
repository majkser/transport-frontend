import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTopButton/scrollToTop";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full">
      <div className="w-full px-4 sm:px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="space-y-4 px-4 lg:col-span-5">
            <h3 className="text-white text-lg font-bold mb-4">O nas</h3>
            <p className="text-sm">
              Dostarczanie doskonałości w zakresie rozwiązań logistycznych i
              transportowych od 2010 r. Twój zaufany partner w globalnych
              usługach spedycyjnych i przewozowych.
            </p>
          </div>

          {/* Quick Links */}
          <div className="px-4 lg:col-span-3">
            <h3 className="text-white text-lg font-bold mb-4">Linki</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Strona główna
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Positioned on the right */}
          <div className="px-4 lg:col-span-4 lg:justify-self-end">
            <h3 className="text-white text-lg font-bold mb-4">
              Skontaktuj się z nami
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="break-all">+48 123 456 312</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span className="break-all">TwojaFirma@company.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Logistics Ave, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Mirek-trans. Wszystkie prawa
              zastrzeżone.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}

export default Footer;
