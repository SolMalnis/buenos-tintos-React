import React from 'react';
import GenreList from './GenreList';
import { Component} from 'react'
import {useState, useEffect} from 'react'


function ProductsInDB (){
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
const productos= [products.products]

return(
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
        </div>
        <div className="card-body "> 
                < GenreList lista={['Accion', 'Animacion', 'Aventura', 'Ciencia Ficcion', 'Comedia','Documental','Drama', 'Fantacia','Infantiles','Musical']} />
        </div>
    </div>
    </div>
)
}
   
  

/* class GenresInDb extends Component {
    constructor(){
        super()
        this.state= {
            valor:"",
            genresList:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:5050/api/users')
        .then(respuesta =>{
        return respuesta.json()})
        
        .then(genres =>{
            console.log(genres)
            this.setState({genresList: genres.data})
            
            })
            .catch(error => console.log(error))
        }
    agregarClassName(){
        let div= 
        document.querySelector('div.card-body')
        console.log(div)

        this.setState({
            valor: " bg-secondary"
        })
    }
   
    render(){
        return(
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.agregarClassName()}>Genres in Data Base</h5>
                </div>
                <div className={"card-body "+ this.state.valor}> 
                < GenreList lista={['Accion', 'Animacion', 'Aventura', 'Ciencia Ficcion', 'Comedia','Documental','Drama', 'Fantacia','Infantiles','Musical']} />
                </div>
            </div>
            </div>
          )
    }
  ;
}  */

export default  ProductsInDB 