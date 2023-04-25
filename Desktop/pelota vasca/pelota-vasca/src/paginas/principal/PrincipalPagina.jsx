import React from 'react'
import './PrincipalPagina.css';
import Col from  'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Convocatorias from '../../components/Convocatorias';
import Contacto from '../../components/Contacto';

function PrincipalPagina() {
  return (
    <div> 



      <Col sm={{span: 24}} md={{span:16}} lg={{span:12}}>
   
     <div className='menuDes'>
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" type='button'> <img src={"./menu2.png"}  height= "80"
  width= "auto"/>

      </Dropdown.Toggle>
      <Dropdown.Menu>
  
       <Dropdown.Item> <Convocatorias/> </Dropdown.Item>
        <Dropdown.Item > <Contacto/>  </Dropdown.Item>
     
    
      
     
      </Dropdown.Menu>
    </Dropdown>
    </div>
   

     

      <div className="titulo1">
     <h1 className='com'>COMISIÓN DE MANO FMX</h1>
     </div>
     <div className='patrocinadores'>
     <center><img src={"./fondo4.jpg"} /></center>
     </div>


        <div className='botones'>
        <center><a href='https://torneosfronton.com/sin-categoria/afiliacion-fmx-2023/' >
        <Button variant="success">
        Afiliación
      </Button>
        </a>
        </center>

        <div className='botonDos'>
       <center><Button variant="success">
        Inscripción 
      </Button>
      </center> 
      </div>
        </div>

<center><div className='carrusel'>

        <Carousel slide={false}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./p1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="uno">¡Inscribete ahora!</h3>
        <h4 className="dos">Llena la solicitud dandole click en el botón "Afiliación" </h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./p4.jpeg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className="tres">México vence a España</h3>
        <h4 className="cuatro"> México consigue victoria histórica en Mundial de Pelota Vasca en Francia</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./p5.jpeg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className="cinco">Pelotari Álvarez Murillo</h3>
        <h4 className="seis">
        29 de octubre de 2022
        </h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
  </center>

<div className='cuadro'>
  <center><h1 className='copy'>Copyright © 2023 Torneos Frontón</h1></center>
</div>

     </Col>
    </div>



  )
}

export default PrincipalPagina