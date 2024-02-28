import React, { useEffect, useState } from 'react'
import './table.css'

const Table = ({bar, title, category, price, date, author, status, action}) => {

  return (
    <section>
        <div className="">
            <div className="table">
                {
                title && 
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Title</h2>
                </div>
                }
                {
                category &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Categories</h2>
                </div>
                }
                {
                price &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Price</h2>
                </div>
                }
                {
                date &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Date</h2>
                </div>
                }
                {
                    author &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Author</h2>
                </div>
                }
                {
                    status &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Status</h2>
                </div>
                }
                {
                    action &&
                <div className="tableTitle" style={{fontSize: bar ? "20px" : "24px"}}>
                    <h2>Action</h2>
                </div>
                }
            </div>
        </div>
    </section>
  )
}

export default Table