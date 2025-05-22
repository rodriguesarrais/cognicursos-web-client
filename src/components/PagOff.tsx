"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Code,
  Brain,
  Camera,
  Music,
  TrendingUp,
  Palette,
  Users,
  ChevronRight,
  Search,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function PagOff() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    {
      icon: <Code className="h-6 w-6" />,
      name: "Desenvolvimento Web",
      count: "150+ cursos",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      name: "Ciência de Dados",
      count: "80+ cursos",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      name: "Negócios",
      count: "120+ cursos",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      name: "Design",
      count: "90+ cursos",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      name: "Marketing",
      count: "100+ cursos",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      name: "Fotografia",
      count: "70+ cursos",
    },
    {
      icon: <Music className="h-6 w-6" />,
      name: "Música",
      count: "60+ cursos",
    },
    {
      icon: <Users className="h-6 w-6" />,
      name: "Desenvolvimento Pessoal",
      count: "110+ cursos",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Enhanced Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-[1400px] mx-auto">
          {/* Main Navigation */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-12">
                <Image
                  src="/logo.png"
                  alt="CogniCursos"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
                <div className="hidden lg:flex items-center gap-8">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Cursos
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Categorias
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Professores
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    Blog
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div
                  className={`relative ${
                    isSearchFocused ? "w-80" : "w-64"
                  } transition-all duration-300`}
                >
                  <input
                    type="text"
                    placeholder="Buscar cursos..."
                    className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <a href="/auth/login">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    Entrar
                  </Button>
                </a>
                <a href="/auth/login?screen_hint=signup">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
                    Cadastrar
                  </Button>
                </a>
              </div>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-6 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-full"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 py-2"
                >
                  Cursos
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 py-2"
                >
                  Categorias
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 py-2"
                >
                  Professores
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 py-2"
                >
                  Blog
                </a>
                <Link href="/api/auth/login">
                  <Button className="w-full bg-indigo-600 text-white">
                    Cadastrar
                  </Button>
                </Link>
                <Link href="/api/auth/login">
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Resto do código permanece igual */}
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                Mais de 1000 cursos disponíveis
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Aprenda
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  {" "}
                  qualquer coisa
                </span>
                ,
                <br />a qualquer hora
              </h1>
              <p className="text-xl text-gray-600">
                Descubra uma nova forma de aprender com nossos cursos online.
                Comece sua jornada hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg">
                  Começar agora
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-2"
                >
                  Ver cursos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[40px] blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-[40px] p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {categories.slice(0, 4).map((category, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-none bg-gray-50 p-6 rounded-3xl hover:bg-indigo-50 transition-colors group cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {category.count}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* O resto do seu código permanece igual */}
    </div>
  );
}
