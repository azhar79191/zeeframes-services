// All animations are aria-hidden decorative elements — SEO & screen-reader safe

import { BallsAnimation, CheckIcon, JourneyIcon } from "@/src/assets/icons";

export const ChecklistAnim = () => (
    <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center -translate-y-4 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-800 pointer-events-none z-0"
    >
       <CheckIcon/>
    </div>
);

export const BarsChartAnim = () => (
    <div
        aria-hidden="true"
        className="absolute inset-0 flex items-end justify-center gap-3.5 pb-24 -translate-x-5 pointer-events-none z-0"
    >
        {[
            { h: 22, solid: false },
            { h: 36, solid: true  },
            { h: 16, solid: false },
            { h: 30, solid: true  },
            { h: 20, solid: false },
        ].map(({ h, solid }, i) => (
            <span
                key={i}
                style={{ height: h }}
                className={`w-5 rounded opacity-0 scale-y-0 origin-bottom group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-700 ${solid ? "bg-[#F3FE00]" : "bg-[rgba(243,254,0,0.22)] blur-[1px]"}`}
            />
        ))}
    </div>
);

export const JourneyGridAnim = () => (
    <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
       <JourneyIcon/>
    </div>
);

export const BallsAnim = () => (
    <div
        aria-hidden="true"
        className="absolute left-[25%] bottom-[60%] pointer-events-none z-0"
    >
        <BallsAnimation/>
    </div>
);

export const cardAnimations = [ChecklistAnim, BarsChartAnim, JourneyGridAnim, BallsAnim];
