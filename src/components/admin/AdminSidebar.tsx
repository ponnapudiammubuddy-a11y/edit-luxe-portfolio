import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Briefcase, MessageSquare, Settings, LogOut, Home, Image, Star } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { NavLink } from '@/components/NavLink';

const menuItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Portfolio', url: '/admin/portfolio', icon: Image },
  { title: 'Testimonials', url: '/admin/testimonials', icon: Star },
  { title: 'Services', url: '/admin/services', icon: Briefcase },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-60'} collapsible="icon">
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">VE</span>
          </div>
          {!collapsed && <span className="font-semibold text-foreground">Admin Panel</span>}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink
                      to={item.url}
                      end={item.url === '/admin'}
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" className="hover:bg-muted/50">
                    <Home className="h-4 w-4" />
                    <span>View Site</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleSignOut} className="hover:bg-destructive/10 text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
