import '../css/style.css';

init()
async function init(){
    const data = await getData()
    // console.log(data);

    document.querySelector('.round').innerText = (`Rodada `+round)
    showTable(data,round)
}

const controller = document.querySelector('.controller');
let round = 1;
controller.addEventListener('click',(e)=>{

    const el = e.target;

    
    if(el.classList.contains('prevButton')){
        if (round == 1) return
        round--
        init()
    }

    if(el.classList.contains('nextButton')){
        if (round == 38) return
        round++
        init()
    }
})


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
                    data: value.querySelector('[itemprop="startDate"]').content.split("-").reverse().join('/'),
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

function showTable(data,round=1){

    data = data[round-1];
    const partidas = data.partidas
    const slots = document.querySelectorAll('.box');

    slots.forEach((doc,key)=>{

        // console.log(partidas[key]);

        doc.querySelector('.local').innerText = partidas[key].match.local
        doc.querySelector('.data').innerText = partidas[key].match.data

        doc.querySelector('.mandante-name').innerText = partidas[key].match.mandante.abreviacao
        doc.querySelector('.mandante-logo').setAttribute('src', partidas[key].match.mandante.logo);
        if(partidas[key].match.mandante.gols){
            doc.querySelector('.mandante-gols').value = partidas[key].match.mandante.gols
            doc.querySelector('.mandante-gols').setAttribute('disabled','')
        }else{
            doc.querySelector('.mandante-gols').value = ''
            doc.querySelector('.mandante-gols').removeAttribute('disabled','')
        }
        


        doc.querySelector('.visitante-name').innerText = partidas[key].match.visitante.abreviacao
        doc.querySelector('.visitante-logo').setAttribute('src', partidas[key].match.visitante.logo);

        if(partidas[key].match.mandante.gols){
            doc.querySelector('.visitante-gols').value = partidas[key].match.visitante.gols
            doc.querySelector('.visitante-gols').setAttribute('disabled','')
        }else{
            doc.querySelector('.visitante-gols').value = ''
            doc.querySelector('.visitante-gols').removeAttribute('disabled','')
        }
    })

}





