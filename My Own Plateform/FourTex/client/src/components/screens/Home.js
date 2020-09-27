import React from 'react'

const Home=()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Zendaya</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1578998609801-595493cc256f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                    <i class="material-icons" style={{color:"purple"}}>star_border</i>
                    <h6>Title</h6>
                    <p>This is Amazing Post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Zendaya</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1558900243-1e6ef4670dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" />
                </div>
                <div className="card-content">
                    <i class="material-icons" style={{ color: "purple" }}>star_border</i>
                    <h6>Title</h6>
                    <p>This is Amazing Post</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home