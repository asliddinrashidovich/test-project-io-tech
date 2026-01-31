import Footer from "@/components/footer";
import Clients from "@/components/home/clients";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Team from "@/components/home/team";

function HomePage() {
  return (
    <div>
      <Team />
      <Clients />
      <div className="w-full h-6.25 bg-white"></div>
    </div>
  );
}

export default HomePage;
