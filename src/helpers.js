
/**
  * Fetch error helper
  *
  * @param {object} response
**/

export const handlerResponse = (response) => {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json);
  })
}
