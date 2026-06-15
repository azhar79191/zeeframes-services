import { AmericaLogo, AsiaLogo, EuropeLogo } from "@/src/assets/icons";
import Link from "next/link";
import locationData from "@/src/data/location.json";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    AmericaLogo: <AmericaLogo />,
    EuropeLogo:  <EuropeLogo />,
    AsiaLogo:    <AsiaLogo />,
};

const LocationSection = () => {
    return (
        <section className="bg-[#18181B]">
            <div className="md:p-6 px-4 py-6">
                <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
                    {locationData.map((location, index) => (
                        <div key={location.id} className={`flex items-start py-3 md:p-5 ${index === 2 ? "gap-5" : "gap-3"}`}>
                            <div className="flex-shrink-0 w-25 h-25 flex items-center justify-center">
                                {iconMap[location.iconKey]}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-[#FFF] text-xl font-tight font-medium">{location.region}</h3>
                                <Link
                                    href={location.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${location.region} location on Google Maps`}
                                    className="text-[#8E8E8E] text-sm hover:text-white transition-colors"
                                >
                                    {location.address}
                                </Link>
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
