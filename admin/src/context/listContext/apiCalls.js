
import axios from "axios";
import { deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./ListActions";


//Get All Movie
export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  try {
    const res = await axios.get("http://localhost:8800/api/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data))
  } catch (error) {
    dispatch(getListsFailure());
  }
};

// //Create Movie

// export const createMovie = async (movie,dispatch) => {
//   dispatch(createMovieStart());

//   try {
//    const res = await axios.post("http://localhost:8800/api/movies/",movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createMovieSuccess(res.data))
//   } catch (error) {
//     dispatch(createMovieFailure());
//   }
// };


//Delete Movie

export const deleteList = async (id,dispatch) => {
  dispatch(deleteListStart());

  try {
    await axios.delete("http://localhost:8800/api/movies/"+id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id))
  } catch (error) {
    dispatch(deleteListFailure());
  }
};


