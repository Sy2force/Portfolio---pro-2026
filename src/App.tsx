import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Providers } from '@/components/providers/Providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollIndicator, BackToTop } from '@/components/layout/ScrollIndicator';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';
import { Stack } from '@/pages/Stack';
import { Videos } from '@/pages/Videos';
import { CV } from '@/pages/CV';
import { ProjectDetails } from '@/pages/ProjectDetails';

function App() {
  return (
    <Router>
      <Providers>
        <ScrollIndicator />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </Providers>
    </Router>
  );
}

export default App;
