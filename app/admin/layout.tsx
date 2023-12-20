import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex p-5 ml-3">
      <aside className="bg-slate-200">Admin Navbar</aside>
      {children}
    </div>
  );
};

export default AdminLayout;
