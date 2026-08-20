export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  description: string;
  resumeDesc?: string;
  bullets: string[];
  icon?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Makrshakr SRL',
    role: 'Full-Stack Software Engineer - Robotic Systems',
    dates: '2022 - Present',
    description:
      'Full-stack engineer on a real-time robotic bar system, owning the entire software stack - from user-facing mobile and web interfaces down to embedded firmware and industrial robot integration. Design and ship the software layer that makes complex robotic hardware controllable, reliable, and scalable in production environments.',
    bullets: [
      'Architected and shipped a cross-platform mobile app (Flutter/Dart) as mobile engineer, managing the full release lifecycle on mobile devices',
      'Built RESTful APIs and web dashboards (NestJS, React) for real-time monitoring and control of robotic systems via MQTT and WebSockets',
      'Designed communication layers between backend services and robot controllers, handling real-time command dispatch and state synchronisation',
      'Developed ESP32 firmware in C++ with Bluetooth Serial protocol for custom coin-reader hardware, bridging embedded and backend systems',
      'Containerized services with Docker, enabling reproducible deployments across different client environments',
      'Implemented MCP servers and RAG pipelines to automate internal workflows and reduce manual operations',
      'Commissioned and programmed industrial robots (KUKA, ABB) on client sites, directly informing software interface design with hardware constraints',
      'Accelerated hardware iteration through rapid prototyping with 3D printing and Fusion 360',
    ],
    icon: '/images/works/ms.png'
  },
  {
    company: 'Fanuc - Sanoma',
    role: 'Robotics & Industrial Automation Trainer',
    dates: '2023 - Present',
    description:
      'Deliver hands-on industrial robotics training for students and professionals, covering robot programming, motion simulation, and process optimization. Support participants toward official FANUC Robotics Certification.',
    bullets: [
      'Taught robot programming, configuration, and motion simulation (RoboGuide) to mixed technical audiences',
      'Conducted cycle-time analysis and optimization exercises in simulated industrial environments',
      'Supported candidates through FANUC Robotics Certification preparation and assessment',
    ],
    icon: '/images/works/sanomaFauc.png'
  },
  {
    company: 'Comau - Pearson',
    role: 'Robotics & Industrial Automation Trainer',
    dates: '2018 - 2023',
    description:
      'Trained 500+ students in industrial robotics using e.DO robots, fieldbus communication, and programming. Led interactive lab sessions and teacher training programmes to bridge education with industry-ready skills.',
    bullets: [
      'Delivered robotics curriculum to 500+ students, covering fieldbus and I/O communication protocols',
      'Designed and ran e.DO Learning Lab sessions for hands-on robot operation and programming',
      'Developed and delivered teacher training and assessment programmes to standardise delivery quality',
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
      'Technical evaluator for the Integrated Robotic Systems category. Assessed robot programming, system integration, troubleshooting, and automation workflows against competition and industry standards, ensuring fair judging and technical compliance.',
    resumeDesc: 'Technical evaluator for the Integrated Robotic Systems category. Assessed robot programming, system integration, troubleshooting, and automation workflows per competition standards.',
    bullets: [],
    icon: '/images/works/wskills.png'
  },
  {
    company: 'IFTS',
    role: 'Robotics & Industrial Automation Trainer',
    dates: '2023 - 2023',
    description:
      'Led a 3-month intensive industrial robotics training programme, taking students from foundational knowledge to internationally recognised certification. Delivered hands-on robot handling, advanced programming, and real-world simulation exercises.',
    resumeDesc: 'Led a 3-month training programme from fundamentals to internationally recognised certification, with hands-on robot handling, advanced programming, and real-world simulations.',
    bullets: [],
    icon: '/images/works/ifts.png'
  },
  {
    company: 'Galilei Ferrari',
    role: 'Robotics Instructor',
    dates: '2021 - 2021',
    description:
      'Delivered Robotica 101, an introductory robotics masterclass for high school students, covering robot types, mechanisms, and programming techniques through theory and hands-on exercises.',
    resumeDesc: 'Led Robotica 101 for high school students, covering robot types, mechanisms, and programming through hands-on exercises.',
    bullets: [],
    icon: '/images/works/ferrari.png'
  },
];
