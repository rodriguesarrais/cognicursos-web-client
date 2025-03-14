import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Star, Users, Play, BookOpen, Award, CheckCircle } from "lucide-react"

// Mock course data
const course = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  description:
    "Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, and more. By the end, you'll be able to build complete web applications.",
  instructor: {
    name: "Jane Smith",
    title: "Senior Web Developer",
    bio: "Jane has over 10 years of experience in web development and has worked with companies like Google and Facebook.",
    image: "/placeholder.svg?height=100&width=100",
  },
  image: "/placeholder.svg?height=400&width=800",
  rating: 4.8,
  reviews: 1245,
  students: 12453,
  duration: "42h 30m",
  level: "Beginner",
  category: "Web Development",
  lastUpdated: "March 2025",
  price: 89.99,
  discountPrice: 19.99,
  sections: [
    {
      title: "Introduction to Web Development",
      lectures: 5,
      duration: "1h 30m",
    },
    {
      title: "HTML Fundamentals",
      lectures: 8,
      duration: "3h 45m",
    },
    {
      title: "CSS Styling",
      lectures: 10,
      duration: "5h 20m",
    },
    {
      title: "JavaScript Basics",
      lectures: 12,
      duration: "7h 15m",
    },
    {
      title: "DOM Manipulation",
      lectures: 8,
      duration: "4h 30m",
    },
    {
      title: "Introduction to React",
      lectures: 15,
      duration: "8h 45m",
    },
    {
      title: "Building a Full Stack Application",
      lectures: 20,
      duration: "11h 25m",
    },
  ],
  whatYouWillLearn: [
    "Build responsive websites using HTML, CSS, and JavaScript",
    "Create dynamic web applications with React",
    "Develop backend services with Node.js and Express",
    "Work with databases like MongoDB",
    "Deploy your applications to the web",
    "Implement authentication and authorization",
    "Build RESTful APIs",
    "Use modern development tools and workflows",
  ],
}

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 py-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="mt-2 text-lg">{course.description}</p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Badge variant="outline">{course.level}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{course.rating}</span>
                <span className="text-muted-foreground">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="text-muted-foreground">Last updated: {course.lastUpdated}</div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={course.instructor.image || "/placeholder.svg"}
                alt={course.instructor.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="curriculum">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum" className="space-y-4 mt-4">
              <h3 className="text-xl font-semibold">Course Content</h3>
              <div className="text-sm text-muted-foreground">
                {course.sections.length} sections •{" "}
                {course.sections.reduce((acc, section) => acc + section.lectures, 0)} lectures • {course.duration} total
                length
              </div>

              <div className="space-y-3">
                {course.sections.map((section, index) => (
                  <Card key={index}>
                    <CardHeader className="py-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-base">{section.title}</CardTitle>
                        <CardDescription className="text-right">
                          {section.lectures} lectures • {section.duration}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="overview" className="space-y-4 mt-4">
              <h3 className="text-xl font-semibold">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="instructor" className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <img
                  src={course.instructor.image || "/placeholder.svg"}
                  alt={course.instructor.name}
                  className="h-20 w-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                  <p className="text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
              <p>{course.instructor.bio}</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader className="pb-2">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${course.discountPrice}</span>
                <span className="text-lg text-muted-foreground line-through">${course.price}</span>
                <span className="text-sm font-medium text-green-600">
                  {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                </span>
              </div>

              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  <Play className="mr-2 h-4 w-4" /> Start Learning
                </Button>
                <Link href={`/course/${course.id}/learn`}>
                  <Button variant="outline" className="w-full" size="lg">
                    Preview Course
                  </Button>
                </Link>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Lectures
                  </span>
                  <span>{course.sections.reduce((acc, section) => acc + section.lectures, 0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Duration
                  </span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> Certificate
                  </span>
                  <span>Yes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

