import React, { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'
import { routeSession } from '../redux/fake/runningSession'

const limeOptions = { color: '#76b536' }

function MapView({ pos }) {
  const map = useMap()
  map.setView({ lat: pos[0], lng: pos[1] })
}

export default function Map() {
  const [data, setData] = useState(useSelector(state => state.running))
  const [checkpoint, setCheckpoint] = useState(0)

  useEffect(
    () => {
      const intervalId = setInterval(
        () => {
          const newCheckpoint = checkpoint < routeSession.length - 1 ? checkpoint + 1 : routeSession.length - 1
          setCheckpoint(newCheckpoint)
          const newRoute = [...data.route, routeSession[checkpoint]]
          setData({ ...data, route: newRoute })
          console.log(`${checkpoint} / ${routeSession.length} : ${data.route[checkpoint]}`)

        }, 1000
      )

      return () => clearInterval(intervalId);
    }, [checkpoint]
  )

  // useCallback((e) => console.log(e.latlng))


  return (
    < MapContainer center={data.route[data.route.length - 1]} zoom={100} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline pathOptions={limeOptions} positions={data.route} />
      <Marker position={data.route[data.route.length - 1]}>

      </Marker>
      <MapView pos={data.route[data.route.length - 1]} />
    </MapContainer >
  )
}

