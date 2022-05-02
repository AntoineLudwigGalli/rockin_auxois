<?php

// On recupere l'URL de la page pour ensuite affecter class = "active" aux liens de nav
$page = $_SERVER['REQUEST_URI'];
$page = str_replace("/site_rockin_auxois/", "", $page);
?>

<header class="pt-3 pt-md-0">
    <div class="row">
        <a href="index.php"><img src="images/banniere4.jpeg" alt="banniere rockin'auxois" id="banner" class="col-10
        offset-1
        col-md-8
        offset-md-2 p-0 banner"></a>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark col-8 offset-2">
            <button class="navbar-toggler offset-5" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center text-center"
                 id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link px-3 <?php if($page == "index.php"){echo "active";}?> mx-5" href="index.php"><i
                                class="fa-solid fa-house"></i></a>
                    <a class="nav-link px-3 <?php if($page == "news.php"){echo "active";}?> mx-5" href="news
                    .php">Actualités
                        et sorties</a>
                    <a class="nav-link px-3 <?php if($page == "concerts.php"){echo "active";}?> mx-5" href="concerts
                    .php">Info concerts</a>
                    <a class="nav-link px-3 <?php if($page == "podcasts.php"){echo "active";}?> mx-5" href="podcasts
                    .php">Podcasts</a>
                </div>
            </div>
        </nav>
    </div>
</header>

