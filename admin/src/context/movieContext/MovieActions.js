export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
  });
  
  export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
  });
  
  export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
  });
  
  
  export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
  });
  
  export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
  });
  
  export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
  });
  
//   export const addPostStart = () => ({
//     type: "ADD_POST_START",
//   });
  
//   export const addPostSuccess = (post) => ({
//     type: "ADD_POST_SUCCESS",
//     payload: post,
//   });
  
//   export const addPostFailure = () => ({
//     type: "ADD_POST_FAILURE",
//   });
  