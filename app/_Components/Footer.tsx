import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-12 px-6 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Our Values and Links */}
        <div className="lg:col-span-2 space-y-6">
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
          <div className="space-y-3 pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
              <Link href="/#home">
                <div className="hover:text-white transition-colors duration-200">Home</div>
              </Link>
              <Link href="/#aboutus">
                <div className="hover:text-white transition-colors duration-200">About Us</div>
              </Link>
              <Link href="/#what-we-offer">
                <div className="hover:text-white transition-colors duration-200">What We Offer</div>
              </Link>
              <Link href="/#sectors">
                <div className="hover:text-white transition-colors duration-200">Sector</div>
              </Link>
              <Link href="/blogs">
                <div className="hover:text-white transition-colors duration-200">Blog</div>
              </Link>
              <Link href="contact">
                <div className="hover:text-white transition-colors duration-200">Contact Us</div>
              </Link>
            </div>
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
