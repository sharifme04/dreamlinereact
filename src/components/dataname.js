import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datadetails from './datadetails';

const Dataname =({datas})=>{

    return (
      <div>
        <table className="table table-hover">
          <tbody>
            {datas.map(
              data=> <Datadetails data={data} key={data.cruise_nid}/>
            )}
          </tbody>
          </table>
        </div>
    );
  }



export default Dataname ;
