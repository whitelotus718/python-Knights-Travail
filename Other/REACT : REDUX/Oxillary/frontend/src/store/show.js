// const SET_SHOW = 'show/setShow'

// const setShow = (show) => ({
//     type: SET_SHOW,
//     payload: show
// })

// export const getShow = (showId) => async (dispatch) => {
//     const response = await fetch(`api/show/${showId}`);
//     const data = await response.json();
//     console.log(data)
//     dispatch(setShow(data.show));
//     return response;
// }

// export default function reducer(state = {}, action) {
//     let newState;
//     switch(action.type) {
//         case SET_SHOW:
//             newState = {};
//             action.payload.forEach(show => {
//                 newState[show.id] = {
//                     id: show.id,
//                     artistName: show.artistName
//                 }
//             });
//             return newState;
//         default:
//             return state;
//     }
// };
