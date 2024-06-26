import {AppBar,Toolbar, styled} from '@mui/material'
import {Link} from 'react-router-dom'
import '../../components/style.css';
import Bimage from '../../images/food2.jpg'
const Component =styled(AppBar)`
color: #EEEEEE;
background:#0C0C0C;
`
const Container = styled(Toolbar)`
justify-content:center;

& > a{
    padding:20px;
    font-size:18px;
    color:#EEEEEE;
    text-decoration:none;
    font-weight:bold;}
`
const Header = ()=>{
    return(
       <Component  style={{backgroundImage: `url(${Bimage})`}}>
        <Container>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/login'>LOG OUT</Link>
        </Container>
       </Component>
    )
}
export default Header;