import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Globe } from "lucide-react";

interface Project { title: string; category: string; date: string; description: string; stack: string[]; image: string; github?: string; demo?: string; }

const projectsData: Record<string, Project> = {
  "cowrec": {
    title: "CowRec System", category: "Computer Vision / AI", date: "2024",
    description: `CowRec is not just a monitoring system; it is the application of cutting-edge Computer Vision to revolutionize precision livestock farming.\n\nUsing the power of YOLOv8 and convolutional neural networks, the system processes video feeds in real-time to identify, track, and analyze the individual behavior of each animal in the herd.\n\nThe architecture was designed to operate in hostile environments (Edge Computing), ensuring that vital data on health and productivity are collected instantly, allowing for data-driven decision-making that maximizes dairy production efficiency.`,
    stack: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Docker"], image: "/projects/cow1.jpeg", github: "https://github.com/PontoPe/CowRec", demo: "https://cowrec.com", 
  },
  "hyundai": {
    title: "Hyundai Process Manager", category: "Enterprise Automation", date: "2023",
    description: `A massive process orchestration solution developed to eliminate operational bottlenecks at one of the world's largest automakers.\n\nThis system acts as the factory's "digital brain," automating complex end-to-end decisions: from predictive parts inventory calculation for assembling a specific vehicle to dynamic allocation of engineers and technicians on the production line.\n\nBeyond the factory floor, the architecture extends to administrative processes, managing hiring and termination flows with the same surgical precision applied to car assembly, resulting in a drastic reduction of waste and idle time.`,
    stack: ["Java", "Spring Boot", "AWS", "PostgreSQL"], image: "/projects/hyundai.png",
  },
  "jbs": {
    title: "JBS Data Pipeline", category: "Data Engineering", date: "2023",
    description: `In global-scale operations, milliseconds matter. This project consisted of architecting an ultra-high throughput data pipeline capable of ingesting and processing terabytes of production data in real-time.\n\nUsing Apache Kafka as the backbone, the system decouples production from analytics, ensuring no critical data is lost, even under extreme load spikes.\n\nThe result is a robust and reliable Data Lake that feeds executive dashboards with precise metrics, allowing the food giant to monitor its operational efficiency with unprecedented granularity.`,
    stack: ["Python", "Apache Kafka", "Pandas", "SQL"], image: "/projects/jbs.png",
  },
  "tourneysys": {
    title: "TourneySys", category: "SaaS Platform", date: "2023",
    description: `Managing e-sports championships requires more than spreadsheets; it demands an infrastructure capable of supporting the intensity of competition.\n\nTourneySys is a complete SaaS platform designed for tournament organizers. With a robust bracket generation algorithm and real-time updates, it eliminates the chaos of manual management.\n\nThe reactive interface ensures players and spectators have instant access to results and upcoming matches, creating a professional and fluid experience, whether for local championships or large-scale tournaments.`,
    stack: ["React", "Node.js", "MongoDB"], image: "/projects/tourneysys.png", github: "https://github.com/PontoPe/Tournament-System",
  },
  "olamundo": {
    title: "OlaMundo!", category: "EdTech / Java GUI", date: "2024",
    description: `Demystifying code complexity for the next generation of developers. "OlaMundo!" is a gamified educational platform that transforms learning programming logic into a visual and intuitive experience.\n\nInspired by the interactive pedagogy of apps like Duolingo, I developed a complete graphical interface (GUI) in Java that guides novices through progressive challenges.\n\nThe system abstracts initial difficult syntax, focusing on building algorithmic reasoning, creating a solid and encouraging foundation for those writing their first lines of code.`,
    stack: ["Java", "Swing/FX", "OOP Patterns"], image: "/projects/olamundo.png",
  },
  "portfolio": {
    title: "Personal Portfolio", category: "Web Development", date: "2025",
    description: `This site is not just a showcase; it's a statement of technical capability. Built on the modern ecosystem of Next.js 14+, it combines extreme performance with "Hacker/Terminal" design.\n\nEvery interaction was micro-optimized: from the virtual file system simulated in the terminal to encrypted text effects. The architecture uses Server Components for instant loading and Tailwind CSS for a consistent and responsive design system.\n\nMore than showing projects, this portfolio practically demonstrates mastery over Frontend, UX Design, and modern Software Engineering.`,
    stack: ["Next.js", "Tailwind CSS", "TypeScript"], image: "/projects/portfolio.png",
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="h-screen w-full bg-[#181818] flex flex-col items-center justify-center text-white font-mono">
        <h1 className="text-4xl mb-4">404 - Project Not Found</h1>
        <Link href="/" className="text-green-500 hover:underline">&lt; Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#181818] text-[#B1B1B1] font-mono selection:bg-white/20 selection:text-black">
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#work" className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-white/10 rounded text-sm hover:bg-white hover:text-black transition-colors backdrop-blur">
            <ArrowLeft className="w-4 h-4" /><span>Back</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <div className="mb-12">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#555] mb-4"><span>{project.category}</span><span>•</span><span>{project.date}</span></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">{project.title}</h1>
            <div className="flex flex-wrap gap-2">{project.stack?.map((tech: string) => <span key={tech} className="px-3 py-1 bg-[#222] border border-white/5 rounded text-xs text-[#888]">{tech}</span>)}</div>
        </div>
        <div className="w-full aspect-video bg-[#111] border border-white/10 rounded-lg overflow-hidden mb-16 relative"><Image src={project.image} alt={project.title} fill className="object-cover" priority /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2"><h2 className="text-white text-xl font-bold mb-6">Overview</h2><p className="text-lg leading-relaxed text-[#999] whitespace-pre-line">{project.description}</p></div>
            <div className="space-y-6"><h2 className="text-white text-xl font-bold mb-6">Links</h2>{project.github && (<a href={project.github} target="_blank" className="flex items-center justify-between w-full p-4 border border-white/10 rounded hover:bg-white hover:text-black transition-colors group"><span>Source Code</span><Github className="w-4 h-4" /></a>)}{project.demo && (<a href={project.demo} target="_blank" className="flex items-center justify-between w-full p-4 border border-white/10 rounded hover:bg-white hover:text-black transition-colors group"><span>Live Demo</span><Globe className="w-4 h-4" /></a>)}</div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [ { slug: 'cowrec' }, { slug: 'hyundai' }, { slug: 'jbs' }, { slug: 'tourneysys' }, { slug: 'olamundo' }, { slug: 'portfolio' } ];
}