import { Link } from "react-router-dom";

export default function WiscIdeaTemplate(props) {

    return (
        <div style={{alignItems:"center", display: "flex", flexDirection: "column" }}>
            <h2>TITLE</h2>
            <img src="../../figures/uw-crest-color-web-digital.png"/>
            <video width="750" height="500" controls>
                <source src="../../figures/thugger.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RK65p_-n3z0?si=ta9VsCE5d72Sjtk6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        
            <p>Lets write some text about something. I think it goes smoothly. If i want a new paragraph i create a new line.</p>
            <p> New line created!</p>
        </div>
    );
}
