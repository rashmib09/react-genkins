import React from 'react'
import smallBox from "../../../Images/small_boxes.jpg"
const centerSection =(props) =>(
    <div>
        <div id="or-command-bar">
            <div className="search" id="command-bar">
                <div className="cmd-bar">
                    <div className="cmd-img pull-left">
                        <img src={smallBox} />
                            <span className="mygss">MY GSS</span>
                        </div>
                        <img className="small_arrow arrow_position" src="/assets/gss_engine/right_arrow-16c033349954d3aed96acd8089ef8f41ffff1ee5b0fcf4caccd8fb7adc816055.jpg" />
                        <div className="cmd-title-section">title</div>
                        {props.children}
                      
                        

                        </div>
                    </div>
                </div>
                </div>
            
            

)

export default centerSection