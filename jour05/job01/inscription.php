<?php
session_start();
require_once('c_inscription.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type='text/javascript' src='script.js'></script>
    <title>Document</title>
</head>
<body>

<form action="" method="post">
    <label for="nom">Nom</label>
    <input type="text" id="nom" name="nom">
    <p id='nom_p'></p>

    <label for="prenom">prenom</label>
    <input type="text" id="prenom" name="prenom">
    <p id='nom_p'></p>

    <label for="email">email</label>
    <input type="text" id="email" name="email">
    <p id='nom_p'></p>

    <label for="password">password</label>
    <input type="password" id="password" name="password">
    <p id='nom_p'></p>

    <label for="confpassword">Confirmation password</label>
    <input type="password" id="confpassword" name="confpassword">
    <p id='nom_p'></p>

    <button></button>
</form>
</body>
</html>