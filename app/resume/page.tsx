import Image from 'next/image';
import Link from 'next/link';
import { person } from '@/lib/data/person';
import { experience, collaborations } from '@/lib/data/experience';
import { skillGroups } from '@/lib/data/skills';
import { education } from '@/lib/data/education';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import PrintButton from './PrintButton';

const projects = getAllProjectSlugs().map(getProjectBySlug);

export default function ResumePage() {
  return (
    <>
      <div className="resume-controls">
        <PrintButton />
        <Link href="/" className="resume-btn-outline">
          ← Portfolio
        </Link>
      </div>

      <div className="resume-document">

        <div className="resume-header">
          <Image
            src={person.photo}
            alt={person.name.full}
            width={106}
            height={132}
            className="resume-header-photo"
          />
          <div className="resume-header-text">
            <div className="resume-h1">{person.name.full}</div>
            <div className="resume-subtitle">{person.subtitle}</div>
            <div className="resume-contact-bar">
              <a href={`mailto:${person.contact.email}`}>{person.contact.email}</a>
              <a href={`${person.contact.website}`}>simonetraversi.it</a>
              <a href={`tel:${person.contact.phone.replace(/\s/g, '')}`}>{person.contact.phone}</a>
              <span>{person.contact.location}</span>
              <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={person.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <hr className="resume-divider" />

        <div className="resume-body">

          <div className="resume-col-left">
            <div className="resume-section">

              <div className="resume-section">
                <div className="resume-h2">Summary</div>
                <div className="resume-bio">
                  {person.bio.map((para, i) => (
                    <p key={i}>{para.split(/\*\*(.+?)\*\*/).map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="resume-col-right">

            <div className="resume-section">
              <div className="resume-h2">Experience</div>
              {experience.map((entry) => (
                <div key={entry.company} className="resume-exp-entry">
                  <div className="resume-exp-with-icon">
                    {entry.icon && (
                      <Image src={entry.icon} alt={entry.company} width={28} height={28} className="resume-exp-icon" />
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="resume-exp-header">
                        <span className="resume-exp-company">{entry.company}</span>
                        <span className="resume-exp-dates">{entry.dates}</span>
                      </div>
                      <div className="resume-exp-role">{entry.role}</div>
                      <div className="resume-exp-desc">{entry.description}</div>
                      <ul className="resume-exp-bullets">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="resume-h3">Short-Term Collaborations</div>
              {collaborations.map((entry) => (
                <div key={entry.company} className="resume-exp-entry">
                  <div className="resume-exp-with-icon">
                    {entry.icon && (
                      <Image src={entry.icon} alt={entry.company} width={28} height={28} className="resume-exp-icon" />
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="resume-exp-header">
                        <span className="resume-exp-company">{entry.company}</span>
                        <span className="resume-exp-dates">{entry.dates}</span>
                      </div>
                      <div className="resume-exp-role">{entry.role}</div>
                      <div className="resume-exp-desc">{entry.resumeDesc ?? entry.description}</div>
                      <ul className="resume-exp-bullets">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-page-break" />

        <div className="resume-body" style={{ paddingTop: '4mm' }}>

          <div className="resume-col-left">
            <div className="resume-section">
              <div className="resume-h2">Skills</div>
              {skillGroups.map((group) => (
                <div key={group.label} className="resume-skill-group">
                  <div className="resume-skill-group-label">{group.label}</div>
                  <div className="resume-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="resume-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="resume-h2">Education</div>
              {education.map((entry) => (
                <div key={entry.institution + entry.period} className="resume-edu-entry">
                  <div className="resume-edu-with-icon">
                    {entry.icon && (
                      <Image src={entry.icon} alt={entry.institution} width={28} height={28} className="resume-edu-icon" />
                    )}
                    <div>
                      <div className="resume-edu-institution">{entry.institution}</div>
                      <div className="resume-edu-degree">{entry.degree}</div>
                      <div className="resume-edu-meta">
                        {entry.period}{entry.grade ? ` · ${entry.grade}` : ''}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="resume-h2">Languages</div>
              {[
                { flag: '/images/flags/it.svg', language: 'Italian', level: 'Mother Tongue' },
                { flag: '/images/flags/en.svg', language: 'English', level: 'C1 Level' },
              ].map(({ flag, language, level }) => (
                <div key={language} className="resume-edu-entry">
                  <div className="resume-edu-with-icon">
                    <Image src={flag} alt={language} width={28} height={28} className="resume-edu-icon" style={{ borderRadius: 2 }} />
                    <div>
                      <div className="resume-edu-institution">{language}</div>
                      <div className="resume-edu-meta">{level}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-col-right">
            <div className="resume-section">
              <div className="resume-h2">Projects</div>
              {projects.map((project) => (
                <div key={project.slug} className="resume-project-entry">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={98}
                      height={60}
                      className="resume-project-img"
                    />
                  ) : (
                    <div className="resume-project-img-placeholder" />
                  )}
                  <div className="resume-project-info">
                    <div className="resume-project-title-row">
                      <span className="resume-project-title">{project.title}</span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-project-link"
                        >
                          ↗ link
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resume-project-link"
                        >
                          ↗ github
                        </a>
                      )}
                    </div>
                    <div className="resume-project-desc">{project.description}</div>
                    <div className="resume-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="resume-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
