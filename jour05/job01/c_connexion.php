<?php
session_start();
require_once('User.php');

$utilisateur = new Utilisateur;

if(isset($_POST['email']) && isset($_POST['password']) && !empty($_POST['email']) && !empty($_POST['password'])){

    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    $recuperer = $utilisateur->connexion($email);
    if(count($recuperer) > 0){
        if(password_verify($password, $recuperer[0]['password'])){
            $_SESSION['utilisateurs'] = $recuperer;
            header('Location: index.php');
        }

    }
    else{
        echo 'utilisateurs inconnu';
        }
}
else if(isset($_POST['email'], $_POST['password']) && empty($_POST['email']) && empty($_POST['password'])){

    echo 'Le champs est vide';
}


?>