import React from 'react';

export default function GenreList(props) {
  return(
  
      <div className="row">
          {props.lista.map((genre, i)=>{
              return (
              <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                  <div className="card-body" key={i}>
                      {genre}
                  
                  </div>
                </div>
            </div>

          )})}
          
        </div> 
       
      
      );
}
