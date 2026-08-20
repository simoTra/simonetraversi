export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Dart', 'Python', 'Java', 'C/C++', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    label: 'Backend & APIs',
    skills: ['NestJS', 'Node.js', 'REST APIs', 'gRPC', 'WebSockets', 'MQTT', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'DevOps & Infrastructure',
    skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'GitHub Actions', 'Agile', 'Scrum'],
  },
  {
    label: 'Robotics & Real-Time Systems',
    skills: [
      'ROS2',
      'Real-Time Systems',
      'Hardware-Software Integration',
      'KUKA',
      'ABB',
      'FANUC',
      'Robot Programming',
      'Motion Simulation',
      'RoboGuide',
      'Industrial Automation',
    ],
  },
  {
    label: 'Embedded & IoT',
    skills: ['ESP32', 'PlatformIO', 'Arduino IDE', 'FreeRTOS', 'Bluetooth Serial', 'I2C', 'UART', 'Embedded C/C++'],
  },
  {
    label: 'AI & Workflow Automation',
    skills: ['Custom MCP Servers', 'RAG Pipelines', 'LLM Integration', 'n8n', 'Workflow Automation'],
  },
  {
    label: 'Project Management',
    skills: ['Jira', 'Trello', 'Notion', 'Slack'],
  },
];
