<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/styles.css" />
    <title>Intro to JavaScript</title>
  </head>

  <body>
    <header>
      <div class="img-wrapper">
        <img src="img/js-logo.png" alt="javascript logo" />
      </div>
      <h1>Introduction to JavaScript</h1>
    </header>
    <main>
      <section>
        <p>
          To open the console press
          <span><code>ctrl + shift + i</code></span> or <code>F12</code> or
          right click anywhere on this page and select
          <i>inspect</i>
        </p>
      </section>
    </main>

    <script>

const view = function (arr) {
    const contactsDiv = doctument. getElementById("contacts");

    for (var item in arr) {
        const img = document.createElement("img");
        const p = document.createElment ("p");

        img.setAttribute('src', arr[item].img)
        img.classList.add('profile-img-wrapper')
        p.innerText = arr[item].firstName + " " + arr[item].lastNmae

        contacts.Div.appendChild(img)
        contacts.Div.appendChild(p)
    }
return contactsDiv;
};

view(contacts)
</script>
</body>
</html>