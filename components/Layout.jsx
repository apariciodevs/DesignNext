import style from "../styles/Layout.module.css"

import Nav from "./Nav";

const Layout = ({ children }) => {

    return ( 
        <div className={style.Layout}>
        <Nav></Nav>
        { children }
        </div>
     );
}
 
export default Layout;