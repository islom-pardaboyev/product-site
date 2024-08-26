import "./App.css";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="bg-primary text-white">
      <Navbar />
      <CustomRoutes />
      <Sidebar />
    </main>
  );
}

export default App;
