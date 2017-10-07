import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserDetail extends Component {
  render() {
    if (!this.props.users) {
      return (
        <h2>Select a user...</h2>
      )
    } else
    return (
      <div>
        <img src={this.props.users.thumbnail} />
        <h2>Name: {this.props.users.name}</h2>
        <h3>Age: {this.props.users.age}</h3>
        <h3>Description: {this.props.users.desc}</h3>
      </div>


    )
  }
}

function mapStateToProps(state) { /*Container glue - what makes it connect to the state.
  Your state data can now be passed in as a prop!*/
  return {
    users: state.activeUser /*This is simply a part of the store being passed in as a prop!
    Don't let the word state confuse you with store - Store is our global state!*/
  }

}
export default connect(mapStateToProps)(UserDetail)
