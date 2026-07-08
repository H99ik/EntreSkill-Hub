import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      
      <Sidebar />

      <main className="ml-72 p-8">
        <TopHeader />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;