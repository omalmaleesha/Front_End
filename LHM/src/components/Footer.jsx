import React from 'react';
import { Github, Twitter, Linkedin, BookOpenCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <BookOpenCheck className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">LectureHall</span>
            </div>
            <p className="mt-4 text-sm text-blue-100/80">
              Transforming educational space management with smart solutions for modern institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Documentation', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-blue-100/80 hover:text-amber-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-100/80 hover:text-amber-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-100/10">
          <p className="text-center text-sm text-blue-100/60">
            © {currentYear} LectureHall Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}