<?php
require_once('c_connexion.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <label for="email">email</label>
        <input type="text" id="email" name="email">

        <label for="password">password</label>
        <input type="password" id="password" name="password">

        <input type="submit" value="connexion" name="connexion">
    </form>
</body>
</html>