import { Card } from "@/components/ui/card"

export function Teaching() {
  const courses = [
    {
      code: "CS 229",
      title: "Machine Learning",
      semester: "Fall 2024",
      description:
        "Introduction to machine learning algorithms including supervised and unsupervised learning, neural networks, and deep learning.",
    },
    {
      code: "CS 224N",
      title: "Natural Language Processing",
      semester: "Spring 2024",
      description:
        "Advanced topics in NLP including transformers, language models, and applications to text understanding and generation.",
    },
    {
      code: "CS 330",
      title: "Deep Learning",
      semester: "Fall 2024",
      description:
        "Comprehensive study of deep neural networks, optimization techniques, and modern architectures for various applications.",
    },
  ]

  return (
    <section id="teaching" className="px-6 py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Teaching</h2>
        <div className="space-y-6">
          {courses.map((course) => (
            <Card key={course.code} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold">
                  {course.code}: {course.title}
                </h3>
                <span className="text-sm text-muted-foreground">{course.semester}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <h3 className="font-semibold mb-2">Office Hours</h3>
          <p className="text-muted-foreground">
            Tuesdays and Thursdays, 2:00 PM - 4:00 PM
            <br />
            Gates Building, Room 392
          </p>
        </div>
      </div>
    </section>
  )
}
