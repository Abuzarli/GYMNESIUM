import style from './index.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import {Link} from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const NAVBAR = () => {
  return (
    <div className={style.navbar}>
      <div className={style.nav_head}>
        <p className={style.nav_text} style={{width:'13%'}}>We believe we helps people
           for happier lives</p>
        <img src="https://preview.colorlib.com/theme/gym/img/logo.png" alt="" />
        <div className={style.nav_contact}>
            <p>+880 123 12 658 439 </p>
            <div className={style.phone}><PhoneIcon/></div>
        </div>
      </div>
      <div className={style.nav_main}>
        <Link to='/' className={style.links}>HOME</Link> 
        <Link to='/add-product' className={style.links}>ADD PRODUCT</Link>
        <Link className={style.links}>WE OFFER</Link>
        <Link className={style.links}>TOP COURSE</Link>
        <Link className={style.links}>SCHEDULE</Link>
        <Link className={style.links}>TRAINER</Link>
        <Link className={style.links}>PLAN</Link>
        <Link className={style.links}>PAGES <ExpandMoreIcon/></Link>
      </div>
    </div>
  )
}

export default NAVBAR
