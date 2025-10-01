export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
            <img src="/professional-professor-portrait.png" alt="Professor Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Dr. [Your Name]</h1>
            <p className="text-xl text-muted-foreground">Professor of Computer Science</p>
          </div>
        </div>
        {/* End of added profile picture */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Advancing the frontiers of artificial intelligence and machine learning
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          I am a professor in the Department of Computer Science, specializing in deep learning, natural language
          processing, and computational linguistics.
        </p>
      </div>
    </section>
  )
}
