export const fetchDataFromSWApi = (urlData, options) => {
  return fetch(`https://swapi.dev/api/${urlData}`, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
};