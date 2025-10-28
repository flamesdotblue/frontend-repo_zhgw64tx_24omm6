import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#06070b] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.10),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">About the Club</h3>
            <p className="mt-3 text-white/75 max-w-lg">
              We bring together students and professionals who are curious about data. From
              foundations to cutting-edge, we learn by doing and share what we discover.
            </p>

            <form id="register" onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email to register"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-violet-500/20"
              >
                Register
              </button>
            </form>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-white/80">
                <li><a href="#events" className="hover:text-white">Upcoming Events</a></li>
                <li><a href="#sponsors" className="hover:text-white">Sponsors</a></li>
                <li><a href="#home" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="Email" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-white/20">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Data Science Club. All rights reserved.</p>
          <p>Made with curiosity and code.</p>
        </div>
      </div>
    </footer>
  );
}
