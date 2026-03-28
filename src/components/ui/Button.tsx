import Link from 'next/link';
import { clsx } from 'clsx';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'gold' | 'outline';
  className?: string;
}

export default function Button({
  href,
  children,
  variant = 'gold',
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block px-8 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm',
        variant === 'gold' &&
          'bg-thai-gold text-thai-darkest hover:bg-thai-gold-light hover:shadow-lg hover:shadow-thai-gold/20',
        variant === 'outline' &&
          'border-2 border-thai-gold text-thai-gold hover:bg-thai-gold hover:text-thai-darkest',
        className
      )}
    >
      {children}
    </Link>
  );
}
