import React from 'react'
import './content.css'

const Content = () => {
  return (
    <section>
      <div className="">
        <div className="content_wrapper">
          <div className="row_1">
              <div className="title">
                <a>awaw er<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <p>Topics: 1</p>
                <p>lession: 1</p>
              </div>
              <div className="category">
                <span>. . .</span>
              </div>
              <div className="price">
                <span>Price 123BDT</span>
              </div>
              <div className="date">
                <span>26 Feb 2024<br/>10:26 AM</span>
              </div>
              <div className="author">
                <span>Admin</span>
              </div>
              <div className="status">
                <select name="status" id="status">
                  <option selected value="">Publish</option>
                </select>
              </div>
              <div className="action">
                <button>Edit</button>
              </div>
          </div>
          <div className="row_1">
              <div className="title">
                <a>teasetr<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
              <div className="category">
                <span>. . .</span>
              </div>
              <div className="price">
                <span>Price 123BDT</span>
              </div>
              <div className="date">
                <span>26 Feb 2024<br/>10:26 AM</span>
              </div>
              <div className="author">
                <span>Admin</span>
              </div>
              <div className="status">
                <select name="status" id="status">
                  <option selected value="">Publish</option>
                </select>
              </div>
              <div className="action">
                <button>Edit</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content