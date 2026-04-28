export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  description: string;
  bullets: string[];
  icon?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Fanuc - Sanoma',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2023 - Present',
    description:
      'I deliver hands-on training in industrial robotics, helping students and professionals program and operate FANUC robots. Focus on motion simulation, process optimization, and preparing participants for FANUC Robotics Certification.',
    bullets: [
      'Precision handling of industrial robots',
      'Robot programming and configuration',
      'Motion simulation and validation (RoboGuide)',
      'Cycle-time analysis and optimization',
      'Teaching and certification support',
    ],
    icon: '/images/works/sanomaFauc.png'
  },
  {
    company: 'Makrshakr SRL',
    role: 'Software Engineer',
    dates: '2022 - Present',
    description:
      'I develop and have the responsibility of the mobile experience for robotic bar systems, alongside web, backend, and embedded software. I integrate industrial robots on client sites and support rapid prototyping with 3D printing.',
    bullets: [
      'End-to-end ownership of mobile applications (Flutter)',
      'Web dashboards & NestJS backend integration',
      'Custom API development & IoT communication (MQTT)',
      'Industrial robot commissioning and programming (KUKA, ABB)',
      'Rapid prototyping and 3D fabrication',
      'Containerized deployments (Docker)',
      'AI and MCP servers',
      'ESP32 firmware (C++) & Bluetooth Serial for coin reader hardware',
    ],
    icon: '/images/works/ms.png'
  },
  {
    company: 'Comau - Pearson',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2018 - 2023',
    description:
      'Trained over 500 students in industrial robotics using e.DO robots, fieldbus communication, and programming. Led interactive sessions and teacher training to bridge education with industry-ready skills.',
    bullets: [
      'Fieldbus and I/O communication protocols',
      'Robot operation, configuration, and programming',
      'e.DO Learning Lab sessions for hands-on learning',
      'Teacher training & assessment programs',
      'Empowering students with practical automation competencies',
    ],
    icon: '/images/works/pearsonComau.png'
  },
];

export const collaborations: ExperienceEntry[] = [
  {
    company: 'World Skills',
    role: 'Robotic Independent Expert',
    dates: '2024 - 2024',
    description:
      'Part of the evaluation team for the Integrated Robotic Systems category, supporting the technical assessment of competitors\' performance by evaluating robot programming, system integration, troubleshooting, and automation workflows according to competition standards. Contributed to fair judging, technical compliance, and alignment with industrial robotics best practices.',
    bullets: [],
    icon: '/images/works/wskills.png'
  },
  {
    company: 'IFTS',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2023 - 2023',
    description:
      'Led a 3-month industrial robotics training, helping students progress from basic knowledge to internationally recognized certification. Facilitated hands-on robot handling, taught advanced programming, created real-world simulations, and supervised practical exercises to prepare for exams.',
    bullets: [],
    icon: '/images/works/ifts.png'
  },
  {
    company: 'Galilei Ferrari',
    role: 'Robotic and Industrial Automation Trainer',
    dates: '2021 - 2021',
    description:
      'Led Robotica 101, an introductory robotics masterclass for high school students, covering robot types, mechanisms, and programming techniques. Engaged students through theoretical explanations and hands-on programming exercises.',
    bullets: [],
    icon: '/images/works/ferrari.png'
  },
];
