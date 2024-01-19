/* 


import axios from 'axios';

const apikey = '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e';
const apiHost = 'deezerdevs-deezer.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
  headers: {
    'X-RapidAPI-Key': {apikey},
    'X-RapidAPI-Host': {apiHost}
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */