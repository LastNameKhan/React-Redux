import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

type MyProps = {
  numOfCakes: any;
  buyCake: any;
};

type MyState = {};

class CakeContainer extends Component<MyProps, MyState> {
  render() {
    return (
      <div>
        <h2>Number of cakes - {this.props.numOfCakes}</h2>
        <button onClick={this.props.buyCake}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

