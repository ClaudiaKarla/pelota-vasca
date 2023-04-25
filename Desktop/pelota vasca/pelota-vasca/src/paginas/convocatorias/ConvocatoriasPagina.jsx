import React from 'react'
import './ConvocatoriasPagina.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/Navbar';

function ConvocatoriasPagina() {
  return (
    <div>

<div className='convocatorias'>
    <center><Button variant="light"> <Navbar/></Button>{" "}</center> 
      </div>
  <div className='rec'>
<center><h1 className='convoc'>CONVOCATORIA</h1></center>
<center><h4 className='campeo'>Campeonato Nacional de Trinquete</h4>
</center>
</div>

<div className='descargar'>
<center>
  <a href='./documentos/Convocatoria.pdf'>
    {' '}
     descargar   
  <Button variant="primary">
    Descargar Convocatoria 
  </Button>{' '}
  </a>
  </center>

</div>

<div className='contacto'>
  <center>
    <h1>CONTACTO</h1>
<h2>Teléfono:55 48 00 24 09</h2>
<h2>Whatsapp:55 48 00 24 09</h2>
</center>
</div>

 </div>
  )
}

export default ConvocatoriasPagina