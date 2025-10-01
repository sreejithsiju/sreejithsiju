import { Mail, MapPin, Building } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a
              href="mailto:jsmith@university.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              jsmith@university.edu
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Building className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Office</h3>
            <p className="text-muted-foreground">
              Gates Building, Room 392
              <br />
              Department of Computer Science
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-muted-foreground">
              353 Jane Stanford Way
              <br />
              Stanford, CA 94305
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Interested in joining my research group? I am always looking for motivated Ph.D. students and postdocs. Please
          email me with your CV and research interests.
        </p>
      </div>
    </section>
  )
}
