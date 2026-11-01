import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Github, Mail, Linkedin, ArrowUpRight, Code2, BrainCircuit, ShieldCheck,
  Database, GraduationCap, MapPin, Menu, X, Layers3,
  ServerCog, Boxes, BriefcaseBusiness, ExternalLink
} from 'lucide-react';
import './index.css';

const github = 'https://github.com/Jyothi162';
const email = 'jyothirajan162@gmail.com';
const linkedin = 'https://www.linkedin.com/in/jyothi-rajan-02b639151/';

const projects = [
  {
    name: 'EnergyOps AI', category: 'Agentic AI · RAG',
    description: 'Agentic AI platform for solar-energy customer support, combining RAG-based knowledge retrieval, LangGraph workflow orchestration, automated installation-status lookup, human-in-the-loop ticket approval, and electrical safety escalation. Built with FastAPI, Streamlit, and Docker.',
    stack: [
  'Python',
  'Llama 3.2',
  'Ollama',
  'LangGraph',
  'LangChain',
  'ChromaDB',
  'Ollama Embeddings',
  'BM25',
  'Hybrid Search',
  'RRF',
  'FastAPI',
  'Streamlit',
  'SQLite',
  'Docker',
  'Docker Compose',
  'pytest'
    ],
    url: `${github}/energyops-ai`, status: 'Built', icon: BrainCircuit
  },
  {
    name: 'Enterprise Agentic RAG Assistant', category: 'Enterprise AI · Knowledge Retrieval',
    description: 'Secure enterprise AI assistant built with LangGraph, LangChain, Qdrant, and Llama 3.2 for role-based knowledge retrieval and source-grounded answers. Features JWT authentication, role-based access control (RBAC), document ingestion, FastAPI integration, and Docker deployment, with 21 passing automated security tests.',
    stack: ['Python', 'LangGraph', 'LangChain', 'Llama 3.2', 'Ollama', 'Qdrant', 'Vector embeddings', 'FastAPI', 'Streamlit', 'Docker', 'pytest', 'JWT', 'RBAC'],
    url: `${github}/enterprise-agentic-rag`, status: 'Built', icon: Layers3
  },
  {
    name: 'TransGo AI Logistics Assistant', category: 'Conversational AI · NLP',
    description: 'Developed a Rasa-based conversational AI assistant for logistics operations, integrating real-time weather data through the OpenWeatherMap API. Implemented intent recognition, entity extraction, and weather-related transport risk assessment, with a responsive web interface.',
    stack: ['Rasa', 'Python', 'OpenWeatherMap','NLU', 'HTML/CSS', 'REST APIs', 'JavaScript'],
    url: `${github}/transgo-ai-logistics-assistant`, status: 'Built', icon: Code2
  },
  {
    name: 'DistilBERT Sentiment Classification', category: 'NLP · Machine Learning',
    description: 'Fine-tuned DistilBERT using Hugging Face Transformers and PyTorch for binary sentiment classification of e-commerce product reviews, achieving 90.75% accuracy and 90.70% F1-score on unseen validation data. Implemented text preprocessing, tokenization, model training, and performance evaluation.',
    stack: ['PyTorch', 'Hugging Face', 'Transformers', 'Scikit-learn', 'NLP', 'Python', 'DistilBERT'],
    url: `${github}/DistilBERT-Sentiment-Classification`, status: 'Built', icon: BrainCircuit
  },
  {
    name: 'Ideal Function Selection and Data Mapping', category: 'Python · Data Engineering',
    description: 'Developed a Python-based data mapping application that selects optimal mathematical functions using Mean Squared Error (MSE). Implemented training and test data mapping, SQLite database integration, automated testing, and Matplotlib visualizations to analyze function selection and mapping performance.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Unit Testing', 'MSE', 'SQLite'],
    url: `${github}/Ideal-Function-Selection-and-Data-Mapping`, status: 'Built', icon: Database
  }
];

const technologyGroups = [
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Generative AI', 'RAG', 'Sentiment Analysis'] },
  { title: 'Programming', icon: Code2, items: ['Python', 'SQL', 'PL/SQL', 'JavaScript', 'Unix Shell'] },
  { title: 'Frameworks & Libraries', icon: Boxes, items: ['LangChain', 'LangGraph', 'PyTorch', 'Hugging Face', 'FastAPI', 'Rasa', 'Pandas', 'NumPy'] },
  { title: 'Agentic AI & Retrieval', icon: Layers3, items: ['AI Agents', 'Tool Calling', 'Human-in-the-Loop', 'Hybrid Search', 'Embeddings', 'Prompt Design', 'RAG Evaluation'] },
  { title: 'Databases & Data Engineering', icon: Database, items: ['ChromaDB', 'SQLite', 'Oracle Database', 'ETL Pipelines', 'Data Processing', 'Vector Search'] },
  { title: 'Tools & Deployment', icon: ServerCog, items: ['Docker', 'Docker Compose', 'Ollama', 'Git', 'GitHub', 'Streamlit', 'VS Code'] },
  { title: 'AI Security & Evaluation', icon: ShieldCheck, items: ['Safety Escalation', 'Human-in-the-Loop Approval', 'RAG Answer Evaluation', 'pytest', 'Safety Scenario Testing', 'prompt-injection', 'Tool Call Evaluation'] }
];

