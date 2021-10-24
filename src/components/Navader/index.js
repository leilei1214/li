// import React,{Component} from 'react'
// import { NavLink , Link} from 'react-router-dom'
// import './css/style.css';
// export default class Navbar extends Component{
//     state = {
//         hide: "hide"
//     }
//     toggleMenu = () =>{
//         if(this.state.hide ==="hide")
//             this.setState({hide:""})
//         else 
//             this.setState({hide:"hide"})
//     }
//     render() {
//         return(
//             <div className="navbar">
//                     <div className="container">
//                         <i
//                             className="fa fa-bars"
//                             onClick = { this.toggleMenu }
//                         />
//                         <div className={`nav-menu ${ this.state.hide }`}>
//                             <ul>
//                                 <li>
//                                     <NavLink 
//                                         exact to="/"
//                                         onClick = { this.toggleMenu }
//                                     >Home</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink
//                                         to="/about"
//                                         onClick = { this.toggleMenu }
//                                     >About</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink
//                                         to="/blog"
//                                         onClick = { this.toggleMenu }
//                                     >Blog</NavLink>
//                                 </li>
//                                 <li className="menu-login">
//                                     <NavLink
//                                         to="/login"
//                                         onClick = { this.toggleMenu }
//                                     >Login</NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="login">
//                             <Link to="/login">Login</Link>
//                         </div>
//                         <i
//                             className="fa fa-ellipsis-v"
//                         />
//                 </div>
//             </div>
//         )
//     }
// }