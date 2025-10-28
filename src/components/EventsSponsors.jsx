import { motion } from 'framer-motion';
import { Calendar, Mic, Code2, Users, Star, Sparkles } from 'lucide-react';

const events = [
  {
    icon: Calendar,
    title: 'Weekly Workshops',
    desc: 'Hands-on sessions from Python basics to advanced ML ops and model deployment.',
  },
  {
    icon: Mic,
    title: 'Tech Talks',
    desc: 'Industry speakers and researchers share insights on AI trends and careers.',
  },
  {
    icon: Code2,
    title: 'Build Nights',
    desc: 'Collaborative evenings to ship small projects, Kaggle sprints, and hack mini-apps.',
  },
];

const sponsors = [
  { name: 'OpenAI', color: 'from-fuchsia-500 to-violet-500' },
  { name: 'Hugging Face', color: 'from-amber-400 to-pink-500' },
  { name: 'NumFOCUS', color: 'from-cyan-400 to-blue-500' },
  { name: 'Kaggle', color: 'from-emerald-400 to-teal-500' },
];

export default function EventsSponsors() {
  return (
    <section className="relative bg-[#0a0c12] text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Events */}
        <motion.div
          id="events"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Events & Programs</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">
            Learn with structure and community. We run events every week designed to move you forward.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, idx) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 p-2.5 shadow-lg shadow-violet-500/20">
                    <e.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{e.desc}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
                  <Users className="h-4 w-4" />
                  Open to all levels
                </div>
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-400/30 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          id="sponsors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-violet-300" />
            <h2 className="text-2xl sm:text-3xl font-semibold">Sponsors & Partners</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">
            Supported by organizations that believe in open-source, education, and the future of AI.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur`}
              >
                <div className={`absolute inset-0 opacity-30 bg-gradient-to-r ${s.color}`} />
                <div className="relative">
                  <p className="text-lg font-semibold">{s.name}</p>
                  <p className="text-sm text-white/70">Community Partner</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
