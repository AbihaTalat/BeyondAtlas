import Pic1 from "../assets/bailey-zindel-NRQV-hBF10M-unsplash.jpg"
import Pic2 from "../assets/dario-jud-9-fWN3MsWss-unsplash.jpg"
import Pic3 from "../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"
import Pic4 from "../assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg"
import DestinationData from "./DestinatioData"
import "./DestinationStyles.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the oppurtunity to see a lot, within a time frame</p>

            <DestinationData
            heading="Taal Volcano, Batangas"
            text="Taal Volcano, Batangas is one of the Philippines' most iconic natural wonders, renowned for its breathtaking scenery and unique geological setting. Nestled within Taal Lake, this active volcano offers panoramic views, lush landscapes, and an unforgettable experience for nature lovers and adventure seekers alike. Whether you're exploring its surroundings or admiring it from nearby viewpoints, Taal Volcano is a destination that beautifully combines beauty, history, and adventure."
            img1={Pic1}
            img2={Pic2}
            />

            <DestinationData
            heading="Mt. Daguldol, Batangas"
            text="Mt. Daguldol, Batangas is a popular hiking destination known for its scenic forest trails, rolling hills, and rewarding summit views overlooking the coastline. Suitable for both beginners and experienced hikers, the mountain offers a refreshing outdoor adventure surrounded by lush greenery and peaceful natural landscapes. Its combination of hiking and nearby beaches makes it a favorite getaway for nature enthusiasts."
            img1={Pic3}
            img2={Pic4}
            />
        </div>
    );
}

export default Destination;