const nav = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {eyebrow && <p className="text-teal-300 text-xs uppercase tracking-[.28em] font-bold mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-[.06em] uppercase">{title}</h2>
      {description && <p className="text-slate-400 max-w-3xl mx-auto mt-5 leading-8 text-base md:text-lg">{description}</p>}
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="min-h-screen glow text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b1018]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold">
            <span className="rounded-xl bg-teal-400 text-[#08131b] px-3 py-2">JR</span>
            <span>Jyothi Rajan<span className="block text-xs font-normal text-slate-400">AI & Machine Learning Engineer</span></span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            {nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-teal-300 transition-colors">{n}</a>)}
          </nav>
          <button className="md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="md:hidden px-6 pb-5 flex flex-wrap gap-4 text-sm">{nav.map(n => <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>}
      </header>

      <main id="home">
        <section className="max-w-6xl mx-auto px-5 pt-20 md:pt-28 pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full pill px-4 py-2 text-sm"><MapPin size={15} /> Berlin, Germany · Open to AI opportunities</div>
          <p className="mt-10 text-lg md:text-xl font-semibold text-teal-300">👋 Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mt-4 leading-tight tracking-tight text-white">Jyothi Rajan</h1>
          <p className="mt-5 uppercase tracking-[.22em] sm:tracking-[.35em] text-teal-300 text-sm md:text-lg font-bold">AI & Machine Learning Engineer</p>
          <p className="mt-4 text-slate-400 text-sm md:text-base">Agentic AI · RAG · LLM Applications · Automation</p>
          <p className="max-w-3xl mx-auto text-slate-300 text-base md:text-lg mt-8 leading-8">M.Sc. Artificial Intelligence student at IU International University in Berlin, with professional experience in data engineering and analytics. I design and build AI agents, retrieval-augmented generation (RAG) systems, LLM-powered applications, and practical automation solutions.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-9">
            <a href="#projects" className="bg-teal-400 text-slate-950 font-bold rounded-xl px-6 py-3 hover:bg-teal-300 transition-colors">Explore Projects ↗</a>
            <a href={github} target="_blank" rel="noreferrer" className="glass rounded-xl px-6 py-3 inline-flex items-center gap-2 hover:border-teal-400/60"><Github size={18} /> GitHub</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
            <div className="glass rounded-2xl p-5"><GraduationCap className="text-teal-300 mx-auto" /><strong className="block text-xl mt-2">M.Sc.</strong><span className="text-xs text-slate-400">Artificial Intelligence</span></div>
            <div className="glass rounded-2xl p-5"><Code2 className="text-teal-300 mx-auto" /><strong className="block text-xl mt-2">{projects.length}</strong><span className="text-xs text-slate-400">Featured projects</span></div>
            <div className="glass rounded-2xl p-5"><Database className="text-teal-300 mx-auto" /><strong className="block text-xl mt-2">Data + AI</strong><span className="text-xs text-slate-400">Engineering background</span></div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle title="About Me" eyebrow="My background" />
          <div className="glass rounded-2xl p-7 md:p-10 max-w-4xl mx-auto">
            <p className="text-slate-300 leading-8 text-lg">I am an AI Engineering enthusiast currently pursuing a Master's in Artificial Intelligence at IU International University of Applied Sciences in Berlin, with over 7 years of professional experience in data engineering, ETL, Python automation, and analytics.

I specialize in building practical AI applications, including agentic AI assistants, secure Retrieval-Augmented Generation (RAG) systems, and intelligent workflow automation. My hands-on projects combine LangGraph, LangChain, LLMs, vector databases, FastAPI, and Docker to develop reliable, scalable AI solutions.

I am passionate about Generative AI, AI agents, enterprise knowledge retrieval, and responsible AI development, with a strong focus on solving real-world business problems..</p>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle eyebrow="Selected work" title="Featured Projects" description="Practical AI applications spanning intelligent agents, retrieval-augmented generation, conversational AI, and machine learning." />
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return <article key={p.name} className={`project glass rounded-2xl p-6 md:p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex justify-between items-start gap-4"><div className="p-3 bg-teal-400/10 rounded-xl"><Icon className="text-teal-300" size={28} /></div><span className="text-xs rounded-full border border-slate-600 px-3 py-1 text-slate-300">{p.status}</span></div>
                <p className="text-xs uppercase tracking-widest text-teal-300 mt-6">{p.category}</p>
                <h3 className="text-2xl font-bold mt-2">{p.name}</h3>
                <p className="text-slate-300 mt-3 leading-7">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">{p.stack.map(s => <span key={s} className="pill text-xs px-3 py-1 rounded-full">{s}</span>)}</div>
                {p.url ? <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-300 font-semibold mt-6 hover:text-teal-200">View repository <ArrowUpRight size={16} /></a> : <p className="text-slate-400 text-sm mt-6">Repository and demo coming soon</p>}
              </article>;
            })}
          </div>
        </section>

        <section id="experience" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle eyebrow="Career journey" title="Professional Experience" />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass rounded-2xl p-7"><BriefcaseBusiness className="text-teal-300" /><p className="text-teal-300 text-sm mt-4">Aug 2020 – Jan 2024</p><h3 className="text-xl font-bold mt-2">Data Engineer</h3><p className="text-slate-400 mt-1">Stecktra Technologies · Bengaluru</p><p className="text-slate-300 mt-4 leading-7">Developed Python automation and web data extraction workflows, worked with ETL pipelines, Oracle PL/SQL, and Unix shell scripting.</p></div>
            <div className="glass rounded-2xl p-7"><BriefcaseBusiness className="text-teal-300" /><p className="text-teal-300 text-sm mt-4">Jan 2016 – Jan 2020</p><h3 className="text-xl font-bold mt-2">Data Analyst</h3><p className="text-slate-400 mt-1">Stecktra Technologies · Bengaluru</p><p className="text-slate-300 mt-4 leading-7">Worked on product catalog data preparation, specification processing, data formatting, and integration.</p></div>
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle title="Technologies I Work With" description="A combination of artificial intelligence, programming, data engineering, and automation tools I use to develop practical applications." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologyGroups.map(group => {
              const Icon = group.icon;
              return <div key={group.title} className="glass rounded-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 mb-7"><Icon className="text-teal-300 shrink-0" size={27} /><h3 className="text-xl font-bold">{group.title}</h3></div>
                <div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="pill rounded-full px-3 py-2 text-sm text-slate-200">{item}</span>)}</div>
              </div>;
            })}
          </div>
        </section>

        <section id="education" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle title="Education" />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass rounded-2xl p-7"><GraduationCap className="text-teal-300 mb-4" size={28} /><h3 className="text-xl font-bold">M.Sc. Artificial Intelligence</h3><p className="text-slate-300 mt-3">IU International University of Applied Sciences · Berlin</p><p className="text-slate-400 text-sm mt-3">Currently pursuing</p></div>
            <div className="glass rounded-2xl p-7"><GraduationCap className="text-teal-300 mb-4" size={28} /><h3 className="text-xl font-bold">B.Tech. Electronics and Communication Engineering</h3><p className="text-slate-300 mt-3">India</p><p className="text-slate-400 text-sm mt-3">Bachelor's degree</p></div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-5 py-20">
          <SectionTitle title="Contact" description="Interested in AI engineering, agentic AI, RAG, or automation opportunities? Feel free to connect with me through the platforms below." />
          <div className="grid md:grid-cols-3 gap-5">
            {email ? <a href={`mailto:${email}`} className="contact-card glass rounded-2xl p-8 text-center block"><span className="contact-icon"><Mail size={29} /></span><h3 className="text-xl font-bold mt-5">Email</h3><p className="text-slate-400 mt-3 break-all">{email}</p></a> : <div className="glass rounded-2xl p-8 text-center"><span className="contact-icon"><Mail size={29} /></span><h3 className="text-xl font-bold mt-5">Email</h3><p className="text-slate-400 mt-3">Contact email coming soon</p></div>}
            {linkedin ? <a href={linkedin} target="_blank" rel="noreferrer" className="contact-card glass rounded-2xl p-8 text-center block"><span className="contact-icon"><Linkedin size={29} /></span><h3 className="text-xl font-bold mt-5">LinkedIn</h3><p className="text-slate-400 mt-3">Connect with me <ExternalLink size={14} className="inline" /></p></a> : <div className="glass rounded-2xl p-8 text-center"><span className="contact-icon"><Linkedin size={29} /></span><h3 className="text-xl font-bold mt-5">LinkedIn</h3><p className="text-slate-400 mt-3">Profile link coming soon</p></div>}
            <a href={github} target="_blank" rel="noreferrer" className="contact-card glass rounded-2xl p-8 text-center block"><span className="contact-icon"><Github size={29} /></span><h3 className="text-xl font-bold mt-5">GitHub</h3><p className="text-slate-400 mt-3">View my projects <ExternalLink size={14} className="inline" /></p></a>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 text-center text-slate-500 text-sm py-7 px-5">© {new Date().getFullYear()} Jyothi Rajan · Built with React and Tailwind CSS</footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
