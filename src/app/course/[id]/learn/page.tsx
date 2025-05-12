"use client"

import ReactPlayer from "react-player";
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, MessageSquare, FileText, Download, ThumbsUp } from "lucide-react"
import { AiChat } from "@/components/ai-chat"

// Mock course data
const course = {
  id: 1,
  title: "Complete Web Development Bootcamp",
  sections: [
    {
      id: 1,
      title: "Introduction to Web Development",
      lectures: [
        { id: 101, title: "Welcome to the Course", duration: "5:20", isCompleted: true },
        { id: 102, title: "How the Web Works", duration: "12:45", isCompleted: true },
        { id: 103, title: "Setting Up Your Development Environment", duration: "18:30", isCompleted: false },
        { id: 104, title: "Your First HTML Page", duration: "15:10", isCompleted: false },
        { id: 105, title: "Introduction to Web Browsers", duration: "10:15", isCompleted: false },
      ],
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lectures: [
        { id: 201, title: "HTML Document Structure", duration: "14:20", isCompleted: false },
        { id: 202, title: "HTML Text Elements", duration: "22:15", isCompleted: false },
        { id: 203, title: "HTML Lists", duration: "18:30", isCompleted: false },
        { id: 204, title: "HTML Links", duration: "20:45", isCompleted: false },
        { id: 205, title: "HTML Images", duration: "16:10", isCompleted: false },
        { id: 206, title: "HTML Tables", duration: "25:30", isCompleted: false },
        { id: 207, title: "HTML Forms", duration: "35:15", isCompleted: false },
        { id: 208, title: "HTML5 Semantic Elements", duration: "28:40", isCompleted: false },
      ],
    },
    {
      id: 3,
      title: "CSS Styling",
      lectures: [
        { id: 301, title: "Introduction to CSS", duration: "12:30", isCompleted: false },
        { id: 302, title: "CSS Selectors", duration: "24:15", isCompleted: false },
        { id: 303, title: "CSS Box Model", duration: "18:45", isCompleted: false },
        { id: 304, title: "CSS Layout", duration: "32:20", isCompleted: false },
        { id: 305, title: "CSS Flexbox", duration: "28:10", isCompleted: false },
        { id: 306, title: "CSS Grid", duration: "35:30", isCompleted: false },
        { id: 307, title: "CSS Responsive Design", duration: "40:15", isCompleted: false },
        { id: 308, title: "CSS Animations", duration: "22:40", isCompleted: false },
        { id: 309, title: "CSS Variables", duration: "15:25", isCompleted: false },
        { id: 310, title: "CSS Frameworks Overview", duration: "18:30", isCompleted: false },
      ],
    },
  ],
}

// Current lecture data
const currentLecture = {
  id: 102,
  title: "How the Web Works",
  description:
    "In this lecture, we'll explore the fundamental concepts of how the web works. You'll learn about HTTP, servers, clients, and the request-response cycle.",
  videoUrl: "https://www.youtube.com/watch?v=tuVa27WISyo",
}

export default function CourseLearnPage({ params }: { params: { id: string } }) {
  const [expandedSections, setExpandedSections] = useState<number[]>([1])
  const [activeTab, setActiveTab] = useState("overview")

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b bg-background">
        <div className="container flex h-14 items-center px-4">
          <Link href="/dashboard" className="mr-auto flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Learn</span>
            <span>Hub</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ChevronRight className="mr-1 h-4 w-4" />
              Next Lecture
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with course content */}
        <aside className="hidden md:block w-80 border-r overflow-hidden flex-shrink-0">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="font-semibold">{course.title}</h2>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-4">
                {course.sections.map((section) => (
                  <Collapsible key={section.id} open={expandedSections.includes(section.id)} className="mb-2">
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between font-medium"
                        onClick={() => toggleSection(section.id)}
                      >
                        {section.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedSections.includes(section.id) ? "transform rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-2">
                      {section.lectures.map((lecture) => (
                        <Button
                          key={lecture.id}
                          variant="ghost"
                          className={`w-full justify-start text-sm py-1 h-auto my-1 ${
                            lecture.id === currentLecture.id ? "bg-muted" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 w-full">
                            {lecture.isCompleted ? (
                              <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-3 w-3 text-primary-foreground"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                            )}
                            <span className="truncate flex-1 text-left">{lecture.title}</span>
                            <span className="text-xs text-muted-foreground">{lecture.duration}</span>
                          </div>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </ScrollArea>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Video player youtube - PROVISORIO DELETAR DEPOIS*/}
          <div className="relative bg-black aspect-video w-full max-h-[60vh]">
            <ReactPlayer
              url={currentLecture.videoUrl}
              controls
              width="100%"
              height="100%"
            />
          </div>

          {/* Video player - ESSE É PRA SER USADO */}
          {/*
          <div className="relative bg-black aspect-video w-full max-h-[60vh]">
            <video
              controls
              className="w-full h-full"
              src={currentLecture.videoUrl}
              poster="/placeholder.svg" // Opcional: imagem de pré-visualização
            >
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
          */}
          {/* Lecture content and AI chat */}
          <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
            <div className="flex-1 overflow-auto">
              <div className="p-6">
                <h1 className="text-2xl font-bold">{currentLecture.title}</h1>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p>{currentLecture.description}</p>
                  </TabsContent>
                  <TabsContent value="notes" className="mt-4">
                    <Textarea placeholder="Add your notes here..." className="min-h-[200px]" />
                    <Button className="mt-4">
                      <Download className="mr-2 h-4 w-4" />
                      Save Notes
                    </Button>
                  </TabsContent>
                  <TabsContent value="resources" className="mt-4">
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Lecture Slides.pdf
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Code Examples.zip
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Additional Reading.pdf
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden md:block" />

            {/* AI Chat Assistant */}
            <div className="border-t md:border-t-0 md:w-96 flex flex-col h-[400px] md:h-auto">
              <div className="p-3 border-b bg-muted/50 flex items-center justify-between">
                <h3 className="font-medium flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  AI Learning Assistant
                </h3>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
              </div>

              <AiChat />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

