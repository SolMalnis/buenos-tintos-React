import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import {useState, useEffect} from 'react'

export default function TotalUsers() {
    const[users, setUsers] = useState([])
    useEffect(()=>{console.log('se monto el componente')
    fetch('http://localhost:5050/api/users')
    .then(respuesta =>{return respuesta.json()})
    .then(data=>{
        setUsers(data)
    })
    .catch(error=>{console.log(error)})   
},[])
useEffect(()=>{
    console.log('se actualizo el componente')
},[users])  

useEffect(()=>{
    return ()=> console.log('se desmonto el componente')
},[])
  return <div>
     <ContentRowMovies left= 'card border-left-success shadow h-100 py-2' text='text-xs font-weight-bold text-success text-uppercase mb-1' name='Total de Usuarios' number={users.count}  icono='fas fa-award fa-2x text-gray-300'/>
  </div>;
}