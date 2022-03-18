<?php

class Utilisateur {

    //propriétés


    //constructeurs
    public function __construct(){
        $bdd = new PDO("mysql:host=localhost;dbname=utilisateurs",'root','');
        $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
        $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $this->bdd = $bdd;
        return $bdd;
    }


    //méthodes

    //enregistrer utilisateur
    public function register($nom, $prenom, $email, $password)
    {

        $requete = $this->bdd->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)");
        $requete->bindValue(":nom",$nom,PDO::PARAM_STR);
        $requete->bindValue(":prenom",$prenom, PDO::PARAM_STR);
        $requete->bindValue(":email",$email, PDO::PARAM_STR);
        $requete->bindValue(":password", $password, PDO::PARAM_STR);
        $requete->execute();
    }

    public function verif_si_existe_deja($email){
        $selection = "SELECT email FROM utilisateurs WHERE email = :email";
        $result = $this->bdd->prepare($selection);
        $result->bindValue(":email", $email, PDO::PARAM_STR);
        $result->execute();
        $recupere = $result->fetchAll();
        return $recupere;
    }
    //connecter utilisateur
    public function connexion($email){

        $requete2 = $this->bdd->prepare("SELECT * FROM utilisateurs WHERE email = :email");
        $requete2->bindValue(":email", $email, PDO::PARAM_STR);
        $requete2 ->execute();
        $recuperer = $requete2->fetchAll();
        return $recuperer;
    }
}

