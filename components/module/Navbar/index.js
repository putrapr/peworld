import NavBeforeLogin from './navBeforeLogin';
import NavAfterLogin from './navAfterLogin';

function Navbar() {
  return (
    <>
     {(localStorage.getItem('token')) ? <NavAfterLogin /> : <NavBeforeLogin /> }
    </>
  )
}

export default Navbar;