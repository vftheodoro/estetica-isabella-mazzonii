type P = { className?: string };

export const Arrow = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MenuIcon = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const WhatsApp = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 8.5c.3 3 2 4.7 5 5l1-1.3 2 .9c-.2 1.6-1.1 2.4-2.7 2.4-3.7-.5-6.3-3.1-6.8-6.8C7.5 7.1 8.3 6.2 9.9 6l.9 2-1.8.5Z" fill="currentColor" />
  </svg>
);

export const Droplet = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3c3.5 4.2 6 7.4 6 10.2A6 6 0 1 1 6 13.2C6 10.4 8.5 7.2 12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const Sparkle = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Leaf = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M5 19c4-4 7-7 14-14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Heart = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const Clock = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 8v4.5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPin = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

export const User = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5 19c1.6-3.2 4-4.8 7-4.8s5.4 1.6 7 4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Check = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 3.6 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.1l-4.8 2.4.9-5.4-3.9-3.8 5.4-.8L12 3.6Z" />
  </svg>
);

export const Quote = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 8H5.5C4.7 8 4 8.7 4 9.5V14c0 .8.7 1.5 1.5 1.5H8c.6 0 1 .4 1 1v1.5c0 .8-.7 1.5-1.5 1.5H6v-1h1.5c.3 0 .5-.2.5-.5V16.5c0-.3-.2-.5-.5-.5H5.5C4.1 16 3 14.9 3 13.5V9.5C3 8.1 4.1 7 5.5 7H10v1Zm11 0h-4.5C15.7 8 15 8.7 15 9.5V14c0 .8.7 1.5 1.5 1.5H19c.6 0 1 .4 1 1v1.5c0 .8-.7 1.5-1.5 1.5H17v-1h1.5c.3 0 .5-.2.5-.5V16.5c0-.3-.2-.5-.5-.5h-3c-1.4 0-2.5-1.1-2.5-2.5V9.5C13 8.1 14.1 7 15.5 7H21v1Z" />
  </svg>
);

export const Hands = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V11M11 11V6.5a1.5 1.5 0 0 1 3 0V11M14 11V7.8a1.5 1.5 0 0 1 3 0V14c0 3.3-2.2 5.5-5.5 5.5H11c-2.5 0-4.5-1.5-5.2-3.7L4.5 12.2A1.3 1.3 0 0 1 6.8 11H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Face = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 10h.01M15 10h.01M9.5 14.5c.8.8 1.7 1.2 2.5 1.2s1.7-.4 2.5-1.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Zap = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 3 6 13h5l-1 8 7-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const Calendar = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Chevron = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Instagram = ({ className = "" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5.1-8.9a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 4.4c-1.7 0-1.9 0-2.6.04-.7.03-1.17.14-1.58.3a3.2 3.2 0 0 0-1.16.75 3.2 3.2 0 0 0-.75 1.16c-.16.41-.27.89-.3 1.58C5.57 9.0 5.56 9.2 5.56 12s0 2.99.05 3.66c.03.7.14 1.17.3 1.58.17.43.4.8.75 1.16.36.35.73.58 1.16.75.41.16.89.27 1.58.3.67.04.9.05 2.6.05s1.93 0 2.6-.05c.7-.03 1.17-.14 1.58-.3a3.2 3.2 0 0 0 1.16-.75 3.2 3.2 0 0 0 .75-1.16c.16-.41.27-.89.3-1.58.04-.67.05-.9.05-2.6s0-1.93-.05-2.6c-.03-.7-.14-1.17-.3-1.58a3.2 3.2 0 0 0-.75-1.16 3.2 3.2 0 0 0-1.16-.75c-.41-.16-.89-.27-1.58-.3-.67-.04-.9-.05-2.6-.05Zm0 1.53c1.67 0 1.87.01 2.53.04.61.03.94.13 1.16.22.3.11.5.25.72.47.22.22.36.43.47.72.09.22.19.55.22 1.16.03.66.04.86.04 2.53s-.01 1.87-.04 2.53c-.03.61-.13.94-.22 1.16-.11.3-.25.5-.47.72-.22.22-.43.36-.72.47-.22.09-.55.19-1.16.22-.66.03-.86.04-2.53.04s-1.87-.01-2.53-.04c-.61-.03-.94-.13-1.16-.22a1.94 1.94 0 0 1-.72-.47 1.94 1.94 0 0 1-.47-.72c-.09-.22-.19-.55-.22-1.16-.03-.66-.04-.86-.04-2.53s.01-1.87.04-2.53c.03-.61.13-.94.22-1.16.11-.3.25-.5.47-.72.22-.22.43-.36.72-.47.22-.09.55-.19 1.16-.22.66-.03.86-.04 2.53-.04Z" />
  </svg>
);
