import React, { Component } from 'react';

class Footer extends Component {


  state = {
    name: '',
    age: 39,
    isLogin: true,
  }

  componentDidMount() {
    this.setState({ name: 'MyName' })
  }

  changed = e => {

    this.setState({ name: e.target.value })
    console.log(this.state.name);
  }

  render() {
    return (
      <div>


        {this.state.isLogin ? (
          <React.Fragment>
            <h2 onClick={this.props.myAlert}>
              {this.props.trademark}
            </h2>
            <input value={this.state.name}
              onChange={this.changed} type="text" />
          </React.Fragment>
        ) : (<React.Fragment>
          <h2>You can't see this content</h2>
          <h2>Please login to see content</h2>
        </React.Fragment>
        )}
      </div>
    )


  }
}

export default Footer;

