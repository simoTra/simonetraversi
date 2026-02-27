export default function Footer() {
  return (
    <footer className="border-t border-[#757575] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
        <p className="text-[#757575] text-sm">© 2026 Simone Traversi</p>
        <a
          href="#hero"
          className="text-[#757575] hover:text-[#FF4400] text-sm transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
