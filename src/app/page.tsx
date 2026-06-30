import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Joaquin Batista</h1>
        <p className="text-neutral-500 leading-relaxed max-w-prose">
          Founder and builder focused on creating tools that amplify human potential. 
          Currently exploring the intersection of AI, automation, and user experience at NextStep.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Current Focus</h2>
        <div className="group border-b border-neutral-100 pb-8 transition-colors hover:border-neutral-200">
          <h3 className="text-lg font-medium flex items-center justify-between">
            NextStep
            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
          </h3>
          <p className="text-neutral-500 mt-2">Redefining workflows with intelligent automation systems.</p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Selected Works</h2>
        <div className="space-y-6">
          <div className="group cursor-pointer">
            <h3 className="text-lg font-medium">Project Alpha</h3>
            <p className="text-neutral-500">A revolutionary approach to data visualization.</p>
          </div>
          <div className="group cursor-pointer">
            <h3 className="text-lg font-medium">Project Beta</h3>
            <p className="text-neutral-500">Autonomous agents for complex enterprise tasks.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">Connect</h2>
        <div className="flex gap-4 text-neutral-500">
          <a href="#" className="hover:text-black transition-colors underline decoration-neutral-200 underline-offset-4">Twitter</a>
          <a href="#" className="hover:text-black transition-colors underline decoration-neutral-200 underline-offset-4">LinkedIn</a>
          <a href="mailto:joaquin@nextstep.com.uy" className="hover:text-black transition-colors underline decoration-neutral-200 underline-offset-4">Email</a>
        </div>
      </section>
    </main>
  );
}