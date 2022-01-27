import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import {useState, useEffect} from 'react'

export default function TotalProducts() {
    const[products, setProducts] = useState([])
    useEffect(()=>{console.log('se monto el componente')
    fetch('http://localhost:5050/api/products')
    .then(respuesta =>{return respuesta.json()})
    .then(data=>{
        setProducts(data)
    })
    .catch(error=>{console.log(error)})   
},[])
useEffect(()=>{
    console.log('se actualizo el componente')
},[products])  

useEffect(()=>{
    return ()=> console.log('se desmonto el componente')
},[])
  return <div>
      <ContentRowMovies left= 'card border-left-primary shadow h-100 py-2' text='text-xs font-weight-bold text-primary text-uppercase mb-1' name='Products in Data Base' number={products.count}  icono='fas fa-film fa-2x text-gray-300'/>
  </div>;
}
