const BallsAnimation=()=>{
    return(
        <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="overflow-visible">
            {/* ball 1 - medium, mid-low */}
            <circle cx="10"  cy="40" r="7"  fill="#F3FE00"             style={{transformBox:'fill-box',transformOrigin:'center'}} className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
            {/* ball 2 - large glow, higher */}
            <circle cx="38"  cy="60" r="11" fill="rgba(243,254,0,0.3)" style={{transformBox:'fill-box',transformOrigin:'center'}} className="blur-[2px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600" />
            {/* ball 3 - small, highest */}
            <circle cx="66"  cy="40" r="6"  fill="#F3FE00"             style={{transformBox:'fill-box',transformOrigin:'center'}} className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700" />
            {/* ball 4 - medium glow, mid */}
            <circle cx="98" cy="60" r="9"  fill="rgba(243,254,0,0.3)" style={{transformBox:'fill-box',transformOrigin:'center'}} className="blur-[2px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600" />
            {/* ball 5 - small, low */}
            <circle cx="126" cy="40" r="6"  fill="#F3FE00"             style={{transformBox:'fill-box',transformOrigin:'center'}} className="opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
            {/* ball 6 - tiny glow, low */}
            <circle cx="150" cy="60" r="5"  fill="rgba(243,254,0,0.3)" style={{transformBox:'fill-box',transformOrigin:'center'}} className="blur-[1px] opacity-0 -translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
        </svg>
    )
}

export default BallsAnimation