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
        // console.log(leitura);

        //Encontra as rodadas
        const rodadas = doc.querySelectorAll('li.round .header-round');
        //Adiciona um objeto em cada indice do array
        for(let rodada of rodadas){
            tabela.push({
                rodada: rodada.innerText
            })
        }

        for(let i = 1; i < tabela.length+1; i++){

            const rodadasJogos = doc.querySelectorAll(`#round-${i} .match`);

            if (typeof tabela[i-1].partidas !== 'object') {
                tabela[i-1].partidas = {};
            }

            rodadasJogos.forEach((value,key)=>{

                const match = {
                    confronto: value.querySelector('[itemprop="name"]').content,
                    placar: '',
                    data: value.querySelector('[itemprop="startDate"]').content,
                    local: value.querySelector('[itemprop="location"] [itemprop="name"]').content,
                    mandante : {
                        nome: value.querySelector('a.shield.home').title,
                        abreviacao: value.querySelector('a.shield.home .acronym').innerText,
                        logo: value.querySelector('a.shield.home img').src,
                        gols: value.querySelector('strong.goals.home').innerText
                    },
                    visitante : {
                        nome: value.querySelector('a.shield.away').title,
                        abreviacao: value.querySelector('a.shield.away .acronym').innerText,
                        logo: value.querySelector('a.shield.away img').src,
                        gols: value.querySelector('strong.goals.away').innerText
                    }
                }

                // console.log(value.querySelector('a.shield.home img').src);

                tabela[i-1].partidas[key] = {match: match};
            })

            
        }
        
        // console.log(tabela[0].partidas[0].match);
        return tabela

    }catch(e){
        console.error('Erro:', e);
    };
};

async function init(){
    const data = await getData()
    console.log(data);
    showTable(data[0],2)
}

init()


function showTable(tabela,match=0){

    const container = document.querySelector('.tabela');

    //Configuração da BOX
    const box = document.createElement('div');
    box.setAttribute('class',`match`)
    box.setAttribute('match',`${match}`)
    
    const header = document.createElement('div');
    const info = document.createElement('div');

    //Header
    const local = document.createElement('span');
    local.innerText = tabela.partidas[match].match.local;

    const data = document.createElement('span');
    data.innerText = tabela.partidas[match].match.data;
    data.innerText = data.innerText.split("-").reverse().join('/')

    //Time 1
    const time1_nome = document.createElement('span');
    time1_nome.innerText = tabela.partidas[match].match.mandante.abreviacao;

    const time1_logo = document.createElement('img');
    time1_logo.setAttribute('src', tabela.partidas[match].match.mandante.logo)

    const time1_gol = document.createElement('span');
    time1_gol.innerText = tabela.partidas[match].match.mandante.gols;

    //Time 2
    const time2_nome = document.createElement('span');
    time2_nome.innerText = tabela.partidas[match].match.visitante.abreviacao;
 
    const time2_logo = document.createElement('img');
    time2_logo.setAttribute('src', tabela.partidas[match].match.visitante.logo)

    const time2_gol = document.createElement('span');
    time2_gol.innerText = tabela.partidas[match].match.visitante.gols;

    //Neutro
    const x = document.createElement('span');
    x.innerText = 'X'

    header.append(data,local);

    info.append(time1_nome, time1_logo, time1_gol, x, time2_gol, time2_logo, time2_nome)
  
    box.appendChild(header)
    box.appendChild(info)

    container.appendChild(box)
}



