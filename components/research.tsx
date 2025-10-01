import { Card } from "@/components/ui/card"

export function Research() {
  const researchAreas = [
    {
      title: "Deep Learning",
      description:
        "Developing novel neural network architectures for improved performance and efficiency in various domains.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Advancing language understanding through transformer models, attention mechanisms, and contextual embeddings.",
    },
    {
      title: "Computer Vision",
      description:
        "Creating robust visual recognition systems using convolutional networks and self-supervised learning.",
    },
    {
      title: "Reinforcement Learning",
      description:
        "Designing intelligent agents that learn optimal decision-making strategies through interaction with environments.",
    },
  ]

  return (
    <section id="research" className="px-6 py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Research Interests</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area) => (
            <Card key={area.title} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
