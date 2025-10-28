import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">DSC • Data Science Club</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a
              href="#register"
              className="rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm transition-colors"
            >
              Register
            </a>
            <a
              href="#signin"
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-violet-500/20"
            >
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" /> Sign in
              </span>
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#register" className="flex-1 text-center rounded-md px-3 py-2 bg-white/10 text-white" onClick={() => setOpen(false)}>
                Register
              </a>
              <a
                href="#signin"
                className="flex-1 text-center rounded-md px-3 py-2 bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
                onClick={() => setOpen(false)}
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
