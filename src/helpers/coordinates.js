import utmObj from "utm-latlng"

export const convertUTM2LngLat = (east, north, zoneNum, zoneLetter) => {
  // Convertir de coordenadas UTM a geográficas (longitud, latitud)
  const utm = new utmObj();
  return utm.convertUtmToLatLng(east, north, zoneNum, zoneLetter)
}