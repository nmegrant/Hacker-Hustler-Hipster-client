const initialState = {};

export default function homepageDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHED_MY_PAGE_DETAILS":
      return { ...action.payload };
    case "UPDATE_MY_PAGE_DETAILS":
      return { ...state, ...action.payload };
    case "UPDATE_MY_SKILLS":
      const holder = { ...state };
      holder.user.tags = [...holder.user.tags, ...action.payload];
      return holder;
    case "ADD_MY_WEBSITE":
      return { ...state, websites: [...state.websites, ...action.payload] };
    default:
      return state;
  }
}
