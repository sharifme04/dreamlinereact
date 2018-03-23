import React, { Component } from 'react';

export default function Datadetails(data) {
 console.log(data.data);
  var url = data.data.ship_teaser_image_filepath;
  var newUrl = url.replace("sites/default", "http://images.dreamlines.de/de");

    return (
      <tr>
         <td >
            <div className="table_inner_left">
              <span>  {data.data.company_title} </span> <span><img src={newUrl} alt="image text" className="img-responsive"/></span>
            </div>
            <div className="table_inner_right"> {data.data.route_title} </div>
         </td>
      </tr>
    );
  }
