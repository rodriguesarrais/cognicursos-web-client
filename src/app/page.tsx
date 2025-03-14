import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  // In a real app, you would check if the user is authenticated
  // and redirect to the dashboard if they are
  // For demo purposes, we'll just show a landing page

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-primary">CogniCursos</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Aprenda qualquer coisa, a qualquer hora, em qualquer lugar
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg">Explorar Cursos</Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline">
                  Cadastre-se Gratuitamente
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Categorias Populares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Desenvolvimento Web",
                "Ciência de Dados",
                "Negócios",
                "Design",
                "Marketing",
                "Fotografia",
                "Música",
                "Desenvolvimento Pessoal",
              ].map((category) => (
                <div
                  key={category}
                  className="bg-card rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-lg">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 bg-muted/50">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CogniCursos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

