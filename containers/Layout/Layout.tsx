"use client";

import { SidebarComponent } from "@/components/ui";
import { Header, SideBar } from "./components";

export const Layout = () => {
  return (
    <SidebarComponent.Provider>
      <SideBar />
      <Header />
    </SidebarComponent.Provider>
  );
};
