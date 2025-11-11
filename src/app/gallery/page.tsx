export default function Gallery() {
  return (
    <section className="min-h-screen py-32 px-8 bg-gradient-to-b from-black to-purple-950">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-16">
          My Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
              <div className="h-64 bg-gray-700 flex items-center justify-center text-3xl text-purple-400">
                Image {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}