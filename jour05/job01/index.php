<!-- Commencez par créer une base de données “utilisateurs” contenant une
table “utilisateurs” et ayant comme champs “id”, “nom”, “prenom”, “email” et
password.
Ensuite, créez une page d’accueil qui contient un paragraphe “Bonjour
$prenom” si l’utilisateur est connecté, sinon deux liens vers une page
“inscription.php” et une page “connexion.php”. Ces deux pages permettent
aux utilisateurs de créer un compte et de se connecter. L’ensemble des
vérifications habituelles doivent se faire sans rafraîchissement de la page.
(Prénom/Nom renseignés, mots de passe identiques et suffisamment
complexes, adresse email déjà prise, au bon format...) Un message lié à
chaque erreur doit être affiché en dessous du formulaire le cas échéant.
Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de
connexion. Lorsqu’il se connecte, il est renvoyé vers la page d’accueil. -->
<?php
session_start();
var_dump($_SESSION);

if(isset($_POST['deconnexion'])){
    session_destroy();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>acceuil</title>
</head>
<body>
    <p>Bonjour <?=$_SESSION['utilisateurs'][0]['nom']?></p>
    <a href="inscription.php">inscription</a>
    <a href="connexion.php">connexion</a>
    <form action="" method="post">
        <input type="submit" value="deconnexion" name="deconnexion">
    </form>
</body>
</html>
