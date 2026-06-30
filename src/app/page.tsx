import { ArrowUpRight, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 pt-12">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium tracking-tight text-neutral-900">Joaquin Batista</h1>
          <p className="text-neutral-500 font-medium">Founder & Builder</p>
        </div>
        <p className="text-neutral-600 leading-relaxed max-w-[460px] text-[15px]">
          I build intelligent systems that bridge the gap between human intent and machine execution. 
          Currently focused on redefining enterprise workflows through autonomous agents and refined user experiences at <a href="#" className="text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 transition-colors">NextStep</a>.
        </p>
      </section>

      {/* Ventures Section */}
      <section className="space-y-12">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Selected Ventures</h2>
        <div className="space-y-10">
          <div className="group block">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-medium text-neutral-900">NextStep</h3>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300" />
            </div>
            <p className="text-neutral-500 text-[14px] mt-2 leading-relaxed">
              An automation engine designed to handle complex, multi-step business processes with precision and autonomy.
            </p>
          </div>

          <div className="group block">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-medium text-neutral-900">Cognitive Lab</h3>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300" />
            </div>
            <p className="text-neutral-500 text-[14px] mt-2 leading-relaxed">
              A research initiative exploring the intersection of large language models and intuitive interface design.
            </p>
          </div>

          <div className="group block">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-medium text-neutral-900">Pulse</h3>
              <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300" />
            </div>
            <p className="text-neutral-500 text-[14px] mt-2 leading-relaxed">
              High-fidelity data visualization tools for real-time monitoring of distributed infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Writing / Thinking */}
      <section className="space-y-8">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-neutral-900">Minimalist Infrastructure</h4>
            <p className="text-neutral-500 text-[14px] leading-relaxed">
              Complexity is a debt that must be paid. I strive for the simplest possible solution that solves the problem.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[14px] font-medium text-neutral-900">Human-Centric AI</h4>
            <p className="text-neutral-500 text-[14px] leading-relaxed">
              Technology should amplify human capability, not replace it. The interface is as important as the model.
            </p>
          </div>
        </div>
      </section>

      {/* Connection */}
      <section className="space-y-8 pb-12">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Connect</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a href="mailto:joaquin@nextstep.com.uy" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-[14px]">
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a href="#" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-[14px]">
            <Twitter className="w-4 h-4" />
            Twitter
          </a>
          <a href="#" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-[14px]">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a href="#" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-[14px]">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}