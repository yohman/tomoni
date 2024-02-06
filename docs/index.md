---
hide:
  - navigation
  - toc
  - search
  - footer
---

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tomoni</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-size: cover;
            background-position: center;
            transition: background-image 1s ease-in-out;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .title {
            font-size: 3rem;
            color: #ffffff;
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .button {
            position: absolute;
            bottom: 100px;
            right: 100px;
            padding: 15px 30px;
            background-color: black;
            color: #ffffff;
            border: 2px solid white;
            /*border-radius: 5px;*/
            font-size: 2rem;
            cursor: pointer;
            opacity:0.8;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: gray;
        }

        .md-header,
        h1 {
            display: none;
        }
    </style>
</head>

<body id="background" style="background-image: url('images/bg1.jpg');">

    <button class="button" onclick="enterSite()">Enter Tomoni ▶︎</button>

    <script>
        var backgrounds = ['futabayamae.jpg', 'taiheiteam.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg'];

        function enterSite() {
            // Redirect to your main site
            window.location.href = 'gallery';
        }

        // Generate a random index for the initial background image
        var initialIndex = Math.floor(Math.random() * backgrounds.length);
        document.getElementById('background').style.backgroundImage = 'url("images/' + backgrounds[initialIndex] + '")';

        setInterval(function () {
            var index = Math.floor(Math.random() * backgrounds.length);
            document.getElementById('background').style.backgroundImage = 'url("images/' + backgrounds[index] + '")';
        }, 5000); // Change background every 5 seconds (adjust as needed)
    </script>
</body>

</html>
