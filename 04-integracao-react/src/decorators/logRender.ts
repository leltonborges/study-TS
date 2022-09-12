type Componente = {
    new(...args: any[]): {
        render(): any
    }
}

export default function logRender<C extends Componente>(comp: C) {
    return class extends comp {
        render() {
            console.log('Renderizando o componenente...');
            const r: any = super.render();
            console.log('Renderização concluida...');
            return r;
        }
    }
}