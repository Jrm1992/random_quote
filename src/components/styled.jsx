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

  var color = colors[Math.floor(Math.random() * colors.length)];

export const Container = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif ;
}
  .App{ 
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
  width: 500px;
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
  background-image: url("src/img/pt.png");
}
#en{
  background-image: url("src/img/en.png");
}
#es{
  background-image: url("src/img/es.png");
}
`;
