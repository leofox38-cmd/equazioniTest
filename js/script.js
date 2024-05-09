var stringa = "sbem";
function Equazione() {
    var a = document.getElementById("valore1").value;
    var b = document.getElementById("valore2").value;
    b = eval(b);
    var c = document.getElementById("valore3").value;
    c = eval(c);

    if (a.toLowerCase() === "sbem") {
        document.getElementById("risultato1").value = 'Ho picchiato mio figlio';
        document.getElementById("risultato2").value = 'Ho picchiato mio figlio';
        return;
    }
    if (a === 0) {
        document.getElementById("risultato1").value = 'Impossibile dividere per zero';
        return;
    }

    var delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById("risultato1").value = 'Nessuna soluzione reale';
        document.getElementById("risultato2").value = 'Nessuna soluzione reale';
    } else {
        var radice = Math.sqrt(delta);
        var ris1 = (-b + radice) / (2 * a);
        var ris2 = (-b - radice) / (2 * a);

        document.getElementById("risultato1").value = ris1;
        document.getElementById("risultato2").value = ris2;
    }
    
    
}
function Reset(){
    document.getElementById("valore1").value = "";
    document.getElementById("valore2").value = "";
    document.getElementById("valore3").value = "";
    document.getElementById("risultato1").value = "";
    document.getElementById("risultato2").value = "";

}