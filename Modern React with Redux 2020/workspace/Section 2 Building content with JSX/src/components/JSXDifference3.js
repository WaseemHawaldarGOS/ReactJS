import React from 'react';

/*
JSX can reference JS variables
*/

const JSXDifference3 = () => {

    const buttonText = 'Click Me!'
    const buttonText2 = 123456
    const buttonText3 = ['Hi','There']
    const buttonText4 = {text: 'fromText'}

    return(
        <div>
          <label className="label" for="name"> Enter name:</label>
          <input id="name" type="text"/>
          {/*We can buttonText like mentioned below
          <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>*/}

          {/*Or we can call function as mentioned below
          <button style={{backgroundColor:'blue', color: 'white'}}>{buttonTextFunc()}</button>*/}

          {/*Or we can call buttonText2 as mentioned below
          <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText2}</button>*/}

          {/*Or we can call buttonText3 as mentioned below
          <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText3}</button>*/}

          {/*Or we can call buttonText4 as mentioned below*/}
          <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText4.text}</button>
        </div>
    );
};

function buttonTextFunc(){
    return 'Click on Me!'
}

export default JSXDifference3;
