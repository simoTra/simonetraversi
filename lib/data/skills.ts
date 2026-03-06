export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'Dart', 'JavaScript', 'Python', 'Java', 'C/C++', 'SQL'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['Flutter', 'React', 'NestJS', 'Next.js', 'Tailwind CSS', 'Platformio', 'Arduino IDE'],
  },
  {
    label: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'PostgreSQL', 'Redis', 'MongoDB', 'MQTT', 'Embedded Systems', '3D Printing', 'Fusion 360'],
  },
  {
    label: 'Robotics, Industrial Automation & Communication',
    skills: [
      'KUKA Robots',
      'ABB Robots',
      'FANUC Robots',
      'e.DO Robots',
      'RoboGuide',
      'Robot Programming',
      'Motion Simulation',
      'Industrial Automation',
      'I2C, UART',
    ],
  },
  {
    label: 'Management & Tracking',
    skills: ['Jira', 'Trello', 'Notion', 'Slack'],
  },
  {
    label: 'AI & Automation',
    skills: ['Claude API', 'OpenAI API', 'MCP Servers', 'AI Agents', 'Prompt Engineering', 'LangChain', 'RAG'],
  },
];
