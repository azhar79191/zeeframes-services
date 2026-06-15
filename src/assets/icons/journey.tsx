const JourneyIcon=()=>{
    return(
         <svg width="140" height="60" viewBox="0 0 140 60" fill="none" className="overflow-visible">
            {/* Left dot */}
            <circle cx="12" cy="30" r="6" fill="#F3FE00" className="opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
            {/* Left line */}
            <rect x="18" y="28.7" width="45" height="1.6" rx="0.8" fill="rgba(243,254,0,0.3)"
                className="opacity-0 -translate-x-2.5 scale-x-0 origin-left group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800" />
            {/* Center node */}
            <circle cx="72" cy="30" r="9" fill="rgba(243,254,0,0.3)" className="blur-[1px] opacity-0 -translate-x-8.75 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800" />
            {/* Top-right line */}
            <rect x="81" y="11.7" width="45" height="1.6" rx="0.8" fill="rgba(243,254,0,0.3)"
                className="opacity-0 -translate-x-30 scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800" />
            {/* Top-right dot */}
            <circle cx="131" cy="12.5" r="5" fill="#F3FE00" className="opacity-0 -translate-x-30 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800" />
            {/* Bottom-right line */}
            <rect x="81" y="47.7" width="45" height="1.6" rx="0.8" fill="rgba(243,254,0,0.3)"
                className="opacity-0 -translate-x-[120px] scale-x-[0.3] origin-right group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 transition-all duration-800" />
            {/* Bottom-right dot */}
            <circle cx="131" cy="48.5" r="5" fill="#F3FE00" className="opacity-0 -translate-x-30 scale-50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-800" />
        </svg>
    )
}
export default JourneyIcon