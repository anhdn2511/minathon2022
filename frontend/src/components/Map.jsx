import React, { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Polyline } from 'react-leaflet'
import { routeSession } from '../redux/fake/runningSession'
import { useDispatch, useSelector } from 'react-redux'
import { updateState } from '../redux/runningSlice'

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

export default function Map() {
  const [checkpoint, setCheckpoint] = useState(0)
  const dispatch = useDispatch()

  useEffect(
    () => {

      const intervalId = setInterval(
        () => {
          
          const newCheckpoint = checkpoint < routeSession.length - 1 ? checkpoint + 1 : routeSession.length - 1
          setCheckpoint(newCheckpoint)

          // update running state
          dispatch(
            updateState({
              distance: diff(route[route.length - 1], routeSession[checkpoint]),
              duration: TIME,
              route: [...route, routeSession[checkpoint]]
            })
          )
        }, TIME * 1000
      )
      
      
      return () => clearInterval(intervalId);
    }, [checkpoint, route]
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

