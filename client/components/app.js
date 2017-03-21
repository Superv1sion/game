import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';

class App extends Component {

    render() {
        return (<h1>App component</h1>);
    }
}

export default App;

// function mapStateToProps(state){
//     return state;
// }
//
// // function mapDispatchToProps(dispatch) {
// //     return bindActionCreators({ findGame, cancelFindGame, answerGame }, dispatch);
// // }
//
// export default connect(mapStateToProps/*, mapDispatchToProps*/)(App);