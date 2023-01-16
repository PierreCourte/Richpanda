<html>
  <head>
    <title>RichPanda</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="text-center">RichPanda</h1>
      <div class="text-center">
        <button id="start-button" class="btn btn-primary">Démarrer</button>
      </div>
      <div id="result" class="text-center"></div>
    </div>
    <script>
    // Code javascript pour l'exécution de l'extension
    let bankroll = 500; // Bankroll initial
    let base = 121.34; // Base pour calculer la mise initiale
    let augmentation = 1.6180339887; // Coefficient d'augmentation en cas de perte
    let cote = 3.1; // Cote du pari gagnant
    let nbParisPerdusMax = 9; // Nombre de paris perdus maximum avant de perdre tout son capital
    let nbParisPerdus = 0; // Compteur de paris perdus
    let miseInitiale = bankroll / base; // Calcul de la mise initiale

    // Ajout d'un écouteur d'événement au bouton pour déclencher l'exécution du code
    document.getElementById("start-button").addEventListener("click", function() {
        while (nbParisPerdus < nbParisPerdusMax) {
            if (Math.random() > 0.11111111111) { // Simulation d'un pari gagnant avec un taux de réussite de 11,1111111111%
                bankroll += miseInitiale * cote;
                document.getElementById("result").
