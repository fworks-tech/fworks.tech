export default function Card({
  children,
  variant = 'default' // Define o estilo padrão
}: {
  children: React.ReactNode;
  variant?: 'default' | 'borderless'; // Variantes disponíveis
}) {
  const variants = {
    default: `
      border-4 rounded-2xl border-cyan-400
      neon-border
    `,
    borderless: ``
  };

  return (
    <div className={`animate-fade-in relative mx-auto flex h-min w-full ${variants[variant]} `}>
      {children}
    </div>
  );
}
