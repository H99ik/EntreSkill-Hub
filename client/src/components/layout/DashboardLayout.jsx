import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="p-4 lg:ml-72 lg:p-8 transition-all duration-300">
        <TopHeader setIsOpen={setIsSidebarOpen} />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
