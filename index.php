<html>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <!-- HTML Meta Tags -->
  <title>Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio</title>
  <meta name="description" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta itemprop="description" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta itemprop="image" content="/assets/images/inexio-thumbnail.jpg">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://inexio.aa-dev.de">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta property="og:title" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta property="og:description" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta property="og:image" itemprop="image" content="/assets/images/inexio-thumbnail.jpg">
  <meta property="og:image:secure_url" content="/assets/images/inexio-thumbnail.jpg">
  <meta property="og:updated_time" content="1440432930" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta name="twitter:description" content="Das Rechenzentrum in 3D | Deutsche Glasfaser Inexio">
  <meta name="twitter:image" content="/assets/images/inexio-thumbnail.jpg">

  <!-- End of Meta Tags -->

  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1.0, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes" />

  <!-- Bootstrap core CSS -->
  <link href="/assets/css/bootstrap.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link rel="stylesheet" href="/assets/css/style.css" />

  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" rel="stylesheet">

  <!-- Font Awesome kit's code here -->
  <script src="https://kit.fontawesome.com/787a363585.js" crossorigin="anonymous"></script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/assets/images/inexio-favicon.png">


</head>
<style>
  .menu {
    background: #00aef7;
    height: 4rem;
  }

  .menu ol {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
  }

  .menu>ol {
    max-width: 1000px;
    padding: 0 2rem;
    display: flex;
  }

  .menu>ol>.menu-item {
    flex: 1;
    padding: 0.75rem 0;
  }

  .menu>ol>.menu-item:after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    bottom: 5px;
    left: calc(50% - 2px);
    background: #FECEAB;
    will-change: transform;
    transform: scale(0);
    transition: transform 0.2s ease;
  }

  .menu>ol>.menu-item:hover:after {
    transform: scale(1);
  }

  .menu-item {
    position: relative;
    line-height: 2.5rem;
    text-align: center;
  }

  .menu-item a {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    color: #FFF;
  }

  .sub-menu .menu-item {
    padding: 0.75rem 0;
    background: #00aef7;
    opacity: 0;
    transform-origin: bottom;
    animation: enter 0.2s ease forwards;
  }

  .sub-menu .menu-item:nth-child(1) {
    animation-duration: 0.2s;
    animation-delay: 0s;
  }

  .sub-menu .menu-item:nth-child(2) {
    animation-duration: 0.3s;
    animation-delay: 0.1s;
  }

  .sub-menu .menu-item:nth-child(3) {
    animation-duration: 0.4s;
    animation-delay: 0.2s;
  }

  .sub-menu .menu-item:hover {
    background: #F8B195;
  }

  .sub-menu .menu-item a {
    padding: 0 0.75rem;
  }

  @media screen and (max-width: 600px) {
    .sub-menu .menu-item {
      background: #C06C84;
    }
  }

  @media screen and (max-width: 600px) {
    .menu {
      position: relative;
    }

    .menu:after {
      content: "";
      position: absolute;
      top: calc(50% - 2px);
      right: 1rem;
      width: 30px;
      height: 4px;
      background: #FFF;
      box-shadow: 0 10px #FFF, 0 -10px #FFF;
    }

    .menu>ol {
      display: none;
      background: #00aef7;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      animation: fade 0.2s ease-out;
    }

    .menu>ol>.menu-item {
      flex: 0;
      opacity: 0;
      animation: enter 0.3s ease-out forwards;
    }

    .menu>ol>.menu-item:nth-child(1) {
      animation-delay: 0s;
    }

    .menu>ol>.menu-item:nth-child(2) {
      animation-delay: 0.1s;
    }

    .menu>ol>.menu-item:nth-child(3) {
      animation-delay: 0.2s;
    }

    .menu>ol>.menu-item:nth-child(4) {
      animation-delay: 0.3s;
    }

    .menu>ol>.menu-item:nth-child(5) {
      animation-delay: 0.4s;
    }

    .menu>ol>.menu-item+.menu-item {
      margin-top: 0.75rem;
    }

    .menu>ol>.menu-item:after {
      left: auto;
      right: 1rem;
      bottom: calc(50% - 2px);
    }

    .menu>ol>.menu-item:hover {
      z-index: 1;
    }

    .menu:hover>ol {
      display: flex;
    }

    .menu:hover:after {
      box-shadow: none;
    }
  }

  .sub-menu {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    display: none;
    z-index: 1;
  }

  .menu-item:hover>.sub-menu {
    display: block;
  }

  @media screen and (max-width: 600px) {
    .sub-menu {
      width: 100vw;
      left: -2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

	 html, body {
		font-size: 16px;
		font-family: sans-serif;
		margin: 0;
		background: #2A363B;
	}



  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: scaleY(0.98) translateY(10px);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }



  /* Sidenav */

  #floating-sidemenu {
    vertical-align: middle;
  }

  #floating-sidemenu a {
    position: absolute;
    right: -130px;
    transition: 0.3s;
    padding: 10px;
    width: 168px;
    text-decoration: none;
    font-size: 12px;
    color: white;
    border-radius: 0px 0px 0px 0px;
    z-index: 9;
    margin-top: 14%;
  }

  .sidenav-icon {
    width: 25px;
    margin-right: 10px;
  }

  .sidenav-font-icon {
    width: 25px;
    margin-right: 16px;
    font-size: 1.8em;
  }

  .car-sidenav-font-icon {
    margin-right: 16px;
    font-size: 1.4em;
    padding-top: 4px;
  }

  #floating-sidemenu a:hover {
    right: 0;
  }

  .sidenav-background {
    background-color: #00aef7;
  }


  #standort {
    top: 193px;
  }

  #standort span {
    position: absolute;
    margin-top: 3px;
  }

  #angebote {
    top: 235px;
  }

  #angebote span {
    position: absolute;
    margin-top: 3px;
  }

  #kontakt {
    top: 278px;
  }

  #kontakt span {
    position: absolute;
    margin-top: 3px;
  }


  /* End of sidenav*/

  /* Pano CSS */
  .embed-containerframe {
    overflow: hidden;
    position: relative;
    height: calc(100vh - 62px);
    max-width: 100%;
    top: 0px;
  }

  .embed-containerframe iframe,
  .embed-containerframe object,
  .embed-containerframe embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  /* Datum: 14.05.2020
 * Author: Arash Dadkhah
 */

  html {
    overflow-x: hidden !important;
  }

  body {
    overflow-x: hidden !important;
  }



  /* Footer */
  .footer {
    background-color: #5a5a5a;
    padding: 15px;
    position: absolute;
    z-index: 90;
    width: 100%;
    color: #dddddd;
    bottom: 0;
    text-align: center;
    font-size: 16px;
  }

  .footer>a {
    color: #dddddd;
  }
