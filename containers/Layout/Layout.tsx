"use client";

import { SidebarComponent } from "@/components/ui";
import { Header, SideBar } from "./components";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <SidebarComponent.Provider>
      <SideBar />
      <main>
        <Header />
        <div className="flex flex-col gap-4 p-4">{children}</div>
      </main>
    </SidebarComponent.Provider>
  );
};
