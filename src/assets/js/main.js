import '../css/style.css';


//Rodada exibida
let round = 34;

//Coletando dados
const responseAPI = await getData();
let dadosGlobais = {
    full: responseAPI,
    short: optimizeData(responseAPI)
};

//Inicia o código para exibição dos jogos
loadMatches()

//Funções
async function loadMatches(){
    const data = dadosGlobais.full

    document.querySelector('.round').innerText = (`Rodada `+round);
    document.querySelector('.round').setAttribute('round',+round);

    renderMatches(data,round) 
    geraTable(data)
}

function geraTable(dadosOriginais,DadosSimulados){
    // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG

    const dados = optimizeData(dadosOriginais);

    // console.log(dados);
    
    const tabela = document.createElement('table');
    tabela.appendChild(document.createElement('table'))
}

function optimizeData(dados){
    const dadosOtimizados = [];

        dados.forEach((value,key)=>{

            // console.log(value);
            
            for(let info in value.partidas){

                const obj = {
                    rodada: value.rodada,
                    confronto : value.partidas[info].match.confronto,
                    mandante: value.partidas[info].match.mandante.nome,
                    mandanteGols: value.partidas[info].match.mandante.gols,
                    visitante: value.partidas[info].match.visitante.nome,
                    visitanteGols: value.partidas[info].match.visitante.gols
                }

                // console.log(value.partidas[info].match);
                dadosOtimizados.push(obj)
            }


            
        })

        // console.log(dadosOtimizados);
        
        return dadosOtimizados
}

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

function renderMatches(data,round=1){

    data = data[round-1];
    const partidas = data.partidas
    const slots = document.querySelectorAll('.box');

    slots.forEach((doc,key)=>{

        // console.log(partidas[key]);

        doc.setAttribute('match', partidas[key].match.confronto)

        doc.querySelector('.local').innerText = partidas[key].match.local
        doc.querySelector('.data').innerText = partidas[key].match.data

        doc.querySelector('.mandante-name').innerText = partidas[key].match.mandante.abreviacao
        doc.querySelector('.mandante-name').setAttribute('fullname', partidas[key].match.mandante.nome)
        doc.querySelector('.mandante-logo').setAttribute('src', partidas[key].match.mandante.logo);

        if(partidas[key].match.mandante.gols){
            doc.querySelector('.mandante-gols').value = partidas[key].match.mandante.gols
            doc.querySelector('.mandante-gols').setAttribute('disabled','')
        }else{
            doc.querySelector('.mandante-gols').value = ''
            doc.querySelector('.mandante-gols').removeAttribute('disabled','')
        }
        


        doc.querySelector('.visitante-name').innerText = partidas[key].match.visitante.abreviacao
        doc.querySelector('.visitante-name').setAttribute('fullname', partidas[key].match.visitante.nome)
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


// -- Listeners --


//Ouve o controlador de paginas de rodadas
(function listenerPageRound(){
    const controller = document.querySelector('.controller');
    controller.addEventListener('click',(e)=>{
    
        const el = e.target;
    
        if(el.classList.contains('prevButton')){
            if (round == 1) return
            round--
            loadMatches()
        }
    
        if(el.classList.contains('nextButton')){
            if (round == 38) return
            round++
            loadMatches()
        }
    })
})();


//Ouve os inputs de palpites dos jogos futuros
(function listenerImputGols(){
    document.querySelector('.matches').addEventListener('input',(e)=>{
        const elementoPai = e.target.parentElement;
        const confronto = elementoPai.parentElement.attributes.match.value
        
        console.log(elementoPai.children);

        let simulacao = {
            rodada: document.querySelector('.round').attributes.round.value,
            confronto: confronto,
            mandante: elementoPai.children[0].attributes['fullname'].value,
            mandanteGols: elementoPai.children[2].value,
            visitante: elementoPai.children[6].attributes['fullname'].value,
            visitanteGols: elementoPai.children[4].value
        };
    
        console.log(simulacao);
    })
})();

