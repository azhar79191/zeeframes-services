import { AmericaLogo, AsiaLogo, EuropeLogo, PhoneCall } from "@/src/assets/icons";
import Link from "next/link";

const locations = [
    {
        id: 1,
        icon:<AmericaLogo/>,
        region: "North America",
        address: "555 Madison Avenue New York 10022, USA",
        phone: "+1 (646) 820-1923",
        phoneLink: "tel:+16468201923"
    },
    {
        id: 2,
        icon: <EuropeLogo/>,
        region: "Europe",
        address: "Phoenix 371 Deansgate, Manchester M15 4UN, United Kingdom",
        phone: "+44 (161) 0786-822",
        phoneLink: "tel:+441610786822"
    },
    {
        id: 3,
        icon: <AsiaLogo/>,
        region: "Asia",
        address: "H.N.2, Block 5, Baharia Society Near DHA Phase 8, Karachi",
        phone: "0312-3789425",
        phoneLink: "tel:+923123789425"
    }
];

const LocationSection = () => {
    return (
        <section className="bg-[#18181B]">
                <div className="md:p-6 px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {locations.map((location, index) => (
                            <div key={location.id} className={`flex items-start py-3 md:p-5 ${index === 2 ? 'gap-5' : 'gap-3'}`}>
                                {/* Icon */}
                                <div className="flex-shrink-0 w-25 h-25 flex items-center justify-center">
                                    {location.icon}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-[#FFF] text-xl font-medium">
                                        {location.region}
                                    </h3>
                                    <p className="text-[#8E8E8E] text-sm">
                                        {location.address}
                                    </p>
                                    <Link href={location.phoneLink} className="text-base font-medium leading-5.5 text-[#F3FE00]">
                                    {location.phone}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
        </section>
    );
};

export default LocationSection;
