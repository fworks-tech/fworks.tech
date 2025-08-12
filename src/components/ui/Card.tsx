import * as React from 'react';

type CardVariant = 'default' | 'borderless';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  sx?: React.CSSProperties;
};

export default function Card({
  children,
  variant = 'default',
  className = '',
  sx,
  style,
  ...rest
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    default: `
      border-4 rounded-2xl
      neon-border-shadow
    `,
    borderless: ``
  };

  const base = 'animate-fade-in relative mx-auto';
  const mergedStyle = sx || style ? { ...style, ...sx } : undefined;

  return (
    <div
      className={[base, variants[variant], className].filter(Boolean).join(' ')}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}
