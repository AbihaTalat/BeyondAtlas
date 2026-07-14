import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
import Trip2 from "../assets/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg"
import Trip3 from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia is a dream destination known for its pristine beaches, volcanic mountains, rich cultural heritage, and breathtaking islands. From relaxing seaside escapes to thrilling adventures, every journey through Indonesia is filled with unforgettable experiences."
                />

                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia is a vibrant destination known for its stunning skyline, diverse culture, tropical islands, and delicious cuisine. Whether you're exploring bustling cities, relaxing on pristine beaches, or discovering lush rainforests, every journey through Malaysia is filled with adventure and unforgettable moments"
                />

                <TripData
                image={Trip3}
                heading="Trip in France"
                text="France is a beautiful destination known for its historic landmarks, picturesque countryside, and vibrant culture. From the Eiffel Tower to the French Riviera, every journey offers a perfect blend of history, art, cuisine, and unforgettable experiences."
                />
            </div>
        </div>
    );
}

export default Trip;