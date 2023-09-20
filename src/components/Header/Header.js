import { Link } from 'react-router-dom';
import "./Header.css"
export default function Header(){
    return(
        <div className="Header">
            <nav>
                <ul>
                <li><svg stroke="currentColor"
                 fill="currentColor"
                  stroke-width="0" 
                  viewBox="0 0 512 512" 
                  color="#fff" height="1em" 
                  width="1em" xmlns="http://www.w3.org/2000/svg" 
                  style={{color: 'rgb(255, 255, 255)'}}>
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0
                     93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 
                     9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 
                     70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><Link to="/">Home</Link></li>
                <li><svg stroke="currentColor" 
                fill="currentColor" 
                stroke-width="0" 
                viewBox="0 0 512 512" 
                color="tomato" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
                style={{color: 'tomato'}}>
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg><Link to="/WishList">werwer</Link></li>
                </ul>
            </nav>
        </div>
    )
}