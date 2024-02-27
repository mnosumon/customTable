import React, { useState } from 'react'
import './sideBar.css'

const Sidebar = ({handleCategory, handleTitle, handlePrice, handleDate, handleAuthor, handleStatus, handleAction }) => {

  return (
    <section>
      <div className="container">
        <div className="sideBar">
          <h3>Add or remove columns</h3>
          <div className="sideBar_wrapper">
            <ul className='listItems'>
              <li className='bar_item'>
                <input onClick={handleTitle} type="checkbox"/>
                <label>Title</label>
              </li>
              <li className='bar_item'>
                <input onClick={handleCategory} type="checkbox" />
                <label>Categories</label>
              </li>
              <li className='bar_item'>
                <input onClick={handlePrice} type="checkbox"/>
                <label>Price</label>
              </li>
              <li className='bar_item'>
                <input onClick={handleDate} type="checkbox"/>
                <label>Date</label>
              </li>
              <li className='bar_item'>
                <input onClick={handleAuthor} type="checkbox"/>
                <label>Author</label>
              </li>
              <li className='bar_item'>
                <input onClick={handleStatus} type="checkbox"/>
                <label>Status</label>
              </li>
              <li className='bar_item'>
                <input onClick={handleAction} type="checkbox"/>
                <label>Action</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar