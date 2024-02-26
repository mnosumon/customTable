import React from 'react'
import './title.css'

const Title = () => {
  return (
    <section id='title'>
        <div className="title_wrapper">
            <div className="title_heading">
                <h2>Title</h2>
            </div>
            <div className="title_content">
                <a>awaw er<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <p>Topics: 1</p>
                <p>lession: 1</p>
            </div>
            <div className="title_content">
                <a>teasetr<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Title