import React, {useEffect, useState } from 'react'
// import {Container} from 'react-bootstrap'
import {db} from '../Firebase'
import Post from './Post'
export const Posts=()=> {
    const [allposts, setallposts] = useState([])
    const [Loading,setLoading]=useState(true)
    useEffect(()=>{
        db.collection('Posts').orderBy('CreatedAt').get().then(
            snapshot=>{
                const data=[]
                snapshot.docs.forEach(
                    doc=>{
                        data.push(doc.data())
                    }
                )
                setallposts(data)
                setLoading(false)
            } 
        )
    },[])
    return(
        <div>
        {
        Loading?<h3>Loading Posts...</h3>
        :allposts.map(
                post=>{
                return <Post key={post.Title} post={post} />
                }
        )}
        </div>
    )
    }
export default Posts
