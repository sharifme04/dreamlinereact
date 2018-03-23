import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { BrowserRouter , Route } from 'react-router-dom';
import {fetchData} from './components/action/actions';
import './App.css';
import Dataname from './components/dataname';
import Formcomponent from './components/formcomponent';

class App extends Component {

  componentDidMount(){
    this.props.fetchData();
}
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-3">
                 <Formcomponent/>
             </div>
             <div className="col-md-9">
              <Dataname datas={this.props.datalist}/>
              <ul className="pagination">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

App.propTypes={
  datalist:PropTypes.array.isRequired,
  fetchData:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
  datalist:state.datalist
});


export default connect(mapStateToProps,{fetchData})(App);
