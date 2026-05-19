export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">© 2025 Choung A Yeun</p>
        <p className="font-mono text-xs text-muted/50">
          Powered by Next.js · TypeScript · Framer Motion · Tailwind
        </p>
      </div>
    </footer>
  );
}
