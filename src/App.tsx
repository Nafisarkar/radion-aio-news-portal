import { Route, Routes } from "react-router";
import { AppSidebar } from "./components/app-sidebar";
import Navbar from "./components/Navbar";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import Home from "./Pages/Home";
import Tv from "./Pages/Tv";
import Newspaper from "./Pages/Newspaper";

const App = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-screen w-full">
          <Navbar />

          {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/newspaper" element={<Newspaper />} />
          </Routes>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default App;
