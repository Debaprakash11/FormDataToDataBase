import React from 'react'
import {Link, useLocation } from 'react-router-dom';

const Response = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const itemId = params.get('itemId');

  return (
    <div>
      <div class="container h-100 w-auto p-4 ">
      <form class="border bg-light p-5 border rounded-3">
        <div>
          <h3 >Response added Sucessfully</h3>
          <h2>Id Generated to  {itemId} </h2>
          <div class="row h-100  ">
          <div class="col-md-4 m-lg-auto ">
          <Link to="/" class=" form-control btn btn-primary ">click here for more data update</Link>
          </div>
          </div>
        </div>

      
      </form>


      </div>

          
                   
    </div>
  )
}

export default Response