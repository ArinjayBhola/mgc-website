import { Briefcase, Building2, Layers3, MapPin, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    icon: <MapPin size={28} />,
    number: "2",
    label: "Locations",
  },
  {
    icon: <Users size={28} />,
    number: "8",
    label: "Partners",
  },
  {
    icon: <Briefcase size={28} />,
    number: "40+",
    label: "Team Members",
  },
  {
    icon: <ShieldCheck size={28} />,
    number: "10",
    label: "Chartered Accountants",
  },
  {
    icon: <Building2 size={28} />,
    number: "20+",
    label: "Sectors Covered",
  },
  {
    icon: <Layers3 size={28} />,
    number: "12+",
    label: "Services Offered",
  },
];

const Banner = () => {
  return (
    <section className="bg-[#3a3a3a] text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#4d4d4d] rounded-xl p-5 flex flex-col items-center shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="mb-2 text-[#f7954d]">{item.icon}</div>
            <div className="text-2xl font-bold">{item.number}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
