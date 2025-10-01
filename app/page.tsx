import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Teaching } from "@/components/teaching"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="lg:ml-64">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Teaching />
        <Contact />
      </main>
    </div>
  )
}
