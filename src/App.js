import React,{Component} from 'react'

import Utama from './components/utama'
import {Link} from 'react-router-dom'
import  { Navbar } from "react-bootstrap";
import  { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
  return (
    <div >



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >  <Link to='/'>beranda</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      <Nav.Link><Link to='/Kontak'>Kontak</Link></Nav.Link>
      <Nav.Link><Link to='/TentangSaya'>Tentang</Link></Nav.Link>
      <Nav.Link> <Link to='/Karya'>Karya</Link></Nav.Link>
      <Nav.Link> <Link to='/gallery'>Galery</Link></Nav.Link>
      <Nav.Link> <Link to='/lingkung'>Hari</Link></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    <Utama />


    </div>
  );
}}

export default App;
