// action suite - 3 things

// action creators - function that... creates actions! (return action objects out of it)

// action types - variables that contain the action type strings to save us from spelling errors

// actions - objects that describe to the reducer what event has occured and how it should update the state

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";


export const addFeature = item => {
  return { type: ADD_FEATURE, payload: item };
};

export const removeFeature = item => {
  return { type: REMOVE_FEATURE, payload: item };
};

