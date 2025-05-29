export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
                relative w-full max-w-4xl mx-auto p-6 sm:p-8
                border-4 rounded-2xl
                border-cyan-400
                shadow-[0_0_40px_10px_#00ccff,0_0_80px_20px_#9ae7ff]
                animate-fade-in
                neon-border
            "
    >
      {children}
    </div>
  );
}
