import Banner from "../banner/Banner"
import Meal from '../Meal'
import Meal1 from '../Meal1'
import Meal3 from'../Meal3'
import Meal4 from '../Meal4'
import '../../components/style.css';
import Bimage from '../../images/food2.jpg'

const Home=()=>{
    return(
        <>
        <Banner/>    
        <section className='menu' id='menu' style={{backgroundImage: `url(${Bimage})`}}>
    <Meal />
</section>
    <section className='menu' id='menu' style={{backgroundImage: `url(${Bimage})`}}>
          <Meal1/>
    </section>  
    <section className='menu' id='menu' style={{backgroundImage: `url(${Bimage})`}}>
          <Meal3/>
    </section>  
    <section className='menu' id='menu' style={{backgroundImage: `url(${Bimage})`}}>
          <Meal4/>
    </section>  
       </>
    )
}
export default Home