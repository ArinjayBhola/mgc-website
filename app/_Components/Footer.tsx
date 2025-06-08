import { Mail, MapPin, Phone, Pin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4d4d4d] text-white py-10 px-6 lg:px-20 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1: Our Values */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Values</h2>
          <p className="leading-relaxed text-gray-300">
            Our enduring reputation is rooted in the foundational values of Mittal Gupta and Co., which continue to
            shape both our success and that of our clients. Guided by unwavering commitment, principled integrity, and a
            deep sense of purpose, our professional team remains steadfast in upholding these values—ensuring they
            propel us confidently into the future.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Contact Us</h2>

          {/* Registered Office */}
          <div>
            <h3 className="font-medium text-white mb-1">
              <span className="inline-flex items-center gap-2">
                <Pin /> Registered Office
              </span>
            </h3>
            <div className="flex items-start gap-2">
              <MapPin
                size={18}
                className="mt-1 text-[#f7954d]"
              />
              <span>10/437 Khalasi Lines, Kanpur-208001</span>
            </div>
          </div>

          {/* Branch Office */}
          <div>
            <h3 className="font-medium text-white mb-1">
              <span className="inline-flex items-center gap-2">
                <Pin /> Branch Office
              </span>
            </h3>

            <div className="flex items-start gap-2">
              <MapPin
                size={18}
                className="mt-1 text-[#f7954d]"
              />
              <span>House no.31, Sector 15, Indra Nagar, Lucknow</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone
              size={18}
              className="text-[#f7954d]"
            />
            <span>0512-3158490, 9839034107, 9415131816</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail
              size={18}
              className="text-[#f7954d]"
            />
            <span>mgco@mgcoca.in</span>
          </div>
        </div>

        {/* Column 3: Additional Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
          <ul className="space-y-2 text-gray-200">
            <li>
              <span className="font-bold text-white">Locations:</span> 2
            </li>
            <li>
              <span className="font-bold text-white">Partners:</span> 8
            </li>
            <li>
              <span className="font-bold text-white">Team:</span> 40+
            </li>
            <li>
              <span className="font-bold text-white">Chartered Accountants:</span> 10
            </li>
            <li>
              <span className="font-bold text-white">Sectors:</span> 20+
            </li>
            <li>
              <span className="font-bold text-white">Services:</span> 12+
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
