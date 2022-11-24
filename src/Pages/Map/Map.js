import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";

const markerIcon = L.icon({
    iconUrl: require('./markerred.png'),
    iconSize: [35, 50],
})



const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 39.948482, lng: 32.811003 });
    const ZOOM_LEVEL = 15;
    const mapRef = useRef();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto text-center">

                        <div className="col ">
                            <MapContainer className="leaflet-container" center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                                <TileLayer
                                    url={"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"}
                                    attribution={'&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                                />
                                console.log(url)
                                <Marker position={[39.948482, 32.811003]} icon={markerIcon}>
                                    <Popup>
                                        <b>Atatürk Orman Çiftliği</b>
                                    </Popup>
                                </Marker>
                            </MapContainer >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;