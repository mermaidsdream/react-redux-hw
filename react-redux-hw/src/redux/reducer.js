import { ADD_POST, EDIT_POST, DELETE_POST } from "./actions";
import { posts } from './states';

export let reducer = (state = posts, action) => {
  let newPosts;
  
  switch (action.type) {
    
    case ADD_POST:
      newPosts = [...state];
      newPosts.push(action.payload);
      return newPosts;
    
      case DELETE_POST:
      newPosts = [...state];
      newPosts = newPosts.filter(post => post.id !== action.payload);
      return newPosts;
    
      case EDIT_POST:
      newPosts = [...state];
      let index = -1;
      for (let i = 0; i < newPosts.length; i++) {
        index++;
        if (newPosts[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newPosts[index] = action.payload;
        return newPosts;
      }
      break;
    
      default:
      return state;
  }
}
