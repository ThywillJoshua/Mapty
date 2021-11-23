'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Geo Location
//If Geo Location
if (navigator.geolocation) {
  //Set Geolocation
  navigator.geolocation.getCurrentPosition(
    //Success Func
    function (position) {
      //Get latitude and longitude
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(latitude, longitude);

      //Test on Google
      console.log(
        `https://www.google.com/maps/@${41.88167760439392},${12.572400570502998}`
      );
    },

    //Error Func
    function () {
      alert('Could not get your position');
    }
  );
}
