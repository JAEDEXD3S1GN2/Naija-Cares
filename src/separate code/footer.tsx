import React from "react";
import {
  Heart,
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and company info */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">HealthAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leveraging artificial intelligence to provide accessible
              healthcare solutions for everyone in Nigeria and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Diagnosis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Health Checkups
                </a>
              </li>
            </ul>
          </div>

          {/* Health Resources */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Health Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Health Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Common Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Medications Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  First Aid Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mental Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">+234 800 123 4567</p>
                  <p className="text-gray-400">+234 900 765 4321</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <p className="text-gray-400">contact@healthai.ng</p>
              </div>
              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <p className="text-gray-400">Live chat available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 HealthAI. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>
            HealthAI is not a substitute for professional medical advice,
            diagnosis, or treatment. Always consult with a qualified healthcare
            provider for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
