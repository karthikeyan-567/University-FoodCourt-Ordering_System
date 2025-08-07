import Menucard from '../components/menucard';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import './home.css';
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <div style={{ display:'flex' , flexWrap: 'wrap',  justifyContent: 'center',gap: '20px', padding: '10px' }}>
       <Menucard name="Dosai" price="Rs250" img  ="https://i.pinimg.com/1200x/ed/39/5a/ed395a2799679158edc7f2cc3520bb69.jpg" /> 
        <Menucard name="Chicken Biryani" price="Rs250"  img="https://i.pinimg.com/1200x/92/48/d2/9248d2de57951839856b5166785d8453.jpg" /> 
         <Menucard name="Paraota" price="Rs250"  img="https://i.pinimg.com/736x/72/ef/4b/72ef4b8ca201637e3aa8979550880f60.jpg" /> 
          <Menucard name="Chicken Gravy" price="Rs250"  img="https://i.pinimg.com/736x/01/de/4b/01de4b545bb768d801350894727e6862.jpg" /> 
           <Menucard name="Chicken Biryani" price="Rs250"  img="https://i.pinimg.com/1200x/5d/fa/3d/5dfa3d14c019dbcf727504a732151dda.jpg" /> 
        <Menucard name="Chicken Biryani" price="Rs250" img="https://i.pinimg.com/736x/80/30/72/8030727314b1b950376d0dc83e249add.jpg" /> 
         <Menucard name="panneer" price="Rs250" img="https://i.pinimg.com/736x/a7/9a/5b/a79a5b8ade6634bb288e8fa0a67f9d32.jpg" />
            <Menucard name="Meals" price="Rs250"  img="https://i.pinimg.com/1200x/f7/41/5f/f7415f93ecdccc842224b4790f541112.jpg" /> 
             <Menucard name="Chicken Biryani" price="Rs250"  img="https://i.pinimg.com/1200x/5d/fa/3d/5dfa3d14c019dbcf727504a732151dda.jpg" /> 
        <Menucard name="Chicken Biryani" price="Rs250" img="https://i.pinimg.com/736x/80/30/72/8030727314b1b950376d0dc83e249add.jpg" /> 
         <Menucard name="panneer" price="Rs250" img="https://i.pinimg.com/736x/a7/9a/5b/a79a5b8ade6634bb288e8fa0a67f9d32.jpg" />
            <Menucard name="Meals" price="Rs250"  img="https://i.pinimg.com/1200x/f7/41/5f/f7415f93ecdccc842224b4790f541112.jpg" /> 
      </div>
    </>
  );
}

export default Home;