import React from 'react';
import About from './Components/About/About';
import { AboutData } from './Data/AboutData';
import Contact from './Components/Contact/Contact';
import { ContactData } from './Data/ContactData';
import Footer from './Components/Footer/Footer';
import { FooterData } from './Data/FooterData';
import Navbar from './Components/Navbar/Navbar';
import Newsletter from './Components/Newletter/Newsletter';
import Plans from './Components/Plans/Plans';
import Products from './Components/Products/Products';
import { ProductsData } from './Data/ProductsData';
import Review from './Components/Review/Review';
import Services from './Components/Service/Services';
import Showcase from './Components/Showcase/Showcase';
import { ShowcaseData } from './Data/ShowcaseData';
import { ReviewData } from './Data/ReviewData';
import Blog from './Components/Blog/Blog';
import { BlogData } from './Data/BlogData';
import { ServicesData } from './Data/ServicesData';

function App() {

  return (
    <>
      <Navbar />
      <Showcase {...ShowcaseData} />
      <About {...AboutData} />
      <Products {...ProductsData} />
      <Newsletter />
      <Services {...ServicesData}/>
      <Plans />
      <Review {...ReviewData} />
      <Contact {...ContactData} />
      <Blog {...BlogData} />
      <Footer {...FooterData} />
    </>
  );
}

export default App;
