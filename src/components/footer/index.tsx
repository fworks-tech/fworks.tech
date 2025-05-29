export default function Footer() {
  return (
    <footer className="text-sm text-cyan-400 text-center py-6 z-20 ">
      <p>
        &copy; {new Date().getFullYear()} FWORKS TECH. Todos os direitos reservados.
        <br />
        <a href="/privacy" className="underline hover:text-cyan-300 ml-2">
          Política de Privacidade
        </a>
      </p>
    </footer>
  );
}
