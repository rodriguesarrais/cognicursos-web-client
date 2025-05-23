"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Star, Users, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

// Mock course data

const featuredCourses = [
  {
    id: 1,
    title: "Bootcamp Completo de Desenvolvimento Web",
    instructor: "Jane Smith",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    image:
      "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    students: 8432,
    duration: "38h 15m",
    level: "Intermediário",
    category: "JavaScript",
  },
];

// Mock in-progress courses
const inProgressCourses = [
  {
    id: 101,
    title: "Bootcamp Completo de Desenvolvimento Web",
    progress: 65,
    lastWatched: "Introdução ao JavaScript",
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 102,
    title: "React & Redux Avançado",
    progress: 32,
    lastWatched: "Redux Middleware",
    image:
      "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Dashboard = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-emerald-500";
      case "Intermediário":
        return "bg-indigo-500";
      case "Avançado":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Bem vindo {user?.name}!!
          </h1>
          <p className="text-lg text-gray-600">
            Continue sua jornada de aprendizado.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-all">
            <h3 className="text-lg font-semibold mb-1 text-indigo-100">
              Horas de Aprendizado
            </h3>
            <p className="text-3xl font-bold mb-3">42.5h</p>
            <p className="text-indigo-200 text-sm">+2.5h na última semana</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-all">
            <h3 className="text-lg font-semibold mb-1 text-emerald-100">
              Cursos Completados
            </h3>
            <p className="text-3xl font-bold mb-3">7</p>
            <p className="text-emerald-200 text-sm">+1 no último mês</p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-all">
            <h3 className="text-lg font-semibold mb-1 text-amber-100">
              Certificados
            </h3>
            <p className="text-3xl font-bold mb-3">5</p>
            <p className="text-amber-200 text-sm">2 pendentes</p>
          </div>
        </div>

        {/* In Progress Courses */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              Continue Aprendendo
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {inProgressCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-1/3 relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600">
                        Último assistido:{" "}
                        <span className="font-medium">
                          {course.lastWatched}
                        </span>
                      </p>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">
                          Progresso
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            course.progress >= 50
                              ? "text-emerald-600"
                              : "text-indigo-600"
                          }`}
                        >
                          {course.progress}%
                        </span>
                      </div>

                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            course.progress >= 50
                              ? "bg-emerald-500"
                              : "bg-indigo-500"
                          }`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>

                      <Link
                        href="/"
                        // to={`/course/${course.id}/learn`}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                      >
                        Continuar Aprendendo
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Courses */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Cursos em Destaque
              </h2>
            </div>
            <Link
              href="/"
              // to="/courses"
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 transition-colors"
            >
              Ver Todos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] flex flex-col"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 ${getLevelColor(
                      course.level
                    )} text-white text-xs font-medium px-3 py-1 rounded-full`}
                  >
                    {course.level}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.instructor}</p>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm text-gray-700 font-medium">
                        {course.rating}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        {course.students.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  // to={`/course/${course.id}`}
                  className="block p-4 text-center font-medium text-indigo-600 hover:bg-indigo-50 transition-colors border-t border-gray-100"
                >
                  Ver Curso
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
