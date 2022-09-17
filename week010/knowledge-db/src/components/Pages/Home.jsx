import { Header } from "../header";
import { MainContent } from "../MainContent";
import { Sidebar } from "../Sidebar";

export const Home = () => {
  return (
    <div className="root-container">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
};
