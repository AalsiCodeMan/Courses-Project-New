import React,{useEffect, useState,useContext} from 'react'
import {UserContext} from '../../App'

const Profile=()=>{
    const[mypics,setPics]=useState([])
    const {state,dispatch}=useContext(UserContext)
    console.log(state)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
    },[])
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                        src="data:image/jpeg;base64,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" /> 
                </div>
                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"115%"}}>
                    <h6>5 Posts</h6>
                    <h6>5 Followers</h6>
                    <h6>5 Following</h6>
                    </div>
                </div>
                
            </div>
                        <div className="gallery">
                            {
                                mypics.map(item=>{
                                    return(
                                        <img className="item" src={item.photo} alt={item.title}/>
                                    )
                                })
                            }
                        </div>
        </div>
    )
}

export default Profile