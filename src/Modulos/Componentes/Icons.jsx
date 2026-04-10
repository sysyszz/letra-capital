const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconBook({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" {...stroke} />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" {...stroke} />
    </svg>
  );
}

export function IconUsers({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...stroke} />
      <circle cx="9" cy="7" r="4" {...stroke} />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" {...stroke} />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" {...stroke} />
    </svg>
  );
}

export function IconClipboardList({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" {...stroke} />
      <rect x="9" y="3" width="6" height="4" rx="1" {...stroke} />
      <path d="M9 12h6M9 16h6M9 8h6" {...stroke} />
    </svg>
  );
}

export function IconWallet({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" {...stroke} />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" {...stroke} />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" {...stroke} />
    </svg>
  );
}

export function IconPencil({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" {...stroke} />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" {...stroke} />
    </svg>
  );
}

export function IconTrash({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <polyline points="3 6 5 6 21 6" {...stroke} />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...stroke} />
      <line x1="10" y1="11" x2="10" y2="17" {...stroke} />
      <line x1="14" y1="11" x2="14" y2="17" {...stroke} />
    </svg>
  );
}

export function IconPlus({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <line x1="12" y1="5" x2="12" y2="19" {...stroke} />
      <line x1="5" y1="12" x2="19" y2="12" {...stroke} />
    </svg>
  );
}

export function IconX({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...rest}>
      <line x1="18" y1="6" x2="6" y2="18" {...stroke} />
      <line x1="6" y1="6" x2="18" y2="18" {...stroke} />
    </svg>
  );
}
