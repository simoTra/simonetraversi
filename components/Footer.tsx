import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[#757575] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center">

          <div className="flex flex-col gap-2 text-sm text-[#757575]">
            <a href="mailto:simone.traversi4@gmail.com" className="hover:text-[#FF4400] transition-colors duration-200">
              simone.traversi4@gmail.com
            </a>
            <a href="tel:+393667043677" className="hover:text-[#FF4400] transition-colors duration-200">
              +39 366 704 3677
            </a>
            <span>Turin, Italy</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image src="/logo.svg" alt="Simone Traversi" width={64} height={64} />
            <p className="text-[#757575] text-sm">© 2026 Simone Traversi</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <a
              href="https://www.linkedin.com/in/simone-traversi-392b0518b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/simoTra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="#hero"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200 mt-2"
            >
              Back to top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
