let lati = prompt("Enter Latitude:");
let longi = prompt("Enter Longitude:");

const point = { latitude: `${lati}`, longitude: `${longi}` };

const DesiredArea = [
  { latitude: 36.114680, longitude: -115.261004 }, //Your first lat and long
  { latitude: 36.099618, longitude: -115.261098},  //Your second lat and long
  { latitude: 36.099928, longitude: -115.225069 }, //Your third lat and long
  { latitude: 36.114516, longitude: -115.224874},  //Your fourth lat and long
];
alert(geolib.isPointInDesiredArea(point, DesiredArea));//Enter your point to check it lies inside four coordinates or not
