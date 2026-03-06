import Image from 'next/image';
import { person } from '@/lib/data/person';

export default function Footer() {
  return (
    <footer className="border-t border-[#757575] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center">

          <div className="flex flex-col gap-2 text-sm text-[#757575]">
            <a href={`mailto:${person.contact.email}`} className="hover:text-[#FF4400] transition-colors duration-200">
              {person.contact.email}
            </a>
            <a href={`tel:${person.contact.phone.replace(/\s/g, '')}`} className="hover:text-[#FF4400] transition-colors duration-200">
              {person.contact.phone}
            </a>
            <span>{person.contact.location}</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image src="/logo.svg" alt={person.name.full} width={64} height={64} />
            <p className="text-[#757575] text-sm">© 2026 {person.name.full}</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <a
              href={person.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#FF4400] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={person.social.github}
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
