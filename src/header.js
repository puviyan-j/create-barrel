import { Link } from "react-router-dom";
import './css/header.css'

function Header({length}) {

    return (<>
        <div className="main-header">
            <div>
                <input className="input" type="text" placeholder="What can we help you find?"></input>
            </div>
            <h2 className="logo"><Link to='/'>Crate&Barrel</Link></h2>
            <div className="main-header1">
                <div>
                    <p className="order" >Orders<span className="amp">&</span>Sign In</p>
                </div>
                <div className="person" >

                    <span><ion-icon name="person"></ion-icon></span>
                </div>
                <div className="location">
                    <span><i className="fa-solid fa-location-dot"></i></span>
                </div>
                <div className="heart" >
                    <span><ion-icon name="heart"></ion-icon></span><span className="count">0</span>
                </div>
                <div className="cart">
                 <Link to="/c"><span><ion-icon name="cart"></ion-icon></span> <span className="count">{length}</span></Link> 
                </div>
            </div>
        </div>
        <div className="offer-name" >
            <ul className="offer">
                <li>Wedding Registry</li>
                <li>Free Design Services</li>
                <li>Trade Program</li>
                <li>What's New</li>
                <li>Collaborations</li>
                <li>in-stock</li>
                <li>mother's day</li>
            </ul>
            </div>
            <nav className="nav">
                <ul className="nav-ul">
                    <li>Furniture</li>
                    <li>outdoor</li>
                    <li>tabletop & bar</li>
                    <li>Kitchen</li>
                    <li>Bedding & Bath</li>
                    <li>Decor & pillow</li>
                    <li>Rugs</li>
                    <li>lighting</li>
                    <li>window</li>
                    <li>gifts</li>
                    <li>sale</li>
                    <li>&kids</li>
                </ul>
            </nav>
            <div className="main-offer">
                <span className="main-offer-1">fresh markdown</span>
                <span className="main-offer-2">Up to 60% off furniture & more<span></span></span>
            </div>
        </>)
}
export { Header }