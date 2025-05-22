"use client";

import PagOff from "@/components/PagOff";
import PagOn from "@/components/PagOn";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { user, isLoading } = useUser();
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  useEffect(() => {
    // Quando o estado de autenticação for carregado, defina a página atual
    if (!isLoading) {
      setCurrentPage(user ? "online" : "offline");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center px-10 py-20">
        <div className="text-gray-500">Carregando...</div>
      </div>
    );
  }

  // Renderize a página apropriada com base no estado de autenticação
  return currentPage === "online" ? <PagOn user={user} /> : <PagOff />;
}
