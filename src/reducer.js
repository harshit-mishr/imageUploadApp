import { combineReducers } from "redux";
import { actions } from "./action";

const intialData = [
  {
    photo:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
    LikeCount: 20
  },
  {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU",
    LikeCount: 11
  },
  {
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU",
    LikeCount: 22
  },
  {
    photo:
      "https://www.groovypost.com/wp-content/uploads/2022/08/social-media-public-profile-hero.jpg",
    LikeCount: 33
  }
];

export const counterReducer = (state = intialData, action) => {
  console.log(action);
  switch (action.type) {
    case actions.ADDAVALUE:
      return [...state, action.payload];
    case actions.DLTVALUE:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer
});
console.log(intialData, "reducer");
