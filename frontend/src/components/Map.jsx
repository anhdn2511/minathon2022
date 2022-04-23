import React from 'react'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function Map() {
  const position = [51.505, -0.09]

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  })

  return (
    <MapContainer center={[51.505, -0.09]} zoom={100} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

