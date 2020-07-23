import React from 'react';

/*
<label class="label" for="name"> Enter name:</label>
in JSX is
<label className="label" for="name"> Enter name:</label>

class is called className to differentiate between React class component keyword.
It stills allows class as well as some flexibility and may be removed in future.

*/
const JSXDifference2 = () => {
    return(
        <div>
          <label className="label" for="name"> Enter name:</label>
          <input id="name" type="text"/>
          <button style={{backgroundColor:'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

export default JSXDifference2;
