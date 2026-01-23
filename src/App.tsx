import React from 'react'
import { BookOpen, Lightbulb, BrainCircuit, Users, Eye, Download } from 'lucide-react'
import zine1 from './images/zine1.png';
import zine2 from './images/zine2.png';
import zine3 from './images/zine3.png';
function App() {
		const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
		  const [scale, setScale] = React.useState(1);
		
		  // --- ADD SCROLL LOCK HOOK HERE ---
		  React.useEffect(() => {
		    if (selectedImage) {
		      document.body.style.overflow = 'hidden';
		    } else {
		      document.body.style.overflow = 'unset';
		    }
		    return () => {
		      document.body.style.overflow = 'unset';
		    };
		  }, [selectedImage]);
		
		  const handleWheel = (e: React.WheelEvent) => {
		  if (!selectedImage) return;
		  
		  // This prevents the page from scrolling while you zoom
		  e.preventDefault(); 
		
		  const delta = e.deltaY > 0 ? -0.2 : 0.2;
		  const newScale = Math.min(Math.max(scale + delta, 1), 4);
		  setScale(newScale);
		};
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/40" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg')] bg-cover bg-center opacity-15" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
            Beyond the Textbook
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A Zine for the Math Olympiad Mind
          </p>
					 <p class="text-sm md:text-base text-gray-300">
            By Perrin Ignatius Y. Go
          </p>
          <div>
          </div>
        </div>

        {/* Decorative mathematical elements */}
        <div className="absolute top-20 left-10 text-purple-300/20 text-6xl hidden lg:block">
          ∫∞
        </div>
        <div className="absolute bottom-20 right-10 text-blue-300/20 text-6xl hidden lg:block">
          ∑π
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Zine Overview */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">ZINE OVERVIEW</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-purple-500/20 shadow-lg shadow-purple-900/10">
            <p className="text-gray-300 leading-relaxed text-lg">
              The zine entitled "Beyond the Textbook: A Zine for the Math Olympiad Mind" is about giving the readers a glimpse
							of what it is like to solve mathematical problems in a more creative manner. It is an introductory zine that introduces some of the ideas
							that are employed when solving math olympiad-style problems, and the main topics covered when joining mathematical olympiads. 
							The zine encourages readers to view mathematics as an art form, which is how I personally like to view mathematics. Mathematics 
							has always been something that piqued my interest when I was young, and as I got older, my curiosity for the subject only grew bigger.
							Therefore, I invite the readers to see a glimpse of what the mathematical world is to me.
            </p>
          </div>
        </section>

        {/* Concept & Inspiration */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <Lightbulb className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">CONCEPT & INSPIRATION</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-blue-500/20 shadow-lg shadow-blue-900/10">
            <p className="text-gray-300 leading-relaxed text-lg">
              Inspired by my personal experiences in math competitions and casual livesolves on online platforms (e.g Discord, Art of Problem Solving, etc.), 
							this zine really reflects on my style of solving olympiad-style problems. I give my thanks to Sal Khan from Khan Academy for teaching me the necessary 
							fundamentals during my early years in high school, as he has helped me build my understanding of fundamental mathematical concepts. However, I won't 
							forget what truly kept my curiosity growing, my math coach and peers in the mathematical olympiad community. 
            </p>
          </div>
        </section>

        {/* Creative Process */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <BrainCircuit className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">CREATIVE PROCESS</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-purple-500/20 shadow-lg shadow-purple-900/10">
            <p className="text-gray-300 leading-relaxed text-lg">
              I drew the zine by hand in order to also give the readers an idea of what my solution paper looks like when solving math (it's a lot
							dirtier than what I wrote in the zine). Honestly, my greatest hurdle was what topic to pick for my example problem, I was originally 
							leaning towards combinatorics (my favorite), but I switched to a number theory style question instead since it might look more
							"mathy" to the readers. The design is quite generic I must say, I really tried to keep it centered on greek letters because
							those are used often in math, but I did sort of want to make it like a "welcome to the arena" kind of thing. Hence, I draw a colesseum 
							to symbolize what I initially feel before taking a mathematical olympiad. As for coloring, I just went with a random color scheme with the available colors
							in my workplace. Lastly, I utilized CamScanner to digitalize my zine, so the colors you see in the PDF or EPUB may not reflect on the
							actual colors I used in the zine (but it's mostly just the cover page thats different).
            </p>
          </div>
        </section>

        {/* Audience & Purpose */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">AUDIENCE & PURPOSE</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-blue-500/20 shadow-lg shadow-blue-900/10">
            <p className="text-gray-300 leading-relaxed text-lg">
              This zine is targetted to high school students (ages 12-18) who are interested in math and are curious about what it is like to solve olympiad-style problems.
							I want them to grow their curiosity in mathematics and also solve in a more creative manner. Mathematics is not about memorizing formulas, 
							but effectively utilizing the tactics you have in store in an artistic way. I want the readers to continue learning about new things because
							the brain is a muscle and you need to keep using it. Lastly, this zine is also for those who find math boring and repetitive, and want to see what
							challenging problems actually look like. It bridges the gap between classroom-level mathematics and competition-style mathematics. 
            </p>
          </div>
        </section>

		{/* Visual Preview */}
		<section className="mb-24">
		  <div className="flex items-center mb-8">
		    <Eye className="w-8 h-8 text-purple-400 mr-3" />
		    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">VISUAL PREVIEW</h2>
		  </div>
		  
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		    {[
		      { src: zine1, alt: "Zine Preview 1", color: "purple" },
		      { src: zine2, alt: "Zine Preview 2", color: "blue" },
		      { src: zine3, alt: "Zine Preview 3", color: "purple" }
		    ].map((image, index) => (
		      <div 
		        key={index}
		        onClick={() => setSelectedImage(image.src)}
		        className={`cursor-zoom-in group bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border ${
		          image.color === 'purple' ? 'border-purple-500/20' : 'border-blue-500/20'
		        } shadow-lg transition-all hover:scale-105 hover:border-purple-500/50 aspect-[4/5] flex items-center justify-center`}
		      >
		        <img
		          src={image.src}
		          alt={image.alt}
		          className="w-full h-full object-cover rounded-xl"
		        />
		      </div>
		    ))}
		  </div>
		</section>

        {/* Download Section */}
        <section className="text-center mb-24">
          <div className="flex items-center justify-center mb-8">
            <Download className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">DOWNLOAD</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-12 border border-purple-500/20 shadow-lg shadow-purple-900/10 max-w-2xl mx-auto">
            <a
              href="https://drive.google.com/drive/folders/1acq_BoYzjgiNKrwfalwK40CItYNdLWYz?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-md hover:shadow-lg hover:shadow-purple-500/20"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Beyond the Textbook: A Zine for the Math Olympiad Mind
              <span className="ml-4 text-sm bg-gradient-to-r from-purple-800 to-blue-800 px-2 py-1 rounded">EPUB & PDF</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            "<em>We cannot solve problems with the same thinking we used when we created them</em>" - Albert Einstein
          </p>
        </div>
      </footer>
{/* Updated Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 overflow-hidden"
          onWheel={handleWheel}
          onClick={() => {
            setSelectedImage(null);
            setScale(1); // Reset scale when closing
          }}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center transition-transform duration-200 ease-out"
            style={{ transform: `scale(${scale})` }}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image
          >
            <button 
              className="fixed top-6 right-6 text-white/70 hover:text-white text-lg flex items-center gap-2 transition-colors z-[110]"
              onClick={() => {
                setSelectedImage(null);
                setScale(1);
              }}
            >
              <span>Close</span>
              <span className="text-2xl">×</span>
            </button>

            <img 
              src={selectedImage} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-none"
              alt="Zoomed Preview"
            />
            
            {/* Zoom Level Indicator */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-xs text-white/50 pointer-events-none">
              Zoom: {Math.round(scale * 100)}% (Use Mouse Wheel)
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
