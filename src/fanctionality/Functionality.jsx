import React, { useEffect, useState } from 'react'
import './functionality.css'
import Table from '../table/tableHead/Table'
import Content from '../table/tableContent/Content'
import Sidebar from '../components/sideBar/Sidebar'

const Functionality = () => {
    let [bar, setBar] = useState(false)
    let handleBar = ()=>{
      setBar(!bar)
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
                bar && <Sidebar/>
              }
            </div>
          </div>
          <div className="table_wrapper" style={{maxWidth: bar ? "1050px" : "100%"}}>
            <Table bar={bar}/>
            <Content/>
          </div>
        </div>
    </section>
  )
}

export default Functionality