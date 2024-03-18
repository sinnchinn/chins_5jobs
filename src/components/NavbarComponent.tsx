import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (

    <Nav className="flex-column sideBar ">
      <p className='header'>Sinatha's 5 Job Interests</p>

        <Nav.Link as={Link} to='/' className='linkFonts'>PubMark</Nav.Link>

      <div>
        <Nav.Link as={Link} to='/playmedia' className='linkFonts'>3Play Media</Nav.Link>
      </div>

      <div>
        <Nav.Link as={Link} to='/notion' className='linkFonts' href="/home">Notion</Nav.Link>
      </div>

      <div>
        <Nav.Link as={Link} to='/ustwo' className='linkFonts' href="/home">UsTwo</Nav.Link>
      </div>

      <div>
        <Nav.Link as={Link} to='/discord' className='linkFonts' href="/home">Discord</Nav.Link>
      </div>

    </Nav>
  );
}

export default NavbarComponent;