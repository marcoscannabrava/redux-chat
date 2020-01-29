// TODO: add and export your own actions

export default function fetchMessages(channel) {
  return fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    });
  // return {
  //   type: 'FETCH_MESSAGES',
  //   payload: 'payload...'
  // };
}