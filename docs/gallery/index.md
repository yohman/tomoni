<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 20px;
        }
        .gallery-item {
            text-align: center;
        }
        .gallery-item img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }
        .caption {
            margin-top: 5px;
            font-size: 14px;
        }
        /* Additional style for banner */
        .banner {
            width: 100%;
            height: 300px; /* Adjust height as needed */
            overflow: hidden;
            position: relative;
        }
        .banner img {
            width: 100%;
            height: auto;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .banner img.active {
            opacity: 1;
        }
    </style>
</head>

<body>
<h1>Member Gallery</h1>
    <div class="gallery">
        <div class="gallery-item">
            <a href="akira">
                <img src="../images/akira bw.jpg" alt="akira">
            </a>
            <div class="caption">Akira</div>
        </div>
        <div class="gallery-item">
            <a href="naoki">
                <img src="../images/naoki bw.jpg" alt="naoki">
            </a>
            <div class="caption">Naoki</div>
        </div>
        <div class="gallery-item">
            <a href="mao">
                <img src="../images/mao bw.jpg" alt="mao">
            </a>
            <div class="caption">Mao</div>
        </div>
        <div class="gallery-item">
            <a href="yuki">
                <img src="../images/yuki bw.jpg" alt="yuki">
            </a>
            <div class="caption">Yuki</div>
        </div>
        <div class="gallery-item">
            <a href="ryo">
                <img src="../images/ryo bw.jpg" alt="ryo">
            </a>
            <div class="caption">Ryo</div>
        </div>
        <div class="gallery-item">
            <a href="jo">
                <img src="../images/jo bw.jpg" alt="jo">
            </a>
            <div class="caption">Jo</div>
        </div>
        <div class="gallery-item">
            <a href="riria">
                <img src="../images/riria bw.jpg" alt="riria">
            </a>
            <div class="caption">riria</div>
        </div>
        <div class="gallery-item">
            <a href="saki">
                <img src="../images/saki bw.jpg" alt="saki">
            </a>
            <div class="caption">saki</div>
        </div>
        <div class="gallery-item">
            <a href="mifuyu">
                <img src="../images/mifuyu bw.jpg" alt="mifuyu">
            </a>
            <div class="caption">mifuyu</div>
        </div>
    <script>
        // JavaScript for rotating banner
        var index = 0;
        var banners = document.querySelectorAll('.banner img');

        setInterval(function () {
            banners[index].classList.remove('active');
            index = (index + 1) % banners.length;
            banners[index].classList.add('active');
        }, 3000); // Change banner every 3 seconds (adjust as needed)
    </script>

    </div>
</body>

</html>
