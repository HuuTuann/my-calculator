import { SidebarComponent } from "@/components/ui";

type Props = React.ComponentProps<typeof SidebarComponent.Inset>;

export const Header = ({ ...props }: Props) => {
  return (
    <SidebarComponent.Inset {...props}>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarComponent.Trigger className="-ml-1" />
        </div>
      </header>
    </SidebarComponent.Inset>
  );
};
