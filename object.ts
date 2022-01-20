interface Player {
    name: string;
    age: number;
    wife?: string;
    salary: number;
    isPlaying: boolean;
}

interface MegaPlayer extends Player {
    hasChildren: boolean;
}

let Neymar: Player = {
    name: "Neymar",
    age: 35,
    wife: "Some name",
    salary: 4500000,
    isPlaying: true
};

let Ronaldo: MegaPlayer = {
    name: "Ronaldo",
    age: 30,
    wife: "Some name",
    salary: 6500000,
    isPlaying: true,
    hasChildren: true
}


let Messy: {
    name: string,
    age: number
} = {
    name: "Messy",
    age: 34
};

