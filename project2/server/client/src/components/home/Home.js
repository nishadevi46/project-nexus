import Banner from "../banner/Banner"
import Meal from '../Meal'
import '../../components/style.css';
const Home=()=>{
    return(
        <>
        <Banner/>    
    <section className='menu' id='menu'>
          <Meal/>
    </section>  
       </>
    )
}
export default Home