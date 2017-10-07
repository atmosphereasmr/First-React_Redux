export default function (state=null, action) { /*When the app first boots up, state is defaultly at null, waiting for actions*/
  switch(action.type) { /*switch and case is another way to chain if statements together*/
      case "USERS_SELECTED": /*In the case that the type was changed to USERS_SELECTED, aka
      the onClick event fired and a user was indeed selected*/
        return action.payload
        break;
  }
  return state
}
