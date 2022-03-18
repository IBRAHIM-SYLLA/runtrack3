<?php

require_once("User.php");

$utilisateur = new Utilisateur();

        if(isset($_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['password'], $_POST['confpassword']) &&
        !empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confpassword'])){

                $nom = strip_tags($_POST['nom']);
                $prenom = strip_tags($_POST['prenom']);
                $email = strip_tags(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
                $password = strip_tags($_POST['password']);
                $confpassword = strip_tags($_POST['confpassword']);
                if($password == $confpassword){
                        $recupere = $utilisateur->verif_si_existe_deja($email);

                        $password = password_hash($password, PASSWORD_BCRYPT);

                        if(count($recupere) == 0){

                                $utilisateur->register($nom, $prenom, $email, $password);
                        }
                        else{
                                echo "compte deja existant avec cette email";
                        }
                }
                else{
                        echo "les mdp ne sont pas identique";
                }
        }
        elseif (isset($nom, $prenom, $email, $password) &&
        empty($nom) && empty($prenom) && empty($email) && empty($password)){

            echo "champs vide";
        }





