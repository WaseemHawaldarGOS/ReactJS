import React from 'react';

const JSXDifference1 = () => {
    return(
        <div>
          <label className="label" for="name"> Enter name:</label>
          <input id="name" type="text"/>
           {/*this is html code
          <button style="background-color:blue; color: white;">Submit</button>

          below is equivalent JSX code*/}
          <button style={{backgroundColor:'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

export default JSXDifference1;
