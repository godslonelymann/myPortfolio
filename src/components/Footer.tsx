export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="shell type-meta flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:justify-between">
        <p>Designed and built by Anurag Gaikwad.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
