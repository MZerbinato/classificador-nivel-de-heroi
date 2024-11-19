
let herois = [
    {nome: "Crash", xp: 980},
    {nome: "Mario", xp: 1860},
    {nome: "Legolas", xp: 4750},
    {nome: "Ellie Williams", xp: 6420},
    {nome: "Arthur Morgan", xp: 7610},
    {nome: "Nathan Drake", xp: 8200},
    {nome: "Link", xp: 9670},
    {nome: "Kratos", xp: 15000}
];


function classificarHeroi(heroi) {
    let nivel = "";

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}

for (let i = 0; i < herois.length; i++) {
    classificarHeroi(herois[i]);
}
