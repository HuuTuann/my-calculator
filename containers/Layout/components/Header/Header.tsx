import { SidebarComponent } from "@/components/ui";

export const Header = () => {
  return (
    <SidebarComponent.Inset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarComponent.Trigger className="-ml-1" />
        </div>
      </header>
    </SidebarComponent.Inset>
  );
};
