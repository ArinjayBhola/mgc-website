"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-12 px-6 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Our Values and Links */}
        <div className="lg:col-span-2 space-y-10">
          {/* Values Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#f7954d]">Our Values</h2>
            <p className="text-gray-300 leading-relaxed">
              Our enduring reputation is rooted in the foundational values of Mittal Gupta and Co., which continue to
              shape both our success and that of our clients. Guided by unwavering commitment, principled integrity, and
              a deep sense of purpose, our professional team remains steadfast in upholding these values—ensuring they
              propel us confidently into the future.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#f7954d]">Quick Links</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-gray-300">
              <li>
                <Link
                  href="/#home"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#aboutus"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#what-we-offer"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  What We Offer
                </Link>
              </li>
              <li>
                <Link
                  href="/#sectors"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  Sector
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  Contact Us
                </Link>
              </li>
              {/* New Career Link */}
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#f7954d]">Contact Us</h2>

          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="mt-1 text-[#f7954d]"
            />
            <div>
              <p className="font-semibold">Registered Head Office</p>
              <p className="text-gray-300">10/437 Khalasi Lines, Kanpur – 208001</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="mt-1 text-[#f7954d]"
            />
            <div>
              <p className="font-semibold">Branch Office</p>
              <p className="text-gray-300">House No. 31, Sector 15, Indra Nagar, Lucknow</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone
              size={20}
              className="mt-1 text-[#f7954d]"
            />
            <div>
              <p className="text-gray-300">0512-3158490, 8090858505, 9415131816</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail
              size={20}
              className="mt-1 text-[#f7954d]"
            />
            <div>
              <p className="text-gray-300">mgco@mgcoca.in</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
