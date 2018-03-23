import React, { Component } from 'react';

class Formcomponent extends Component {

  render() {
    return (
      <div className="filer_form">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <select className="form-control" id="sel1">
               <option>Destination</option> //need to do dynamic later
               <option>1</option>
               <option>2</option>
               <option>3</option>
          </select>
         </div>
         <div className="form-group">
         <select className="form-control" id="sel1">
                <option>Company</option> //need to do dynamic later
                <option>2</option>
                <option>3</option>
                <option>4</option>
         </select>
        </div>
        <div className="form-group">
        <select className="form-control" id="sel1">
               <option>Ship</option>//need to do dynamic later
               <option>2</option>
               <option>3</option>
               <option>4</option>
        </select>
       </div>
       <input type="submit" className="form-control btn" value="Filter" />
      </form>
   </div>
    );
  }

}

export default Formcomponent;
