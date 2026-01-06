let x = Number(prompt("Choissez un chiffre a faire devinez"));;

let choix = Number(prompt("devinez le nombre entre 1 et 100"));

while (choix != x){
    if (choix < x){
        alert("trop petit");
    }
    else if (choix > x){
        alert("trop grand");
    }
    choix = Number(prompt("devinez le nombre entre 1 et 100"));
}
alert("bravo vous avez trouvé le nombre");