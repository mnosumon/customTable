import React, { useEffect, useState } from 'react'
import './table.css'
import Title from '../utilities/title/Title'
import Categories from '../utilities/categories/Categories'
import Price from '../utilities/price/Price'
import Date from '../utilities/date/Date'
import Author from '../utilities/author/Author'
import Status from '../utilities/status/Status'
import Action from '../utilities/action/Action'
import Sidebar from '../sideBar/Sidebar'

const Table = () => {
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
  useEffect(()=>{
    let tableWrapper = document.querySelector(".table_wrapper")
    tableWrapper.style.maxWidth = "100%"
  },[])


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
// ======================Smae kaj Line number 44-56=======================
  // 1.. const handleSidebarToggle = () => {
  //   setBar(!bar);
  //    };
  // 2.. let handleSidebarToggle = ()=>{
  //   if (!bar) {
  //     setBar(true)
  //   }else{
  //     setBar(false)
  //   }
  // }
  // 3.. onClick={()=>setBar(!bar)}
// ======================Smae kaj Line number 44-56=======================




  return (
    <section id='table'>
      <div className="container">
        <div className="table">
          <div className="table_head">
            <h1 className='title'>Table title</h1>
            <div onClick={handleBar}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="table_wrapper" style={{maxWidth: bar ? "1050px" : "100%"}}>
            {
              title && <Title/>
            }
            {
              category && <Categories/>
            }
            {
              price && <Price/>
            }
            {
              date && <Date/>
            }
            {
              author && <Author/>
            }
            {
              status && <Status/>
            }
            {
              action && <Action/>
            }
          </div>
            {
              bar && <Sidebar className="sideBar" handleTitle={handleTitle} handleCategory={handleCategory} handlePrice={handlePrice}  handleDate={handleDate} handleAuthor={handleAuthor} handleStatus={handleStatus} handleAction={handleAction}/>
            }
        </div>
      </div>
    </section>
  )
}

export default Table