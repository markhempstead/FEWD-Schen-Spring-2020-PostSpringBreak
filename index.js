// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="css/styles.css" />
//     <title>Intro to JavaScript</title>
//   </head>

//   <body>
//     <header>
//       <div class="img-wrapper">
//         <img src="img/js-logo.png" alt="javascript logo" />
//       </div>
//       <h1>Introduction to JavaScript</h1>
//     </header>
//     <main>
//       <section>
//         <p>
//           To open the console press
//           <span><code>ctrl + shift + i</code></span> or <code>F12</code> or
//           right click anywhere on this page and select
//           <i>inspect</i>
//         </p>
//       </section>
//     </main>

//     <script></script>
//   </body>
// </html> -->


var today = new Date();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var am = 'AM'

// if (minutes < 10 ) {
    minutes = "0" + minutes
}

var time = hours + ":" + minutes + ":" + am;



