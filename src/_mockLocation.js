// For testing purposes to mock changing location
// Do not include it in any file in production
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {

    return{
      timestamp: 10000000,
      coords: {
          speed: 0,
          heading: 0,
          accuracy: 5,
          altitudeAccuracy: 5,
          altitude: 5,
          latitude: 43.66765616113466 + increment * tenMetersWithDegrees,
          longitude: -79.34397144863863 + increment * tenMetersWithDegrees
      }
    };

};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
       watchId: Location._getCurrentWatchId(),
       location: getLocation(counter)
    });
    counter++;
}, 1000);