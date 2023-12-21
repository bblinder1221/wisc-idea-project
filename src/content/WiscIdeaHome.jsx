import React, { memo } from "react"
import { Image } from "react-bootstrap";
function WiscIdeaHome () {
    return <>
        <h1>Welcome to the Wisconsin Idea: Past, Present, Future Website!</h1>
        <Image src="../../figures/wiscideahome.jpg" alt="Wisconsin Idea Home" style={{
            resizeMode: 'auto',
            height: "559px",
            width: "339px",
          }}/>
        <h2>Choose a topic from the sidebar menu to begin!</h2>
    </>
}

export default memo(WiscIdeaHome);