import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="h-screen p-4">
      <div className="flex items-center w-full justify-center h-full">
        <div className="bg-white w-full md:w-[520px] rounded-md shadow-md shadow-gray p-6">
          <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