</style>

<body>
  <nav class="menu">
    <ol>
      <li class="menu-item"><a href="/showrooms/15022021/#node13,-15.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Eingang</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="/showrooms/15022021/#node12,-220.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Außenbereich</a></li>
        </ol>
      </li>

      <li class="menu-item">
        <a href="/showrooms/15022021/#node2,-5.0,0.0,60.0,4" target="pano-embed-content" rel="noopener noreferrer">Referenzen</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="/showrooms/15022021/#node2,35.0,1.0,50.0,4" target="pano-embed-content" rel="noopener noreferrer">FC Schalke 04 über die Vorteile der Glasfaser-Anbindung</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node2,-30.0,5.0,50.0,4" target="pano-embed-content" rel="noopener noreferrer">So profitiert Arnold & Hanl Umzugslogistik von Deutsche Glasfaser</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node2,-10.0,1.0,50.0,4" target="pano-embed-content" rel="noopener noreferrer">Vorteile der Glasfaser für den Kreis Borken</a></li>
        </ol>
      </li>
      <li class="menu-item">
        <a href="/showrooms/15022021/#node3,180.0,0.0,50.0,4" target="pano-embed-content" rel="noopener noreferrer">Flur</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="/showrooms/15022021/#node15,0.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Raum 1</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node14,-400.0,-15.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Stromversogung</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node11,-220.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Löschanlage</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node18,-180.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Raum 4</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node19,-180.0,-10.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Raum 5</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node5,10.0,10.0,50.0,4" target="pano-embed-content" rel="noopener noreferrer">Halle</a></li>
        </ol>
      </li>
      <li class="menu-item">
        <a href="/showrooms/15022021/#node6,-50.0,0.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Serverräume</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="/showrooms/15022021/#node6,-50.0,0.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Serverraum B1</a></li>
          <li class="menu-item"><a href="/showrooms/15022021/#node8,-50.0,0.0,70.0,4" target="pano-embed-content" rel="noopener noreferrer">Serverraum B2</a></li>
        </ol>
      </li>
      <li class="menu-item"><a href="https://www.deutsche-glasfaser.de/inexio/" target="_blank">Kontakt</a></li>
    </ol>
  </nav>


  <!-- Floating Sidemenu -->
  <div id="floating-sidemenu" class="sidenav">
    <a href="https://www.google.com/maps/place/German+Fiber+Wholesale+GmbH/@51.8460854,6.8609288,19z/data=!4m13!1m7!3m6!1s0x47b860488e596573:0xfab266a15bba3d13!2sAm+Kuhm+31,+46325+Borken!3b1!8m2!3d51.84602!4d6.86113!3m4!1s0x47b860488c3f7c59:0x4d10a78b33563135!8m2!3d51.8460498!4d6.8608028" id="standort" class="sidenav-background" target="_blank"><i class="fas fa-map-marker-alt sidenav-font-icon" target="_blank"></i><span>Standort</span></a>
    <a href="https://www.deutsche-glasfaser.de/inexio-solutions/" id="angebote" class="sidenav-background"><i class="fas fa-percent sidenav-font-icon" target="_blank"></i><span>Solutions</span></a>
    <a href="https://www.deutsche-glasfaser.de/inexio-professional/service/kontakt/" id="kontakt" class="sidenav-background" target="_blank"><i class="fas fa-comments sidenav-font-icon"></i><span>Kontakt</span></a>
  </div>


  <!-- Showroom Embed -->
  <div id="pannoscont" class="embed-containerframe">
    <embed src="/showrooms/15022021/" width="300" height="150" name="pano-embed-content"></embed>
    <span id="pannoscontrpl"></span>
  </div>

  <!-- Footer -->
  <footer id="footer" class="footer text-light bg-dark text-center py-3">© <?php echo date("Y"); ?>
    <a href="https://www.autoactiva.de" class="text-light" target="_blank">Werbeagentur Autoactiva GmbH</a>
  </footer>

</body>

</html>