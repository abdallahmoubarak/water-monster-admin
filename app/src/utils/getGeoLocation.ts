export const getGeoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("lat", position.coords.latitude.toString());
      localStorage.setItem("long", position.coords.longitude.toString());
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
