import { Component } from "react";
import Pic1 from "../assets/bailey-zindel-NRQV-hBF10M-unsplash.jpg"
import Pic2 from "../assets/dario-jud-9-fWN3MsWss-unsplash.jpg"
import Pic3 from "../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"
import Pic4 from "../assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg"
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        );
    }
}

export default DestinationData;