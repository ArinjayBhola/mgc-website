import { Mail, MapPin, Phone } from "lucide-react";
import Banner from "./Banner";

const Footer = () => {
  return (
    <>
      <Banner />
      <footer className="bg-[#2e2e2e] text-white py-12 px-6 lg:px-20 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Our Values */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-[#f7954d]">Our Values</h2>
            <p className="text-gray-300 leading-relaxed">
              Our enduring reputation is rooted in the foundational values of Mittal Gupta and Co., which continue to
              shape both our success and that of our clients. Guided by unwavering commitment, principled integrity, and
              a deep sense of purpose, our professional team remains steadfast in upholding these values—ensuring they
              propel us confidently into the future.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#f7954d]">Contact Us</h2>

            {/* Registered Head Office */}
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

            {/* Branch Office */}
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

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <Phone
                size={20}
                className="mt-1 text-[#f7954d]"
              />
              <div>
                <p className="text-gray-300">0512-3158490, 9839034107, 9415131816</p>
              </div>
            </div>

            {/* Email */}
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
    </>
  );
};

export default Footer;
