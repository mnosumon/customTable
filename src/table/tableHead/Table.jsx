import React, { useEffect, useState } from 'react'
import './table.css'

const Table = ({bar}) => {

    // useEffect(()=>{
    //     let tableTitle = document.querySelector(".tableTitle")
    //     if(!bar){
    //         tableTitle.style.fontSize = "24px"
    //     }else{
    //         tableTitle.style.fontSize = "20px"
    //     }
    //     console.log(!bar);
    // },[])
    
  return (
    <section>
        <div className="">
            <div className="table">
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Title</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Categories</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Price</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Date</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Author</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Status</h2>
                </div>
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Action</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Table