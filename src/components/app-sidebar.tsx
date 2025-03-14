"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Home, BookOpen, Bookmark, Clock, Award, Settings, HelpCircle, BarChart } from "lucide-react"

export function AppSidebar() {
  const pathname = usePathname()

  const mainMenuItems = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Meus Cursos", icon: BookOpen, href: "/my-courses" },
    { title: "Favoritos", icon: Bookmark, href: "/bookmarks" },
    { title: "Assistir Depois", icon: Clock, href: "/watch-later" },
    { title: "Certificados", icon: Award, href: "/certificates" },
  ]

  const secondaryMenuItems = [
    { title: "Análises", icon: BarChart, href: "/analytics" },
    { title: "Configurações", icon: Settings, href: "/settings" },
    { title: "Ajuda & Suporte", icon: HelpCircle, href: "/help" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">CogniCursos</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Conta</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          <p>© 2025 CogniCursos</p>
          <p>Todos os direitos reservados</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

