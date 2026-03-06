export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  icon?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Università degli Studi di Torino',
    degree: 'Innovation And Communication Technology',
    period: '2019 - 2022',
    grade: '104',
    icon: '/images/works/unito.png'
  },
  {
    institution: 'Vento',
    degree: 'SEI Inventor - Specialised Course, Entrepreneurship / Prototyping Bootcamp',
    period: '2020',
    grade: 'Full Certification',
    icon: '/images/works/sei.png'
  },
  {
    institution: 'Università degli Studi di Torino',
    degree: 'Computer Science',
    period: '2018 - 2019',
    icon: '/images/works/unito.png'
  },
  {
    institution: 'IIS Galilei Ferrari',
    degree: 'Perito Meccatronico ed Energetico, Robotico',
    period: '2013 - 2018',
    grade: '93',
    icon: '/images/works/ferrari.png'
  },
];
