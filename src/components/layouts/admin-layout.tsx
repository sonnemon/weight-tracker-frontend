import { FC, ReactNode } from 'react';
import MenuMobile from '@/components/menu-mobile';
import SidebarDesktop from '@/components/sidebar-desktop';
import { SidebarMobile } from '@/components/sidebar-mobile';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <div>
      <SidebarMobile />
      <SidebarDesktop />
      <MenuMobile />
      <main className="lg:pl-72">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <div>
            <h1 className="text-bold text-2xl py-4">{title}</h1>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
