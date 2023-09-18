import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header className="p-2 bg-white items-center flex justify-between">
        <div className="container items-center flex justify-between">
          <h3>My App</h3>
          <nav className="flex gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/signup">Sign Up</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mt-10">
        <Outlet />
      </main>
    </div>
  );
};
