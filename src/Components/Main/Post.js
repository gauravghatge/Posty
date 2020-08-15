import React from 'react'
import {Card} from 'react-bootstrap'

function Post({post}) {
    return (
    <Card className="mb-3" style={{ width: 'auto' }}  bg="dark" text="light">
    <Card.Body>
    <Card.Title style={{fontSize: "30px"}}>{post.Title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{post.CreatedAt}</Card.Subtitle>  
      <Card.Text>
        {post.Post}
      </Card.Text>
      <Card.Text>
        <small className="text-right">-Posted by <cite title="Source Title">{post.Name}</cite></small>
      </Card.Text>
    </Card.Body>

        </Card>
    )
}

export default Post
