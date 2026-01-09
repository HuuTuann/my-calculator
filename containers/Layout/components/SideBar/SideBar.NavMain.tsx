"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import { SidebarComponent } from "@/components/ui";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarComponent.Group>
      <SidebarComponent.GroupLabel>Platform</SidebarComponent.GroupLabel>
      <SidebarComponent.Menu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarComponent.MenuItem>
              <Collapsible.Trigger asChild>
                <SidebarComponent.MenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarComponent.MenuButton>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <SidebarComponent.MenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarComponent.MenuSubItem key={subItem.title}>
                      <SidebarComponent.MenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarComponent.MenuSubButton>
                    </SidebarComponent.MenuSubItem>
                  ))}
                </SidebarComponent.MenuSub>
              </Collapsible.Content>
            </SidebarComponent.MenuItem>
          </Collapsible>
        ))}
      </SidebarComponent.Menu>
    </SidebarComponent.Group>
  );
}
