import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'

class UserList extends Component {

  createListItems() {
    return this.props.users.map((users) => { /*Mapping (looping) through our UserList array and creating a list item for each object (3)*/
      return (
        <li
        key={users.id}
        onClick={() => this.props.selectUser(users)}
        >
        {users.name}
        </li> /*Don't forget to give each new list item a key set to the incrementing ID*/
      )
    })
  }

  render() {
    return(
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state) { /*Container glue - what makes it connect to the state.
  Your state data can now be passed in as a prop!*/
  return {
    users: state.users /*This is simply a part of the store being passed in as a prop!
    Don't let the word state confuse you with store - Store is our global state!*/
  }

}

function mapDispatchToProps(dispatch) { /*Dispatch simply means "Call a function"*/
  return bindActionCreators({selectUser: selectUser}, dispatch) /*Here, we are calling the function selectUser from our actions folder. Viola!*/
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList) /*Notice how we include the two above functions in our export*/
