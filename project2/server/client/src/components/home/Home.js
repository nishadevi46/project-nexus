import Banner from "../banner/Banner"
import Meal from '../Meal'
import Meal1 from '../Meal1'
import Meal3 from'../Meal3'
import Meal4 from '../Meal4'
import '../../components/style.css';
const Home=()=>{
    return(
        <>
        <Banner/>    
    <section className='menu' id='menu'>
          <Meal/>
    </section>  
    <section className='menu' id='menu'>
          <Meal1/>
    </section>  
    <section className='menu' id='menu'>
          <Meal3/>
    </section>  
    <section className='menu' id='menu'>
          <Meal4/>
    </section>  
       </>
    )
}
export default Home