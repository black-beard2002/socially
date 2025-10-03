import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", url: "#" },
    { name: "GitHub", icon: "⚡", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
  ];

  const footerLinks = [
    { name: "About", url: "#" },
    { name: "Privacy", url: "#" },
    { name: "Terms", url: "#" },
    { name: "Contact", url: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 rounded-2xl shadow-lg m-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative w-full max-w-screen-xl mx-auto px-6 py-8 md:py-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center group mb-4 space-x-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                S
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                socialy
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Making the world a small country through meaningful connections.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 max-w-xs">
                Stay updated with our latest features and news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 flex-1"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">
              Est. 2025
            </span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear}{" "}
            <a
              href="#"
              className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Ahmad Salemeh
            </a>
            . All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤</span> for
            a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
