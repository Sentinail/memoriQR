"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { QrCode, LayoutDashboard, LogOut, PanelsTopLeft } from 'lucide-react'

interface DashboardShellProps {
  children: React.ReactNode
}

export default function DashboardShell({ children }: Readonly<DashboardShellProps>) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar className="border-r border-gray-800">
          <SidebarHeader>
            <Link href="/" className="flex items-center space-x-2 px-6 py-4">
              <QrCode className="h-6 w-6" />
              <span className="text-lg font-bold">MemoriQR</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={cn(pathname === "/dashboard" && "bg-gray-800")}>
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={cn(pathname === "/dashboard/memorials" && "bg-gray-800")}>
                    <Link href="/dashboard/memorials">
                      <PanelsTopLeft className="mr-2 h-4 w-4" />
                      Memorials
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={cn(pathname === "/dashboard/qr-codes" && "bg-gray-800")}>
                    <Link href="/dashboard/qr-codes">
                      <QrCode className="mr-2 h-4 w-4" />
                      QR Codes
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </ScrollArea>
          </SidebarContent>
          <SidebarFooter>
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 overflow-auto">
          <main className="flex-1 overflow-auto p-4 md:p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

