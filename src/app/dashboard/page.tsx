import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Star, Users } from "lucide-react"

// Mock course data
const featuredCourses = [
  {
    id: 1,
    title: "Bootcamp Completo de Desenvolvimento Web",
    instructor: "Jane Smith",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.8,
    students: 12453,
    duration: "42h 30m",
    level: "Iniciante",
    category: "Desenvolvimento Web",
  },
  {
    id: 2,
    title: "React & Redux Avançado",
    instructor: "John Johnson",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.9,
    students: 8765,
    duration: "28h 15m",
    level: "Intermediário",
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Ciência de Dados com Python",
    instructor: "Maria Garcia",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.7,
    students: 9876,
    duration: "36h 45m",
    level: "Intermediário",
    category: "Ciência de Dados",
  },
  {
    id: 4,
    title: "Fundamentos de UI/UX Design",
    instructor: "Alex Chen",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.6,
    students: 7654,
    duration: "24h 20m",
    level: "Iniciante",
    category: "Design",
  },
  {
    id: 5,
    title: "Machine Learning A-Z",
    instructor: "Robert Williams",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.9,
    students: 11234,
    duration: "48h 30m",
    level: "Avançado",
    category: "Machine Learning",
  },
  {
    id: 6,
    title: "Desenvolvimento Full Stack JavaScript",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg?height=180&width=320",
    rating: 4.8,
    students: 8432,
    duration: "38h 15m",
    level: "Intermediário",
    category: "JavaScript",
  },
]

// Mock in-progress courses
const inProgressCourses = [
  {
    id: 101,
    title: "Bootcamp Completo de Desenvolvimento Web",
    progress: 65,
    lastWatched: "Introdução ao JavaScript",
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: 102,
    title: "React & Redux Avançado",
    progress: 32,
    lastWatched: "Redux Middleware",
    image: "/placeholder.svg?height=120&width=200",
  },
]

export default function DashboardPage() {
  return (
    <div className="container px-4 py-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo de volta, Carlos!</h1>
        <p className="text-muted-foreground">Continue aprendendo de onde você parou.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 space-y-4">
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">Último assistido: {course.lastWatched}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div>
                    <Link href={`/course/${course.id}/learn`} className="text-sm text-primary hover:underline">
                      Continuar Aprendendo
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Cursos em Destaque</h2>
          <Link href="/courses" className="text-sm text-primary hover:underline">
            Ver Todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-2 right-2">{course.level}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-sm text-muted-foreground">{course.category}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </CardFooter>
              <Link
                href={`/course/${course.id}`}
                className="mt-auto p-4 pt-2 text-center text-sm font-medium text-primary hover:underline"
              >
                Ver Curso
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

