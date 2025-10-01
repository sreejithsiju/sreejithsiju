export function Publications() {
  const publications = [
    {
      title: "Attention Is All You Need: A Comprehensive Survey of Transformer Architectures",
      authors: "Smith, J., Johnson, A., Williams, B.",
      venue: "NeurIPS 2024",
      link: "#",
    },
    {
      title: "Self-Supervised Learning for Natural Language Understanding: Methods and Applications",
      authors: "Smith, J., Davis, C.",
      venue: "ICML 2023",
      link: "#",
    },
    {
      title: "Efficient Neural Networks: Pruning, Quantization, and Knowledge Distillation",
      authors: "Martinez, R., Smith, J., Lee, K.",
      venue: "ICLR 2023",
      link: "#",
    },
    {
      title: "Multimodal Learning: Bridging Vision and Language for Enhanced Understanding",
      authors: "Smith, J., Thompson, E., Garcia, M.",
      venue: "ACL 2022",
      link: "#",
    },
    {
      title: "Robustness in Deep Learning: Adversarial Training and Certified Defenses",
      authors: "Chen, Y., Smith, J.",
      venue: "NeurIPS 2022",
      link: "#",
    },
  ]

  return (
    <section id="publications" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Selected Publications</h2>
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <article key={index} className="border-l-2 border-primary pl-6">
            <h3 className="text-lg font-semibold mb-2 leading-relaxed">
              <a href={pub.link} className="hover:text-primary transition-colors">
                {pub.title}
              </a>
            </h3>
            <p className="text-muted-foreground mb-1">{pub.authors}</p>
            <p className="text-sm text-accent font-medium">{pub.venue}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <a href="#" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
          View all publications →
        </a>
      </div>
    </section>
  )
}
