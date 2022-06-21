import React from 'react';
import styled from 'styled-components';

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

  var color = colors[Math.floor(Math.random() * 11 + 1)];

export const Container = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif ;
}
  .container{ 
  background-color: ${color};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
  #quote-box{
  padding: 20px;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin: auto auto;
  width: 30vw;
  min-height: 250px;
  font-size: 16px;
  background-color: #f8f8f8;
  border-radius: 3%;
  box-shadow: 6px 6px rgba(0, 0, 0, 0.1)
}

#text{
  position: relative;
  width: 80%;
  color: ${color};
  font-size: 20px;
  padding: 10px;
}

#author{
  float: right;
  color: ${color};
  padding: 10px;
  font-size: 16px;
}
#new-quote, #tweet-quote {
  background-color: ${color};
  border-radius: 10px;
  color: white;
  padding: 5px;
  text-align: center;
  font-size: 12px;
  margin: 5px;
  width: 100px;
}
button:hover{
  opacity: 0.7;
}
.buttons{
  position: relative;
}
.quote{
  position: relative;
  height: 70%;
}
#pt, #en, #es{
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 0;
  position: relative;
  margin: 2px;
}
#pt{
  margin-left: 20px;
  background-image: url("https://cdn-icons.flaticon.com/png/512/5315/premium/5315340.png?token=exp=1655776207~hmac=60c041725d7175aeff322858c7c226fc");
  background-size: contain;
  background-repeat: no-repeat;
}
#en{
  background-image: url("https://imagepng.org/wp-content/uploads/2018/06/estados-unidos-icone-8.png");
  background-size: contain;
  background-repeat: no-repeat;
}
#es{
  background-image: url("https://cdn.icon-icons.com/icons2/1531/PNG/512/3253482-flag-spain-icon_106784.png");
  background-size: contain;
  background-repeat: no-repeat;
}
`;
