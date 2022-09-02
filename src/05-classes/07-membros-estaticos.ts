class Matematica {
    static areaCirc(raio: number, PI: number = Math.PI): number {
        return PI * Math.pow(raio, 2);
    }
}

console.log(Matematica.areaCirc(4));



