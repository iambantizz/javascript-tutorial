// console.log('hello world');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and After pseudo selectors</title>
      <style>
         body{
             margin: 0px;
             padding: 0px;
             background-color: black;
             color: white;
         }
         header::before{
             background: url('https://source.unsplash.com/user/erondu/1600x900') no-repeat center center/cover;
             content: "";
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             z-index: -1;
             opacity: 0.5;
         }
         .navigation{
             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
             font-size: 20px;
             display: flex;
         }
         li{
             list-style: none;
             padding: 20px 23px;
         }
         section{
             font-family: cursive;
             margin: 3px 23px;
             display: flex;
             flex-direction: column;
             align-items: center;
             justify-content: center;
         }
         /* section::before{
             content:"this is a content";
         } */
         h1{
             font-size: 3rem;
         }
         p{
             text-align: center;
         }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact us</li>
              </ul>
          </nav>
      </header>
          <section>
              <h1>Welcome to coding world</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quis! Architecto, quia ex iste labore reiciendis explicabo ad recusandae nulla, tempore eligendi quod! Consectetur dolorum, possimus voluptatum tenetur quae eligendi quod minus beatae unde.</p>
          </section>
          
  </body>
  </html>`)});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});