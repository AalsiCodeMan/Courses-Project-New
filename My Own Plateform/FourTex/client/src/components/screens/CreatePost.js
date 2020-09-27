import React from'react'
const CreatePost=()=>{
    return(
        <div className="card input-field"
        style={{
            margin:"10px auto",
            maxWidth:"600px",
            padding:"70px",
            textAlign:"center"
        }}>
            <h2>FourTex</h2>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Captions" />
            <div className="file-field input-field">
                <div className="btn #b39ddb deep-purple lighten-3">
                    <span>Upload</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path-validate" type="text"/>              
                </div>
            </div>
            <button className="btn waves-effect waves-light #b39ddb deep-purple darken-1">Post</button>
        </div>
    )
}
export default CreatePost;