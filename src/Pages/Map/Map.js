import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import LoginMessage from "../LoginMesagge/LoginMessage";
import logoIcon from '../../Assets/Images/markerred.png';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"


const markerIcon = L.icon({
    iconUrl: require('./markerred.png'),
    iconSize: [45, 50],
    className: 'markerred',
})



const BasicMap = () => {

    const islogin = localStorage.getItem('islogin') === 'true';
    console.log(islogin)
    const [center, setCenter] = useState({ lat: 39.948482, lng: 32.811003 }, { lat: 39.90867, lng: 32.856495 }, { lat: 39.9209927, lng: 32.8540176 }, { lat: 39.9679286, lng: 32.8640348 }, { lat: 39.928566, lng: 32.8549158 });
    const ZOOM_LEVEL = 12;
    const mapRef = useRef();

    return (
        <>
            {islogin && (<div className="container">
                <div className="row">
                    <div className="col-md-7 ">
                        <MapContainer className="leaflet-container" center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={"https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"}
                                attribution={'&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                            />
                            console.log(url)
                            <Marker position={[39.948482, 32.811003]} icon={markerIcon} >
                                <Popup>
                                    <b>Atatürk Orman Çiftliği</b>
                                </Popup>
                            </Marker>
                            <Marker position={[39.90867, 32.856495]} icon={markerIcon}>
                                <Popup>
                                    <b>Çankaya</b>
                                </Popup>
                            </Marker>
                            <Marker position={[39.9209927, 32.8540176]} icon={markerIcon}>
                                <Popup>
                                    <b>Kızılay</b>
                                </Popup>
                            </Marker>
                            <Marker position={[39.9679286, 32.8640348]} icon={markerIcon}>
                                <Popup>
                                    <b>Keçiören Şelale</b>
                                </Popup>
                            </Marker>
                            <Marker position={[39.928566, 32.8549158]} icon={markerIcon}>
                                <Popup>
                                    <b>Sıhhiye</b>
                                </Popup>
                            </Marker>
                        </MapContainer >

                    </div>
                    <div className="col-md-1 "></div>
                    <div className="col-md-4 text-center ml-5 mt-5 mapLocation">
                        <h4>Locations</h4>
                        <image src={logoIcon} alt="Logo"></image>
                        <div className="row mt-3">
                            <div className="col-md-4 iconButton" ><FaMapMarkerAlt /></div>
                            <div className="col-8 ">Atatürk Orman Çitfliği</div>
                        </div>
                        <br />
                        <div className="row mt-3 ">
                            <div className="col-md-4 iconButton"> <FaMapMarkerAlt /></div>
                            <div className="col-8  ">Sıhhiye</div>
                        </div>
                        <br />
                        <div className="row mt-3">
                            <div className="col-md-4 iconButton"> <FaMapMarkerAlt /></div>
                            <div className="col-8 ">Kızılay</div>
                        </div>
                        <br />
                        <div className="row mt-3">
                            <div className="col-md-4 iconButton"> <FaMapMarkerAlt /></div>
                            <div className="col-8 ">Çankaya</div>
                        </div>
                        <br />
                        <div className="row mt-3">
                            <div className="col-md-4 iconButton"> <FaMapMarkerAlt /></div>
                            <div className="col-8 ">Keçiören Şelale</div>
                        </div>
                    </div>
                </div>
            </div>)}
            {!islogin && (<LoginMessage />)}
        </>
    );
};

export default BasicMap;