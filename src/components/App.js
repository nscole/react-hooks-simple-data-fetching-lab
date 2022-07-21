// create your App component here
import React, {useEffect, useState} from "react";
// API https://dog.ceo/api/breeds/image/random

function App(){
    const [dogImage, setDogImage] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r)=>r.json())
        .then((data)=>
            {
            if (data.status === "success"){
                // Show image and hide loading text
                document.getElementById("LoadingText").style.display = "none";
                document.getElementById("DoggoImage").style.display = "block";
            
            // Console log to see if we are getting data
            // console.log(data);
            setDogImage(data);
            }
        })
    }, []);
    return <div><p id="LoadingText">Loading...</p>
    <img id="DoggoImage"  src={dogImage.message} alt="A Random Dog"/>
    </div>;
}

export default App;

