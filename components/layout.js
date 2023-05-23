import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen border-2">
      {/* <Navbar /> */}
      <div className="flex w-full h-full">
        <main className="flex flex-col items-center justify-center w-full h-full p-4 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
