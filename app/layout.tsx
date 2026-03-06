import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/context/TransitionContext";
import PageTransitionOverlay from "@/components/PageTransitionOverlay";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const barlow = Barlow({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const description =
  'Robotics software engineer and full-stack developer from Turin, Italy. Expert in KUKA, ABB, FANUC robots, Flutter, Next.js, NestJS. Software Engineer at Makr Shakr — building robotic bar systems.';

export const metadata: Metadata = {
  metadataBase: new URL('https://simonetraversi.it'),
  title: {
    default: 'Simone Traversi | Robotics Software Engineer & Full-Stack Developer',
    template: '%s | Simone Traversi',
  },
  description,
  keywords: [
    'robotics software engineer', 'industrial automation', 'KUKA robots', 'ABB robots',
    'FANUC robots', 'Makr Shakr', 'full-stack developer', 'Flutter developer',
    'Next.js', 'NestJS', '3D printing', 'embedded systems', 'Turin', 'Italy',
    'robot programming', 'IoT developer',
  ],
  authors: [{ name: 'Simone Traversi', url: 'https://simonetraversi.it' }],
  creator: 'Simone Traversi',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://simonetraversi.it' },
  openGraph: {
    type: 'profile',
    url: 'https://simonetraversi.it',
    siteName: 'Simone Traversi',
    title: 'Simone Traversi | Robotics Software Engineer & Full-Stack Developer',
    description,
    locale: 'en_US',
    firstName: 'Simone',
    lastName: 'Traversi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simone Traversi | Robotics Software Engineer & Full-Stack Developer',
    description,
    creator: '@simonetraversi',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Simone Traversi',
    url: 'https://simonetraversi.it',
    jobTitle: 'Robotics Software Engineer & Full-Stack Developer',
    description:
      'Robotics software engineer and full-stack developer based in Turin, Italy, born 1999. Expert in industrial robot programming (KUKA, ABB, FANUC) and software development (Flutter, Next.js, NestJS). Trained 500+ students in industrial robotics. Software Engineer at Makr Shakr building robotic bar systems.',
    image: 'https://simonetraversi.it/images/simoneHome.jpeg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Turin',
      addressRegion: 'Piedmont',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/simone-traversi-392b0518b/',
      'https://github.com/simoTra',
    ],
    email: 'simone.traversi4@gmail.com',
    knowsAbout: [
      'Industrial Robotics', 'KUKA Robots', 'ABB Robots', 'FANUC Robots',
      'Robot Programming', 'Motion Simulation', 'Flutter', 'React', 'Next.js',
      'NestJS', '3D Printing', 'IoT', 'Embedded Systems', 'Full-Stack Development',
      'Industrial Automation',
    ],
    worksFor: { '@type': 'Organization', name: 'Makr Shakr SRL' },
    alumniOf: { '@type': 'EducationalOrganization', name: 'Università degli Studi di Torino' },
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'Speed Skiing Rear Fairings',
        url: 'https://simonetraversi.it/projects/klFearings',
        description: 'Design and development of aerodynamic fairings for the Speed Skiing World Cup using 3D scanning, Fusion 360, and CFD studies.',
        keywords: 'Prototyping, 3D Modeling, 3D Printing, CFD Studies',
        dateCreated: '2025',
      },
      {
        '@type': 'CreativeWork',
        name: 'Amazing Hand PWM Controller',
        url: 'https://simonetraversi.it/projects/amazing_hand_esp32_pwm',
        description: 'ESP32-based robotic hand controller driving 4 fingers via 8 servo motors on an Adafruit PCA9685 PWM board, built with PlatformIO.',
        keywords: 'Firmware, ESP32, Robotics, Embedded Systems, 3D Modeling',
        codeRepository: 'https://github.com/simoTra/amazing_hand_esp32_pwm',
        dateCreated: '2026',
      },
      {
        '@type': 'CreativeWork',
        name: 'AB Ski Lessons Zermatt',
        url: 'https://simonetraversi.it/projects/abski-school',
        description: 'A multilingual booking site and admin dashboard for a ski school in Zermatt, Switzerland. Built with Next.js, Prisma, Stripe, and PostgreSQL.',
        keywords: 'Next.js, TypeScript, Prisma, Stripe, PostgreSQL',
        dateCreated: '2025',
      },
      {
        '@type': 'CreativeWork',
        name: 'ST-Keeb-67',
        url: 'https://simonetraversi.it/projects/st-keeb-67',
        description: 'Handwired mechanical keyboard with plasma-cut inox frame and 3D printed split plate.',
        keywords: 'Design, Firmware, Prototyping, 3D Modeling, Electronic, Plasma Cutting',
        codeRepository: 'https://github.com/simoTra/st_keeb',
        dateCreated: '2023',
      },
      {
        '@type': 'CreativeWork',
        name: 'ProjectaLogs',
        url: 'https://simonetraversi.it/projects/projectalogs',
        description: 'A platform for managing 3D printing projects and clients, built with React, NestJS, and Python.',
        keywords: 'React, TypeScript, Python, NestJS, 3D Printing',
        codeRepository: 'https://github.com/simoTra/projectalogs',
        dateCreated: '2025',
      },
      {
        '@type': 'CreativeWork',
        name: 'Warpato',
        url: 'https://simonetraversi.it/projects/warpato',
        description: 'A design project exploring furniture and tools shaped by material honesty, craft constraints, and environmental intention.',
        keywords: 'Design, Branding, 3D Print',
        dateCreated: '2026',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://simonetraversi.it',
    name: 'Simone Traversi — Portfolio',
    description:
      'Portfolio of Simone Traversi, robotics software engineer and full-stack developer from Turin, Italy.',
    author: { '@type': 'Person', name: 'Simone Traversi' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Simone Traversi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simone Traversi is a robotics software engineer and full-stack developer born in 1999, based in Turin, Italy. Since 2018 he has programmed industrial robots (KUKA, ABB, FANUC, Comau) and trained over 500 students in industrial robotics. He currently works at Makr Shakr SRL as a Software Engineer, where he develops software for robotic bar systems. His expertise spans robot programming, motion simulation, Flutter, React, Next.js, NestJS, 3D printing, and embedded systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Makr Shakr and what does Simone Traversi do there?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Makr Shakr SRL is a Turin-based company that builds robotic bar systems — automated cocktail-making machines used in hotels, cruise ships, and events worldwide. Simone Traversi works there as a Software Engineer, developing the Flutter mobile app that controls the robots, programming KUKA robotic arms, and engineering 3D-printed custom components for the bar systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which industrial robots does Simone Traversi program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simone Traversi programs KUKA, ABB, FANUC, and Comau industrial robots, as well as the Pollen Robotics open-source Reachy robot. He writes motion programs in KRL (KUKA Robot Language), RAPID (ABB), and KAREL (FANUC), designs simulation environments, and integrates robots with external software systems via OPC-UA and custom APIs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What programming languages and frameworks does Simone Traversi use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simone Traversi works with: Flutter/Dart for cross-platform mobile apps, TypeScript/JavaScript for web development with React, Next.js, and NestJS, Python for automation scripts and robotics tooling, KRL/RAPID/KAREL for industrial robot programming, and C/C++ for embedded systems. He also uses tools like ROS, Docker, PostgreSQL, and various CAD/3D-printing software.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Simone Traversi based and how can I contact him?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simone Traversi is based in Turin (Torino), Piedmont, Italy. You can reach him at simone.traversi4@gmail.com, connect on LinkedIn at linkedin.com/in/simone-traversi-392b0518b/, or explore his open-source work on GitHub at github.com/simoTra. His portfolio is at simonetraversi.it.',
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${inter.variable} font-sans bg-[#1A1A1A] text-[#F4F4F4] antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TransitionProvider>
          <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
          <PageTransitionOverlay />
          <Cursor />
        </TransitionProvider>
      </body>
    </html>
  );
}
