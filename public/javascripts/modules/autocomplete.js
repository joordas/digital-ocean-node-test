function autocomplete(input, latInput, lngInput) {
  if(!input) return; // if there's no input, skip this fn
  const dropdown = new google.maps.places.Autocomplete(input)

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  // prevent 'enter' key on address field from submitting the whole form
  input.on('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  })
};

export default autocomplete;
