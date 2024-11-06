import '../css/style.css';

async function getData(){

    try{

        const tabela = []

        const response = await fetch('https://p1.trrsf.com/api/musa-soccer/ms-standings-games-light?idChampionship=1420&idPhase=&language=pt-BR&country=BR&nav=N&timezone=BR');

        if (!response.ok) {
            throw new Error('Dados nao encontrados');
        };

        const texto = await response.text()
        const parser = new DOMParser();
        const doc = parser.parseFromString(texto, 'text/html');

        const leitura = doc.querySelector('ul.rounds');
        console.log(leitura);

        //Encontra as rodadas
        const rodadas = doc.querySelectorAll('li.round .header-round');
        //Adiciona um objeto em cada indice do array
        for(let rodada of rodadas){
            tabela.push({
                rodada: rodada.innerText
            })
        }

        for(let i = 1; i < tabela.length+1; i++){
            console.log(`#round-${i}`);

            const rodadasData = doc.querySelectorAll(`#round-${i} .date-round`);

            if (typeof tabela[i-1].datas !== 'object') {
                tabela[i-1].datas = {}; // Inicializa como um objeto vazio, caso não seja
            }

            console.log(rodadasData);

            rodadasData.forEach((value,key)=>{
                console.log('================');
                console.log(value.dataset.date);
                console.log(key);

                console.log(value.dataset.date);
                tabela[i-1].datas[key] = {data: value.dataset.date};

            })


            // const a = 'aaaa'
            // tabela[0].data = {a};

            
        }
        
        console.log(tabela);
        return tabela

    }catch(e){
        console.error('Erro:', e);
    };
};

const tabela = document.querySelector('.tabela');
const data = getData()

