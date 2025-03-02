import '../css/style.css';
import Tabela from '../js/tabela';
const API_URL = process.env.API_URL;

//Coletando dados

let responseAPI = await getData();

let dadosGlobais = {
    full: responseAPI,
    short: optimizeData(responseAPI)
};

//Rodada exibida
let round = currentRound(dadosGlobais);

//Inicia o código para exibição dos jogos
loadMatches(dadosGlobais)


//Funções
async function loadMatches(dados){

    document.querySelector('.round').innerText = (`Rodada `+round);
    document.querySelector('.round').setAttribute('round',+round);

    // console.log(dados);
    renderMatches(dados.full,round) 
    geraTable(dados.short)
}

function geraTable(dadosOriginais,DadosSimulados){
    // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG
    const tabela = document.querySelector('table');
    
    while (tabela.children.length > 1) {
        tabela.removeChild(tabela.lastChild); // Remove o último filho repetidamente
    }

    let dados;
    if(DadosSimulados){
        dados = new Tabela(dadosOriginais, DadosSimulados)
    } else{
        dados = new Tabela(dadosOriginais);
    }

    const tbody = document.createElement('tbody');
    
    dados.classificacao.forEach((value,key)=>{

        const tr = document.createElement('tr');
    
        const posicao = document.createElement('td'); 
        const posicaoText = document.createElement('p'); 
        posicaoText.innerText = `${key+1}`; posicaoText.style.fontWeight = 'bold'
        posicao.appendChild(posicaoText);
        tr.appendChild(posicao);

        for(let time in value){
            
            if(time === 'logo'){
                const td = document.createElement('td');
                const logo = document.createElement('img'); 
                logo.setAttribute('src', value[time])

                td.appendChild(logo)
                tr.appendChild(td)
                continue
            };

            const td = document.createElement('td');
            const text = document.createElement('p'); 
            text.innerText = value[time]

            if(time === 'nome'){
                text.style = 'text-align: left;'
            }

            td.appendChild(text)
            tr.appendChild(td)
        }

        tbody.appendChild(tr);
    })

    tabela.appendChild(tbody);

    (function(){
        const tbody = document.querySelectorAll('tbody tr');        
        tbody.forEach((v,k)=>{
            k+=1;
            if(k<=4) v.firstChild.style.backgroundColor = 'blue';
            if(k>=5 && k<=6) v.firstChild.style.backgroundColor = 'orange';
            if(k>=7 && k<=12) v.firstChild.style.backgroundColor = 'green';
            if(k>16) v.firstChild.style.backgroundColor = 'red';
        })
    })()
}

function optimizeData(dados){
    const dadosOtimizados = [];

        dados.forEach((value)=>{

            // console.log(value);
            
            for(let info in value.partidas){

                const obj = {
                    rodada: value.rodada,
                    confronto : value.partidas[info].match.confronto,
                    mandante: value.partidas[info].match.mandante.nome,
                    mandanteGols: value.partidas[info].match.mandante.gols,
                    mandateLogo: value.partidas[info].match.mandante.logo,
                    visitante: value.partidas[info].match.visitante.nome,
                    visitanteGols: value.partidas[info].match.visitante.gols,
                    visitanteLogo: value.partidas[info].match.visitante.logo,
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

        const response = await fetch(API_URL);

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

    // data = data[round-1];
    data[round-1] ? data = data[round-1] : data = data[round]

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

function currentRound(dadosGlobais){

    // console.log(dadosGlobais.full);
    let contador = 1;

    dadosGlobais.full.forEach((rodadas)=>{
        
        // console.log(rodadas.partidas);
        
        let contadorPartidas = 0;
        for(let i in rodadas.partidas){
            // console.log(rodadas.partidas[i].match);

            if(rodadas.partidas[i].match.mandante.gols && rodadas.partidas[i].match.visitante.gols){
                contadorPartidas++
            };
        };
        // console.log(contadorPartidas);

        if(contadorPartidas >= 1) contador++;
    });

    // console.log(contador, 'Rodada');
    return Number(contador);
}


// -- Listeners --


//Ouve o controlador de paginas de rodadas
(async function listenerPageRound(){
    const controller = document.querySelector('.controller');
    controller.addEventListener('click', async(e)=>{
    
        const el = e.target;
        // console.log(e);
    
        if(el.classList.contains('prevButton')){
            if (round == 1) return
            round--
            loadMatches(dadosGlobais)
        }
    
        if(el.classList.contains('nextButton')){
            if (round == 38) return
            round++
            loadMatches(dadosGlobais)
        }

        const botao = event.target.closest('.refreshButton');

        if(botao){
            round = currentRound(dadosGlobais)
            responseAPI = await getData();
            dadosGlobais.full = responseAPI;
            dadosGlobais.short = optimizeData(responseAPI);
            loadMatches(dadosGlobais);
        }
    })
})();

//Ouve os inputs de palpites dos jogos futuros
(function listenerImputGols(){
    document.querySelector('.matches').addEventListener('input',(e)=>{
        const elementoPai = e.target.parentElement;
        const confronto = elementoPai.parentElement.attributes.match.value
        
        let simulacao = {
            rodada: document.querySelector('.round').attributes.round.value,
            confronto: confronto,
            mandante: elementoPai.children[0].attributes['fullname'].value,
            mandanteGols: elementoPai.children[2].value? Number(elementoPai.children[2].value) :0,
            visitante: elementoPai.children[6].attributes['fullname'].value,
            visitanteGols: elementoPai.children[4].value? Number(elementoPai.children[4].value) : 0
        };
        //console.log(simulacao);
        geraTable(dadosGlobais.short,simulacao)
    })
})();

