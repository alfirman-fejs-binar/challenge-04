import { createContext, useContext, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import SearchForm from "../SearchForm";

const CarsContext = createContext();

export const useCars = () => useContext(CarsContext);

const Layout = ({ children }) => {
  const [cars, setCars] = useState([]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="search">
          <CarsContext.Provider value={{ cars, setCars }}>
            <SearchForm />
            {children}
          </CarsContext.Provider>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
