import React from 'react'
import './status.css'

const Status = () => {
  return (
    <section id='title'>
        <div className="title_wrapper">
            <div className="title_heading">
                <h2>Status</h2>
            </div>
            <div className="title_content">
                <select name="status" id="status">
                    <option selected value="">Publish</option>
                </select>
            </div>
            <div className="title_content">
                <select name="status" id="status">
                    <option selected value="">Publish</option>
                </select>
            </div>
        </div>
    </section>
  )
}

export default Status