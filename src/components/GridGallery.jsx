import React from 'react'
import { Card } from './Card'


export const GridGallery = ({categoria}) => {
     console.log(categoria)
    let arrayFotos = []
  
    return (
       <section >
       
        <h2>{categoria}</h2>
      {
 
        arrayFotos && arrayFotos.map((fotos) => (

            <React.Fragment key={fotos}>
            <Card fotos={fotos}/>
            </React.Fragment>
        ))
      }

       </section>

             
    
  )
}
