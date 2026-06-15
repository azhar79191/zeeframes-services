const CheckIcon =()=>{
    return(
        <svg width="220" height="40" viewBox="0 0 220 40" fill="none">
            {/* Line 1 - longer */}
            <rect x="0" y="9"  width="150" height="2" rx="1" fill="rgba(243,254,0,0.8)" />
            {/* Line 2 - shorter */}
            <rect x="0" y="29" width="120" height="2" rx="1" fill="rgba(243,254,0,0.8)" />
            {/* Check 1 */}
            <path d="M168 11L173 17L182 8" stroke="#F3FE00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Check 2 */}
            <path d="M168 24L173 30L182 21" stroke="#F3FE00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export default CheckIcon
