import {ReactComponent as GitHubIcon} from 'acets/img/github.svg';
import './style.css';
function Navbar(){
    return (
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>JBmovie</h1>
            <a href="https://github.com/jbviana123/dsmovie"></a>
            <div className="dsmovie-contact-container">
              <GitHubIcon/>
              <p className="dsmovie-contact-link">/devsuperior</p>
            </div>
          </div>
        </nav>
      </header>
    );
    
    
}
export default Navbar;