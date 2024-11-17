export default class Tabela{

    constructor(dadosOriginais,DadosSimulados=null){

        // console.log(dadosOriginais);
        
        if(DadosSimulados){
            this.classificacao = this.atualizaTabela(dadosOriginais,DadosSimulados);
            return
        }

        this.classificacao = this.criaTabela(dadosOriginais);
    }

    criaTabela(dadosOriginais){

        const times = {};
        dadosOriginais.forEach((value,key) => {
            if(key <= 9){
                // console.log(value);
               
                times[value.mandante] = {
                    logo: value.mandateLogo,
                    nome: value.mandante,
                    pontos: 0,
                    partidasJogadas: 0,
                    vitorias: 0,
                    empates: 0,
                    derrotas: 0,
                    golsMarcados: 0,
                    golsSofridos: 0,
                    saldoGols: 0,
                };
                times[value.visitante] = {
                    logo: value.visitanteLogo,
                    nome : value.visitante,
                    pontos: 0,
                    partidasJogadas: 0,
                    vitorias: 0,
                    empates: 0,
                    derrotas: 0,
                    golsMarcados: 0,
                    golsSofridos: 0,
                    saldoGols: 0,
                };
            }
        });

        // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG
        // console.log(times);
        return this.ordenaTabela(times,dadosOriginais)
    }   

    ordenaTabela(tabela,dados){
        
        dados.forEach((v,k)=>{
            if(v.mandanteGols || v.visitanteGols ){
                // console.log(v); 

                tabela[v.mandante].partidasJogadas++;
                tabela[v.visitante].partidasJogadas++

                if(v.mandanteGols === v.visitanteGols){

                    tabela[v.mandante].empates++;
                    tabela[v.mandante].pontos++;
                    tabela[v.mandante].golsMarcados+=Number(v.mandanteGols);
                    tabela[v.mandante].golsSofridos+=Number(v.visitanteGols);
                    tabela[v.mandante].saldoGols+= 0;

                    tabela[v.visitante].empates++
                    tabela[v.visitante].pontos++
                    tabela[v.visitante].golsMarcados+=Number(v.visitanteGols);
                    tabela[v.visitante].golsSofridos+=Number(v.mandanteGols);
                    tabela[v.visitante].saldoGols+= 0;

                }else if(v.mandanteGols > v.visitanteGols){

                    tabela[v.mandante].vitorias++;
                    tabela[v.mandante].pontos+=3;
                    tabela[v.mandante].golsMarcados+=Number(v.mandanteGols);
                    tabela[v.mandante].golsSofridos+=Number(v.visitanteGols);
                    tabela[v.mandante].saldoGols+=Number(v.mandanteGols) - Number(v.visitanteGols);

                    tabela[v.visitante].derrotas++;
                    tabela[v.visitante].golsMarcados+=Number(v.visitanteGols);
                    tabela[v.visitante].golsSofridos+=Number(v.mandanteGols);
                    tabela[v.visitante].saldoGols+=Number(v.visitanteGols) - Number(v.mandanteGols);

                }else{
                    tabela[v.visitante].vitorias++
                    tabela[v.visitante].pontos+=3;
                    tabela[v.visitante].golsMarcados+=Number(v.visitanteGols);
                    tabela[v.visitante].golsSofridos+=Number(v.mandanteGols);
                    tabela[v.visitante].saldoGols+=Number(v.visitanteGols) - Number(v.mandanteGols);

                    tabela[v.mandante].derrotas++
                    tabela[v.mandante].golsMarcados+=Number(v.mandanteGols);
                    tabela[v.mandante].golsSofridos+=Number(v.visitanteGols);
                    tabela[v.mandante].saldoGols+=Number(v.mandanteGols) - Number(v.visitanteGols);
                }
            }
        })

        let ordemClassificacao = [];

        for(let time in tabela){
            ordemClassificacao.push(tabela[time])
        }

        ordemClassificacao.sort((a,b)=>{
            if (b.pontos !== a.pontos) {
                return b.pontos - a.pontos;
            }
            if (b.vitorias !== a.vitorias) {
                return b.vitorias - a.vitorias;
            }
            return b.saldoGols - a.saldoGols;
        })

        return ordemClassificacao;
    }

    atualizaTabela(dadosOriginais,DadosSimulados){
        
        const newDados = [];

        const att = dadosOriginais.findIndex(partida => partida.confronto === DadosSimulados.confronto);
        dadosOriginais[att].mandanteGols = DadosSimulados.mandanteGols;
        dadosOriginais[att].visitanteGols = DadosSimulados.visitanteGols;

        // console.log(dadosOriginais[att], 'dado bruto atualizado');
        return this.criaTabela(dadosOriginais)
    }

};