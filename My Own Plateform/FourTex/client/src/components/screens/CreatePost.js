import React,{useState} from'react'
import {useHistory } from 'react-router-dom'
import M from 'materialize-css'

const CreatePost=()=>{
    const history = useHistory()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postDetails=()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","FourEx")
        data.append("cloud_name","aalsi-codeman")
        fetch("	https://api.cloudinary.com/v1_1/aalsi-codeman/image/upload",{method:"post",body:data})
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,body,pic:url
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#00bfa5 teal accent-4" })
                } else {
                    M.toast({ html: "Posted Successfully", classes: "#26a69a teal lighten-1" })
                    history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return(
        <div className="card input-field"
        style={{
            margin:"10px auto",
            maxWidth:"600px",
            padding:"70px",
            textAlign:"center"
        }}>
            <h2>FourTex</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="Captions" value={body} onChange={(e) => setBody(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn #b39ddb deep-purple lighten-3">
                    <span>Upload</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path-validate" type="text"/>              
                </div>
            </div>
            <button className="btn waves-effect waves-light #b39ddb deep-purple darken-1"onClick={()=>postDetails()}>Post</button>
        </div>
    )
}
export default CreatePost;