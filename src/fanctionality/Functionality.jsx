import React, { useEffect, useState } from 'react'
import './functionality.css'
import Table from '../table/tableHead/Table'
import Content from '../table/tableContent/Content'
import Sidebar from '../components/sideBar/Sidebar'

const Functionality = () => {
    let [bar, setBar] = useState(false)
    let [title, setTitle] = useState(true)
    let [category, setCategory] = useState(true)
    let [price, setPrice] = useState(true)
    let [date, setDate] = useState(true)
    let [author, setAuthor] = useState(true)
    let [status, setStatus] = useState(true)
    let [action, setAction] = useState(true)

    let handleBar = ()=>{
      setBar(!bar)
    }

    const handleTitle = () => {
      setTitle(!title);
    }
    const handleCategory = () => {
      setCategory(!category);
    }
    const handlePrice = () => {
      setPrice(!price);
    }
    const handleDate = () => {
      setDate(!date);
    }
    const handleAuthor = () => {
      setAuthor(!author);
    }
    const handleStatus = () => {
      setStatus(!status);
    }
    const handleAction = () => {
      setAction(!action);
    }
  return (
    <section>
        <div className="container">
          <div className="table_header">
            <div className="table_head">
                <h1>Table title</h1>
                <div onClick={handleBar}>
                  <i class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="barPosition">
              {
                bar && <Sidebar handleTitle={handleTitle} handleCategory={handleCategory} handlePrice={handlePrice}  handleDate={handleDate} handleAuthor={handleAuthor} handleStatus={handleStatus} handleAction={handleAction}/>
              }
            </div>
          </div>
          <div className="table_wrapper" style={{maxWidth: bar ? "1050px" : "100%"}}>
            <Table bar={bar} title={title} category={category} price={price} date={date} author={author} status={status} action={action}/>
            <Content  title={title} category={category} price={price} date={date} author={author} status={status} action={action}/>
          </div>
        </div>
    </section>
  )
}

export default Functionality