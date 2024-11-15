import { validate } from "schema-utils";

export default class Tabela{

    constructor(dadosOriginais,DadosSimulados=null){

        // console.log(dadosOriginais);

        this.classificacao = this.criaTabela(dadosOriginais)

        dadosOriginais.forEach(value => {
            // console.log(value);
        });
        
    }

    criaTabela(dadosOriginais){

        const times = {};
        dadosOriginais.forEach((value,key) => {
            if(key <= 9){
                // console.log(value);
                    // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG

                times[value.mandante] = {
                    logo: '',
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
                    logo: '',
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
            tabela[time].nome = time;
            ordemClassificacao.push(tabela[time])
        }

        ordemClassificacao.sort((a,b)=>{
            if (b.pontos !== a.pontos) {
                return b.pontos - a.pontos; // Ordena por pontos (decrescente)
            }
            if (b.vitorias !== a.vitorias) {
                return b.vitorias - a.vitorias; // Ordena por vitórias (decrescente)
            }
            return b.saldoGols - a.saldoGols;
        })
        console.log(ordemClassificacao);
    }

};