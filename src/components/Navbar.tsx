import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

import { useSidebar } from "./ui/sidebar";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { open, toggleSidebar } = useSidebar();

  // Handle the sidebar toggle
  const handleSidebarToggle = () => {
    toggleSidebar();
  };

  return (
    <header className="sticky top-0 z-50 border-b px-4 md:px-6 bg-background">
      <div className="flex h-16 items-center justify-between gap-4 ">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2 ">
          {/* Mobile menu trigger */}

          <div
            className="flex items-center md:hidden mx-3"
            onClick={() => handleSidebarToggle()}
            title="Toggle sidebar"
            aria-label="Toggle sidebar"
          >
            {open ? <Menu /> : <X className="rotate-180" />}
          </div>

          {/* Desktop navigation */}
          <div className="flex items-center gap-6 md:hidden ">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
