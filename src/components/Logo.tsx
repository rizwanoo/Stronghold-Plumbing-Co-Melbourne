import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#26343D';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Stronghold Plumbing Co. Logo Emblem */}
      <div className="relative shrink-0 overflow-hidden rounded-sm bg-white p-1 shadow-sm border border-black/5 transition-transform duration-300 hover:scale-105">
        <img
          src="/assets/stronghold_official_logo.jpg"
          alt="Stronghold Plumbing Co Official Logo"
          className="w-9 h-9 md:w-10 md:h-10 object-contain block"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-extrabold tracking-wider text-xl md:text-2xl font-heading transition-colors"
          style={{ color: textColor }}
        >
          STRONGHOLD
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="font-bold tracking-[0.22em] text-[10px] md:text-[11px] text-[#18BDB5]">
            PLUMBING CO.
          </span>
          {showSubtitle && (
            <span
              className="text-[9px] md:text-[9.5px] font-semibold tracking-wider transition-colors opacity-75"
              style={{ color: textColor }}
            >
              · MELBOURNE
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
