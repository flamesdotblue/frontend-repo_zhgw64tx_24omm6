import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsSponsors from './components/EventsSponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#06070b] font-inter">
      <Navbar />
      <main>
        <Hero />
        <EventsSponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
