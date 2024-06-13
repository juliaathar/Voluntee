import React, { useEffect, useRef, useState } from 'react'
import { View, ActivityIndicator } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from '../../utils/MapsApiKey';
import { MapContainer } from './Style';

export default function Maps({ latitude, longitude }) {
  const mapReference = useRef(null)

  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })

  async function getInitialPosition() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const findedPosition = await getCurrentPositionAsync();
      setInitialPosition(findedPosition.coords);
    }
  }

  function setMapToViewPosition() {
    if (mapReference.current && initialPosition) {
      mapReference.current.fitToCoordinates(
        [
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, left: 60, right: 60, bottom: 60 },
          animated: true
        }
      )
    }
  }

  useEffect(() => {
    getInitialPosition();

    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
      // }, response => {
      //   setInitialPosition(response.coords);
      //   mapReference?.current.animateCamera({
      //     pitch: 60,
      //     center: response.coords
      //   })
    })
  }, [1000]);

  useEffect(() => {
    setMapToViewPosition();
  }, [initialPosition])

  return (
    <MapContainer>
      {
        initialPosition ? (
          <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
            <MapView
              style={{ width: '100%', flex: 1 }}
              mapType='mutedStandard'
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }}
              provider={PROVIDER_GOOGLE}
              ref={mapReference}
            >
              <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                title='Destino'
                description='Local da campanha'
                pinColor='#0066FF'
              />
            </MapView>
          </View>
        ) : (
          <ActivityIndicator />
        )
      }
    </MapContainer>
  )
}
