import React, { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Polyline } from 'react-leaflet'
import { routeSession } from '../redux/fake/runningSession'


const TIME = 1

const limeOptions = { color: '#76b536' }

const diff = (last, curr) => {
  const DEGREE_TO_KM = 111.0
  const x = curr[0] - last[0]
  const y = curr[1] - last[1]
  return Math.sqrt(x * x + y * y) * DEGREE_TO_KM
}


function MapView({ pos }) {
  const map = useMap()
  map.setView({ lat: pos[0], lng: pos[1] })
}


export default function Map({ data, setData }) {
  const [route, setRoute] = useState([routeSession[0]])


  useEffect(
    () => {

      const intervalId = setInterval(
        () => {

          const newCheckpoint = data.checkpoint < routeSession.length - 1 ? data.checkpoint + 1 : routeSession.length - 1
          const newDistance = data.distance + diff(route[route.length - 1], routeSession[data.checkpoint])
          const newDuration = data.duration + TIME
          setData({
            checkpoint: newCheckpoint,
            distance: newDistance,
            duration: newDuration,
            pace: newDistance === 0 ? 0 : newDuration / (60 * newDistance),
            burned: 11.5 * newDistance / (newDuration / 3600) * 68 / 200
          })

          setRoute([...route, routeSession[data.checkpoint]])

        }, TIME * 1000
      )
      return () => clearInterval(intervalId);
    }, [data]
  )

  // useCallback((e) => console.log(e.latlng))


  return (
    < MapContainer center={route[route.length - 1]} zoom={100} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline pathOptions={limeOptions} positions={route} />
      <Marker position={route[route.length - 1]}>

      </Marker>
      <MapView pos={route[route.length - 1]} />
    </MapContainer >
  )
}

