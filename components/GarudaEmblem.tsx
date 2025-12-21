// Government Official Garuda Emblem Component
export function GarudaEmblem({ size = 56 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Outer Shield */}
      <path 
        d="M60 10 L85 25 L90 55 L60 100 L30 55 L35 25 Z" 
        fill="#F9B233" 
        stroke="#002C5F" 
        strokeWidth="2"
      />
      
      {/* Eagle Head */}
      <ellipse cx="60" cy="35" rx="12" ry="15" fill="#002C5F"/>
      <circle cx="56" cy="33" r="2" fill="#FFFFFF"/>
      <circle cx="64" cy="33" r="2" fill="#FFFFFF"/>
      <path d="M60 38 L55 42 L60 41 L65 42 Z" fill="#F9B233"/>
      
      {/* Wings Left */}
      <path 
        d="M45 45 Q30 50 25 60 Q30 55 45 55 Z" 
        fill="#002C5F"
      />
      <path 
        d="M43 55 Q28 60 23 70 Q28 65 43 65 Z" 
        fill="#002C5F"
      />
      
      {/* Wings Right */}
      <path 
        d="M75 45 Q90 50 95 60 Q90 55 75 55 Z" 
        fill="#002C5F"
      />
      <path 
        d="M77 55 Q92 60 97 70 Q92 65 77 65 Z" 
        fill="#002C5F"
      />
      
      {/* Body */}
      <ellipse cx="60" cy="55" rx="10" ry="20" fill="#002C5F"/>
      
      {/* Tail Feathers */}
      <path d="M55 70 L50 90 L55 85 Z" fill="#002C5F"/>
      <path d="M60 72 L60 95 L60 88 Z" fill="#002C5F"/>
      <path d="M65 70 L70 90 L65 85 Z" fill="#002C5F"/>
      
      {/* Central Shield */}
      <ellipse cx="60" cy="55" rx="8" ry="10" fill="#DC143C"/>
      
      {/* Star */}
      <path 
        d="M60 50 L61 53 L64 53 L62 55 L63 58 L60 56 L57 58 L58 55 L56 53 L59 53 Z" 
        fill="#FFFFFF"
      />
      
      {/* Ribbon */}
      <path 
        d="M35 85 Q60 90 85 85" 
        stroke="#FFFFFF" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Decorative Elements */}
      <circle cx="40" cy="30" r="3" fill="#DC143C" opacity="0.6"/>
      <circle cx="80" cy="30" r="3" fill="#DC143C" opacity="0.6"/>
      <circle cx="35" cy="60" r="2" fill="#F9B233" opacity="0.8"/>
      <circle cx="85" cy="60" r="2" fill="#F9B233" opacity="0.8"/>
    </svg>
  );
}
