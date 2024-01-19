export const GET_SONG = 'GET_SONG';

const apikey = '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e';
const apiHost = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

export const getSongAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiHost + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_SONG,
          payload: data,
        });
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
