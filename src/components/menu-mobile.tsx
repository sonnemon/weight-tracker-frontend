import { useSidebarStore } from '@/stores/sidebar.store';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function MenuMobile() {
  const openSidebar = useSidebarStore((state) => state.open);
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => openSidebar()}
      >
        <span className="sr-only">Open sidebar</span>
        <HamburgerMenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
        Dashboard
      </div>
      <a href="#">
        <span className="sr-only">Your profile</span>
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>
  );
}
