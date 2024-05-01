import {styled,  Box} from '@mui/material'
import backgroundImage from '../../../src/images/indian.jpeg'
const Image = styled(Box)`
 background-image:url(${backgroundImage});
 background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
 width:100%;
 height:40vh;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
`


const Banner =()=>{
return (
  <Image>
   
  </Image>
)
}
export default Banner;