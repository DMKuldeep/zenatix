import React from 'react'
import Popup from '../Popup/popup'

function card({data,handleModal,modal, details, handleDetails }) {
    const handleData=(item)=>{
        handleDetails(item)
        handleModal(true)
    }
    
  return (
    <>
     {data.map((dataItem,index)=>(
      <div class="card"  key={index}>
          <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${dataItem.id}.svg`} class="card-img-top" style={{height:"170px"}} alt="#"/>
          <div className="card-body">
            <h5 class="card-title">{dataItem.name}</h5>
             <h6 class="card-title">{dataItem.types[0].type.name}</h6>
             <p class="card-text">{dataItem.id}</p> 
             <a onClick={()=>handleData(dataItem)} href="#" class="btn btn-primary">Details</a> 
            </div>
     </div>
    ))}
    {modal && (
        <Popup handleClose={handleModal} data={details}/>
    )}
    </>
  )
}

export default card;

