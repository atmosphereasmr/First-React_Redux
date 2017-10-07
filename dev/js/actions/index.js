export const selectUser = (users) => {
  console.log("You clicked on: ", users.name)
  return {
    type: "USERS_SELECTED", /*This is the type of action occuring - the user gets selected*/
    payload: users
  }
}
