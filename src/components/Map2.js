import React, {useEffect, useRef, Component ,useState } from 'react';
import axios from 'axios';


import loro from './../assets/LOROsmol.png'
import hyatt from './../assets/HYATTsmol.png'
import doubletree from './../assets/DOUBLETREEsmol.png'
import vuka from './../assets/VUKAsmol.png'



const center = { // CN Tower Landmark
    lat: 30.25628390453282,
    lng: -97.75480807175511
};
// styles
const mapStyles = {
    width: '100%',
    height: '60vw',
};

function GoogleMaps(props) { 
	console.log(props)
  	const GOOGLE_MAP_API_KEY= props.woof;
  	console.log(GOOGLE_MAP_API_KEY)

	



    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);

    // helper functions
    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: {
                lat: center.lat,
                lng: center.lng
            }
        });

    const createMarker = () =>
        new window.google.maps.Marker({
            position: {lat: 30.260735265978038, lng: -97.74716377258301},
            map: googleMap.current,
            icon: hyatt
        });
    
    const createMarker2 = () =>
        new window.google.maps.Marker({
            position: {lat: 30.27739580445505, lng: -97.74259328842163 },
            map: googleMap.current,
            icon: doubletree
        });
     
    const createMarker3 = () =>
       new window.google.maps.Marker({
            position: {lat: 30.24886360269225, lng: -97.75441646575928 },
            map: googleMap.current,
            icon: vuka
        });
    
    const createMarker4 = () =>
        new window.google.maps.Marker({
            position: {lat: 30.24779777038891, lng: -97.77128219604492 },
            map: googleMap.current,
            icon: loro
        });

    // useEffect Hook
    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            marker.current = createMarker()
            marker.current = createMarker2()
            marker.current = createMarker3()
            marker.current = createMarker4()
        })
    });

    return (
        <div
            id="google-map"
            ref={googleMapRef}
            style={mapStyles}
        />
    )

}

export default GoogleMaps