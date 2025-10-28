import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#06070b] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.30),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">DATA SCIENCE CLUB</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Learn. Build. Discover.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300">
              Together in Data.
            </span>
          </h1>
          <p className="mt-4 text-white/80">
            We are a community of learners, practitioners, and creators exploring machine learning,
            AI, and analytics. We host workshops, talks, hack nights, and real-world projects to help
            you grow from beginner to builder.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/20"
            >
              Join the Club
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-white bg-white/10 hover:bg-white/20"
            >
              Explore Events
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
