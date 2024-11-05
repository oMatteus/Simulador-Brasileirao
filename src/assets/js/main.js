import '../css/style.css';

async function getData(){

    try{

        const response = await fetch('https://p1.trrsf.com/api/musa-soccer/ms-standings-games-light?idChampionship=1420&idPhase=&language=pt-BR&country=BR&nav=N&timezone=BR');

        if (!response.ok) {
            throw new Error('Dados nao encontrados');
        };

        const texto = await response.text()
        const parser = new DOMParser();
        const doc = parser.parseFromString(texto, 'text/html');

        const dados = doc.querySelector('ul.rounds');
        ;
        console.log(dados.querySelectorAll('li.round'));

        // for(let dado in dados){
        //     console.log(dado);
        // }

        console.log(typeof(dados));
        console.log(dados);

        return dados


    }catch(e){
        console.error('Erro:', e);
    };
};

const tabela = document.querySelector('.tabela');
const data = getData()

