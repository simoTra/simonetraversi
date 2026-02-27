const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Rust'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Resume</h2>

        {/* Download button */}
        <div className="mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#FF4400] text-[#F4F4F4] px-8 py-4 font-semibold"
          >
            Download PDF
          </a>
        </div>

        {/* Skills block */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#F4F4F4] mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[#757575] text-sm uppercase tracking-widest mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#1A1A1A] border border-[#757575] text-[#D1E0E8] text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education block */}
        <div>
          <h3 className="text-2xl font-semibold text-[#F4F4F4] mb-8">
            Education
          </h3>
          <div>
            <p className="text-[#F4F4F4] font-semibold">
              University of Milan
            </p>
            <p className="text-[#D1E0E8]">
              B.Sc. Computer Science
            </p>
            <p className="text-[#757575] text-sm">2018 – 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
