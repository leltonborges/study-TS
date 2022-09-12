function contagemRegreessiva(inicio: number = 3): void{
    while(inicio >  0){
        console.log(inicio);
        inicio--;
    }
    console.log('Fim!!');
}

contagemRegreessiva();
contagemRegreessiva(5);