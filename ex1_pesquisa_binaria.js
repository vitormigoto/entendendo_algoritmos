/*
Ex1.: Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binaria. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?
*/
let count = 0;

function pesquisa_binaria(lista, item){
    console.time('- Tempo com a Pesquisa Binaria');
    let baixo = 0;
    let alto = lista.length - 1;

    count = 0;
    while(baixo <= alto){
        count ++;
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];        

        if(chute == item){
            console.timeEnd('- Tempo com a Pesquisa Binaria');
            console.log(`- Número de etapas: ${count}`)
            return meio;
        }else if(chute > item){
            alto = meio - 1;
        }else{
            baixo = meio + 1;            
        }
    }
    console.timeEnd('- Tempo com a Pesquisa Binaria');
    console.log(`- Número de etapas: ${count}`)
    return 'Nao Encontrado na lista';
}

function percorrendo_lista(lista, item){
    console.time('- Tempo Percorrendo a Lista');
    count = 0;
    for(let x = 0; x<=lista.length;x++){
        count++
        if(lista[x]==item){
            console.timeEnd('- Tempo Percorrendo a Lista');
            console.log(`- Número de etapas: ${count}`)
            return x;
        }
    }
    console.timeEnd('- Tempo Percorrendo a Lista');
    console.log(`- Número de etapas: ${count}`)
    return 'Nao Encontrado na lista';
}


// const minha_lista = [1,3,5,7,9];
const minha_lista = [
    "Aiden", "Emma", "Noah", "Olivia", "Liam", "Ava", "Ethan", "Sophia", "Mason", "Isabella",
    "Lucas", "Mia", "Oliver", "Charlotte", "Elijah", "Amelia", "Logan", "Harper", "Carter", "Evelyn",
    "Alexander", "Abigail", "Jackson", "Emily", "Michael", "Elizabeth", "Benjamin", "Avery", "James", "Sofia",
    "Sebastian", "Ella", "Jacob", "Madison", "Aiden", "Scarlett", "Owen", "Victoria", "Gabriel", "Aria",
    "Matthew", "Grace", "Connor", "Chloe", "Jayden", "Isabelle", "Luke", "Natalie", "Henry", "Zoe",
    "Andrew", "Leah", "Isaac", "Hazel", "Christopher", "Violet", "Joshua", "Aurora", "Wyatt", "Savannah",
    "David", "Audrey", "Joseph", "Brooklyn", "Samuel", "Bella", "Anthony", "Claire", "Dominic", "Skylar",
    "Dylan", "Lucy", "Nathan", "Paisley", "Muhammad", "Camila", "Leo", "Anna", "Mateo", "Penelope",
    "Josiah", "Ariana", "Landon", "Ellie", "Adrian", "Stella", "Julian", "Nora", "John", "Lily",
    "Hudson", "Addison", "Eli", "Layla", "Hunter", "Naomi", "Levi", "Alice", "Aaron", "Kaylee",
    "Caleb", "Eva", "Ryan", "Riley", "Jack", "Zara", "Nolan", "Cora", "Blake", "Alexis",
    "Easton", "Luna", "Jordan", "Adeline", "Nicholas", "Elena", "Robert", "Aubrey", "Angel", "Lila",
    "Ian", "Harley", "Austin", "Gabriella", "Adam", "Mila", "Elias", "Peyton", "Jace", "Julia",
    "Grayson", "Kylie", "Colton", "Maya", "Jaxson", "Kaitlyn", "George", "Ivy", "Declan", "Serenity",
    "Gavin", "Piper", "Miguel", "Sophie", "Ezekiel", "Arianna", "Carson", "Sadie", "Asher", "Lydia"
];
minha_lista.sort();
console.log(`Minha lista é: ${minha_lista} \n`);


console.log("===== Com pesquisa binaria =====");
console.log("Procurando posição do registro Lydia: ");
console.log("- Posicao na Lista: ",pesquisa_binaria(minha_lista, "Lydia"),"\n");
console.log("Procurando posição do registro Vitor: ");
console.log("- Posicao na Lista: ",pesquisa_binaria(minha_lista, "Vitor"),"\n");


console.log("\n===== Percorrendo a lista =====");
console.log("Procurando posição do registro Lydia: ");
console.log("- Posicao na Lista: ",percorrendo_lista(minha_lista, "Lydia"),"\n");
console.log("Procurando posição do registro Vitor: ");
console.log("- Posicao na Lista: ",percorrendo_lista(minha_lista, "Vitor"),"\n");
