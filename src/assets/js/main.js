import '../css/style.css';
import Tabela from '../js/tabela';

//Coletando dados

// let responseAPI = await getData();
let responseAPI = [
    {
        "rodada": "1ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Criciúma x Juventude",
                    "placar": "",
                    "data": "13/04/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Internacional x Bahia",
                    "placar": "",
                    "data": "13/04/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Fluminense x Bragantino",
                    "placar": "",
                    "data": "13/04/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "São Paulo x Fortaleza",
                    "placar": "",
                    "data": "13/04/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Athletico-PR x Cuiabá",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Atlético Goianiense x Flamengo",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Estádio Serra Dourada",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Corinthians x Atlético-MG",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Vasco da Gama x Grêmio",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cruzeiro x Botafogo",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vitória x Palmeiras",
                    "placar": "",
                    "data": "14/04/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "2ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Bahia x Fluminense",
                    "placar": "",
                    "data": "16/04/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Grêmio x Athletico-PR",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Bragantino x Vasco da Gama",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Atlético-MG x Criciúma",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Fortaleza x Cruzeiro",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Juventude x Corinthians",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Palmeiras x Internacional",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Arena Barueri",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Flamengo x São Paulo",
                    "placar": "",
                    "data": "17/04/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Botafogo x Atlético Goianiense",
                    "placar": "",
                    "data": "18/04/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Cuiabá x Vitória",
                    "placar": "",
                    "data": "05/06/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "3ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Fluminense x Vasco da Gama",
                    "placar": "",
                    "data": "20/04/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Grêmio x Cuiabá",
                    "placar": "",
                    "data": "20/04/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Bragantino x Corinthians",
                    "placar": "",
                    "data": "20/04/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Atlético-MG x Cruzeiro",
                    "placar": "",
                    "data": "20/04/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Athletico-PR x Internacional",
                    "placar": "",
                    "data": "21/04/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Palmeiras x Flamengo",
                    "placar": "",
                    "data": "21/04/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Vitória x Bahia",
                    "placar": "",
                    "data": "21/04/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Atlético Goianiense x São Paulo",
                    "placar": "",
                    "data": "21/04/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Botafogo x Juventude",
                    "placar": "",
                    "data": "21/04/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "5"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Criciúma x Fortaleza",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "4ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Vasco da Gama x Criciúma",
                    "placar": "",
                    "data": "27/04/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "4"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Cuiabá x Atlético-MG",
                    "placar": "",
                    "data": "27/04/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "3"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Bahia x Grêmio",
                    "placar": "",
                    "data": "27/04/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Flamengo x Botafogo",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Corinthians x Fluminense",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Cruzeiro x Vitória",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fortaleza x Bragantino",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x Athletico-PR",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Internacional x Atlético Goianiense",
                    "placar": "",
                    "data": "28/04/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "São Paulo x Palmeiras",
                    "placar": "",
                    "data": "29/04/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "5ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Fluminense x Atlético-MG",
                    "placar": "",
                    "data": "04/05/2024",
                    "local": "Kléber Andrade",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Bragantino x Flamengo",
                    "placar": "",
                    "data": "04/05/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Corinthians x Fortaleza",
                    "placar": "",
                    "data": "04/05/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Athletico-PR x Vasco da Gama",
                    "placar": "",
                    "data": "05/05/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Vitória x São Paulo",
                    "placar": "",
                    "data": "05/05/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Botafogo x Bahia",
                    "placar": "",
                    "data": "05/05/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Cuiabá x Palmeiras",
                    "placar": "",
                    "data": "05/05/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x Atlético Goianiense",
                    "placar": "",
                    "data": "05/06/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cruzeiro x Internacional",
                    "placar": "",
                    "data": "28/08/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Grêmio x Criciúma",
                    "placar": "",
                    "data": "25/09/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "6ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Flamengo x Corinthians",
                    "placar": "",
                    "data": "11/05/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Atlético Goianiense x Cruzeiro",
                    "placar": "",
                    "data": "12/05/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Fortaleza x Botafogo",
                    "placar": "",
                    "data": "12/05/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Palmeiras x Athletico-PR",
                    "placar": "",
                    "data": "12/05/2024",
                    "local": "Arena Barueri",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Bahia x Bragantino",
                    "placar": "",
                    "data": "12/05/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Vasco da Gama x Vitória",
                    "placar": "",
                    "data": "12/05/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "São Paulo x Fluminense",
                    "placar": "",
                    "data": "13/05/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Criciúma x Cuiabá",
                    "placar": "",
                    "data": "09/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "5"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Internacional x Juventude",
                    "placar": "",
                    "data": "14/08/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Atlético-MG x Grêmio",
                    "placar": "",
                    "data": "09/10/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "7ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Grêmio x Bragantino",
                    "placar": "",
                    "data": "01/06/2024",
                    "local": "Couto Pereira",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Vitória x Atlético Goianiense",
                    "placar": "",
                    "data": "01/06/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Cuiabá x Internacional",
                    "placar": "",
                    "data": "01/06/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Fluminense x Juventude",
                    "placar": "",
                    "data": "01/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Corinthians x Botafogo",
                    "placar": "",
                    "data": "01/06/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Atlético-MG x Bahia",
                    "placar": "",
                    "data": "02/06/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Criciúma x Palmeiras",
                    "placar": "",
                    "data": "02/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Vasco da Gama x Flamengo",
                    "placar": "",
                    "data": "02/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "6"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Fortaleza x Athletico-PR",
                    "placar": "",
                    "data": "02/06/2024",
                    "local": "Estádio Presidente Vargas",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "São Paulo x Cruzeiro",
                    "placar": "",
                    "data": "02/06/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "8ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético Goianiense x Corinthians",
                    "placar": "",
                    "data": "11/06/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Juventude x Vitória",
                    "placar": "",
                    "data": "11/06/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Botafogo x Fluminense",
                    "placar": "",
                    "data": "11/06/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Bragantino x Atlético-MG",
                    "placar": "",
                    "data": "11/06/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Cruzeiro x Cuiabá",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Athletico-PR x Criciúma",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Flamengo x Grêmio",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x São Paulo",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Bahia x Fortaleza",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Palmeiras x Vasco da Gama",
                    "placar": "",
                    "data": "13/06/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "9ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Bragantino x Juventude",
                    "placar": "",
                    "data": "15/06/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Fluminense x Atlético Goianiense",
                    "placar": "",
                    "data": "15/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Athletico-PR x Flamengo",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Corinthians x São Paulo",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Vitória x Internacional",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Criciúma x Bahia",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Cuiabá x Fortaleza",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "5"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Grêmio x Botafogo",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Kléber Andrade",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vasco da Gama x Cruzeiro",
                    "placar": "",
                    "data": "16/06/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Atlético-MG x Palmeiras",
                    "placar": "",
                    "data": "17/06/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "4"
                    }
                }
            }
        }
    },
    {
        "rodada": "10ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético Goianiense x Criciúma",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Botafogo x Athletico-PR",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Fortaleza x Grêmio",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Juventude x Vasco da Gama",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "São Paulo x Cuiabá",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Cruzeiro x Fluminense",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Internacional x Corinthians",
                    "placar": "",
                    "data": "19/06/2024",
                    "local": "Orlando Scarpelli",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Vitória x Atlético-MG",
                    "placar": "",
                    "data": "20/06/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Flamengo x Bahia",
                    "placar": "",
                    "data": "20/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Palmeiras x Bragantino",
                    "placar": "",
                    "data": "20/06/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "11ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Criciúma x Botafogo",
                    "placar": "",
                    "data": "22/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Grêmio x Internacional",
                    "placar": "",
                    "data": "22/06/2024",
                    "local": "Couto Pereira",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Cuiabá x Atlético Goianiense",
                    "placar": "",
                    "data": "22/06/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Vasco da Gama x São Paulo",
                    "placar": "",
                    "data": "22/06/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Athletico-PR x Corinthians",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bahia x Cruzeiro",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fluminense x Flamengo",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Atlético-MG x Fortaleza",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Palmeiras x Juventude",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Bragantino x Vitória",
                    "placar": "",
                    "data": "23/06/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "12ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Botafogo x Bragantino",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Cruzeiro x Athletico-PR",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Atlético Goianiense x Grêmio",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Corinthians x Cuiabá",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Juventude x Flamengo",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bahia x Vasco da Gama",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fortaleza x Palmeiras",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x Atlético-MG",
                    "placar": "",
                    "data": "26/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Fluminense x Vitória",
                    "placar": "",
                    "data": "27/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "São Paulo x Criciúma",
                    "placar": "",
                    "data": "27/06/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "13ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Cuiabá x Bragantino",
                    "placar": "",
                    "data": "29/06/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Vasco da Gama x Botafogo",
                    "placar": "",
                    "data": "29/06/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Atlético-MG x Atlético Goianiense",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Fortaleza x Juventude",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Grêmio x Fluminense",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Estádio Francisco Stédile (Centenário)",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "São Paulo x Bahia",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Criciúma x Internacional",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Flamengo x Cruzeiro",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vitória x Athletico-PR",
                    "placar": "",
                    "data": "30/06/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Palmeiras x Corinthians",
                    "placar": "",
                    "data": "01/07/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "14ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Cuiabá x Botafogo",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Criciúma x Cruzeiro",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Vasco da Gama x Fortaleza",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Athletico-PR x São Paulo",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético-MG x Flamengo",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "4"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bragantino x Atlético Goianiense",
                    "placar": "",
                    "data": "03/07/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bahia x Juventude",
                    "placar": "",
                    "data": "04/07/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Grêmio x Palmeiras",
                    "placar": "",
                    "data": "04/07/2024",
                    "local": "Estádio Francisco Stédile (Centenário)",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Corinthians x Vitória",
                    "placar": "",
                    "data": "04/07/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Fluminense x Internacional",
                    "placar": "",
                    "data": "04/07/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "15ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Flamengo x Cuiabá",
                    "placar": "",
                    "data": "06/07/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "São Paulo x Bragantino",
                    "placar": "",
                    "data": "06/07/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Cruzeiro x Corinthians",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Fortaleza x Fluminense",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Juventude x Grêmio",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Internacional x Vasco da Gama",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Atlético Goianiense x Athletico-PR",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "2"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Palmeiras x Bahia",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vitória x Criciúma",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Botafogo x Atlético-MG",
                    "placar": "",
                    "data": "07/07/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "16ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Grêmio x Cruzeiro",
                    "placar": "",
                    "data": "10/07/2024",
                    "local": "Estádio Francisco Stédile (Centenário)",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Athletico-PR x Bahia",
                    "placar": "",
                    "data": "10/07/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "3"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Vasco da Gama x Corinthians",
                    "placar": "",
                    "data": "10/07/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Palmeiras x Atlético Goianiense",
                    "placar": "",
                    "data": "11/07/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Criciúma x Fluminense",
                    "placar": "",
                    "data": "11/07/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Flamengo x Fortaleza",
                    "placar": "",
                    "data": "11/07/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Atlético-MG x São Paulo",
                    "placar": "",
                    "data": "11/07/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Vitória x Botafogo",
                    "placar": "",
                    "data": "11/07/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cuiabá x Juventude",
                    "placar": "",
                    "data": "05/09/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Bragantino x Internacional",
                    "placar": "",
                    "data": "25/09/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "17ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Bahia x Cuiabá",
                    "placar": "",
                    "data": "13/07/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Cruzeiro x Bragantino",
                    "placar": "",
                    "data": "13/07/2024",
                    "local": "Estádio Independência",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Juventude x Atlético-MG",
                    "placar": "",
                    "data": "16/07/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Corinthians x Criciúma",
                    "placar": "",
                    "data": "16/07/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético Goianiense x Vasco da Gama",
                    "placar": "",
                    "data": "17/07/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "São Paulo x Grêmio",
                    "placar": "",
                    "data": "17/07/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Botafogo x Palmeiras",
                    "placar": "",
                    "data": "17/07/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Fortaleza x Vitória",
                    "placar": "",
                    "data": "17/07/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Fluminense x Athletico-PR",
                    "placar": "",
                    "data": "22/10/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Internacional x Flamengo",
                    "placar": "",
                    "data": "30/10/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "18ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Flamengo x Criciúma",
                    "placar": "",
                    "data": "20/07/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Botafogo x Internacional",
                    "placar": "",
                    "data": "20/07/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Palmeiras x Cruzeiro",
                    "placar": "",
                    "data": "20/07/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Grêmio x Vitória",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Estádio Francisco Stédile (Centenário)",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético-MG x Vasco da Gama",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bahia x Corinthians",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fortaleza x Atlético Goianiense",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x São Paulo",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Bragantino x Athletico-PR",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Cuiabá x Fluminense",
                    "placar": "",
                    "data": "21/07/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "19ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Cruzeiro x Juventude",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "São Paulo x Botafogo",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Vitória x Flamengo",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Atlético Goianiense x Bahia",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Fluminense x Palmeiras",
                    "placar": "",
                    "data": "24/07/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Corinthians x Grêmio",
                    "placar": "",
                    "data": "25/07/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Criciúma x Bragantino",
                    "placar": "",
                    "data": "28/08/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x Fortaleza",
                    "placar": "",
                    "data": "11/09/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vasco da Gama x Cuiabá",
                    "placar": "",
                    "data": "24/10/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Athletico-PR x Atlético-MG",
                    "placar": "",
                    "data": "16/11/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    }
                }
            }
        }
    },
    {
        "rodada": "20ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Juventude x Criciúma",
                    "placar": "",
                    "data": "27/07/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Palmeiras x Vitória",
                    "placar": "",
                    "data": "27/07/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Bahia x Internacional",
                    "placar": "",
                    "data": "27/07/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Botafogo x Cruzeiro",
                    "placar": "",
                    "data": "27/07/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "3"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Fortaleza x São Paulo",
                    "placar": "",
                    "data": "27/07/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bragantino x Fluminense",
                    "placar": "",
                    "data": "28/07/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Flamengo x Atlético Goianiense",
                    "placar": "",
                    "data": "28/07/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Atlético-MG x Corinthians",
                    "placar": "",
                    "data": "28/07/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cuiabá x Athletico-PR",
                    "placar": "",
                    "data": "28/07/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "2"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Grêmio x Vasco da Gama",
                    "placar": "",
                    "data": "28/07/2024",
                    "local": "Arena Condá",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "21ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Vitória x Cuiabá",
                    "placar": "",
                    "data": "03/08/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Vasco da Gama x Bragantino",
                    "placar": "",
                    "data": "03/08/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Atlético Goianiense x Botafogo",
                    "placar": "",
                    "data": "03/08/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "4"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Criciúma x Atlético-MG",
                    "placar": "",
                    "data": "03/08/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "São Paulo x Flamengo",
                    "placar": "",
                    "data": "03/08/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Athletico-PR x Grêmio",
                    "placar": "",
                    "data": "04/08/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Corinthians x Juventude",
                    "placar": "",
                    "data": "04/08/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Fluminense x Bahia",
                    "placar": "",
                    "data": "04/08/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Internacional x Palmeiras",
                    "placar": "",
                    "data": "04/08/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Cruzeiro x Fortaleza",
                    "placar": "",
                    "data": "05/08/2024",
                    "local": "Kléber Andrade",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "22ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Fortaleza x Criciúma",
                    "placar": "",
                    "data": "10/08/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Cuiabá x Grêmio",
                    "placar": "",
                    "data": "10/08/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "3"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Corinthians x Bragantino",
                    "placar": "",
                    "data": "10/08/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Cruzeiro x Atlético-MG",
                    "placar": "",
                    "data": "10/08/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Vasco da Gama x Fluminense",
                    "placar": "",
                    "data": "10/08/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Juventude x Botafogo",
                    "placar": "",
                    "data": "11/08/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bahia x Vitória",
                    "placar": "",
                    "data": "11/08/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Flamengo x Palmeiras",
                    "placar": "",
                    "data": "11/08/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "São Paulo x Atlético Goianiense",
                    "placar": "",
                    "data": "11/08/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Internacional x Athletico-PR",
                    "placar": "",
                    "data": "11/08/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "23ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético-MG x Cuiabá",
                    "placar": "",
                    "data": "17/08/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Grêmio x Bahia",
                    "placar": "",
                    "data": "17/08/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Bragantino x Fortaleza",
                    "placar": "",
                    "data": "17/08/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Fluminense x Corinthians",
                    "placar": "",
                    "data": "17/08/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético Goianiense x Internacional",
                    "placar": "",
                    "data": "18/08/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Criciúma x Vasco da Gama",
                    "placar": "",
                    "data": "18/08/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Palmeiras x São Paulo",
                    "placar": "",
                    "data": "18/08/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Athletico-PR x Juventude",
                    "placar": "",
                    "data": "18/08/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Botafogo x Flamengo",
                    "placar": "",
                    "data": "18/08/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vitória x Cruzeiro",
                    "placar": "",
                    "data": "19/08/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "24ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético Goianiense x Juventude",
                    "placar": "",
                    "data": "24/08/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Palmeiras x Cuiabá",
                    "placar": "",
                    "data": "24/08/2024",
                    "local": "Brinco de Ouro da Princesa",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "5"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Atlético-MG x Fluminense",
                    "placar": "",
                    "data": "24/08/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Bahia x Botafogo",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Criciúma x Grêmio",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Fortaleza x Corinthians",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "São Paulo x Vitória",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x Cruzeiro",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Flamengo x Bragantino",
                    "placar": "",
                    "data": "25/08/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vasco da Gama x Athletico-PR",
                    "placar": "",
                    "data": "26/08/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "25ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Cuiabá x Criciúma",
                    "placar": "",
                    "data": "31/08/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Botafogo x Fortaleza",
                    "placar": "",
                    "data": "31/08/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Cruzeiro x Atlético Goianiense",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Grêmio x Atlético-MG",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "3"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Corinthians x Flamengo",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Athletico-PR x Palmeiras",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fluminense x São Paulo",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x Internacional",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "3"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Bragantino x Bahia",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vitória x Vasco da Gama",
                    "placar": "",
                    "data": "01/09/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "26ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético Goianiense x Vitória",
                    "placar": "",
                    "data": "14/09/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Athletico-PR x Fortaleza",
                    "placar": "",
                    "data": "14/09/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Botafogo x Corinthians",
                    "placar": "",
                    "data": "14/09/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Juventude x Fluminense",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Palmeiras x Criciúma",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "5"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bragantino x Grêmio",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bahia x Atlético-MG",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Cruzeiro x São Paulo",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Flamengo x Vasco da Gama",
                    "placar": "",
                    "data": "15/09/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Internacional x Cuiabá",
                    "placar": "",
                    "data": "16/09/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "27ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Corinthians x Atlético Goianiense",
                    "placar": "",
                    "data": "21/09/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Vitória x Juventude",
                    "placar": "",
                    "data": "21/09/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Fluminense x Botafogo",
                    "placar": "",
                    "data": "21/09/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Fortaleza x Bahia",
                    "placar": "",
                    "data": "21/09/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético-MG x Bragantino",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Vasco da Gama x Palmeiras",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Cuiabá x Cruzeiro",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Grêmio x Flamengo",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "São Paulo x Internacional",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "3"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Criciúma x Athletico-PR",
                    "placar": "",
                    "data": "22/09/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "28ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Palmeiras x Atlético-MG",
                    "placar": "",
                    "data": "28/09/2024",
                    "local": "Brinco de Ouro da Princesa",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Botafogo x Grêmio",
                    "placar": "",
                    "data": "28/09/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Juventude x Bragantino",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Atlético Goianiense x Fluminense",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Fortaleza x Cuiabá",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "São Paulo x Corinthians",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Arena BRB Mané Garrincha",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bahia x Criciúma",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Cruzeiro x Vasco da Gama",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Internacional x Vitória",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Flamengo x Athletico-PR",
                    "placar": "",
                    "data": "29/09/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "29ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Criciúma x Atlético Goianiense",
                    "placar": "",
                    "data": "03/10/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Fluminense x Cruzeiro",
                    "placar": "",
                    "data": "03/10/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Grêmio x Fortaleza",
                    "placar": "",
                    "data": "04/10/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Athletico-PR x Botafogo",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético-MG x Vitória",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bragantino x Palmeiras",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bahia x Flamengo",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "2"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Corinthians x Internacional",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cuiabá x São Paulo",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vasco da Gama x Juventude",
                    "placar": "",
                    "data": "05/10/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "30ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Fortaleza x Atlético-MG",
                    "placar": "",
                    "data": "16/10/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "São Paulo x Vasco da Gama",
                    "placar": "",
                    "data": "16/10/2024",
                    "local": "Brinco de Ouro da Princesa",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Corinthians x Athletico-PR",
                    "placar": "",
                    "data": "17/10/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "5"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Flamengo x Fluminense",
                    "placar": "",
                    "data": "17/10/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético Goianiense x Cuiabá",
                    "placar": "",
                    "data": "18/10/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Botafogo x Criciúma",
                    "placar": "",
                    "data": "18/10/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Cruzeiro x Bahia",
                    "placar": "",
                    "data": "18/10/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x Grêmio",
                    "placar": "",
                    "data": "19/10/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vitória x Bragantino",
                    "placar": "",
                    "data": "19/10/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Juventude x Palmeiras",
                    "placar": "",
                    "data": "20/10/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "5"
                    }
                }
            }
        }
    },
    {
        "rodada": "31ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Flamengo x Juventude",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "4"
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Grêmio x Atlético Goianiense",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Palmeiras x Fortaleza",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Vitória x Fluminense",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "1"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Athletico-PR x Cruzeiro",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Atlético-MG x Internacional",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "3"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Bragantino x Botafogo",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "1"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Criciúma x São Paulo",
                    "placar": "",
                    "data": "26/10/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Cuiabá x Corinthians",
                    "placar": "",
                    "data": "28/10/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vasco da Gama x Bahia",
                    "placar": "",
                    "data": "28/10/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "2"
                    }
                }
            }
        }
    },
    {
        "rodada": "32ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Fluminense x Grêmio",
                    "placar": "",
                    "data": "01/11/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "2"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Bragantino x Cuiabá",
                    "placar": "",
                    "data": "02/11/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Athletico-PR x Vitória",
                    "placar": "",
                    "data": "02/11/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "2"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Juventude x Fortaleza",
                    "placar": "",
                    "data": "02/11/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "3"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Corinthians x Palmeiras",
                    "placar": "",
                    "data": "04/11/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Bahia x São Paulo",
                    "placar": "",
                    "data": "05/11/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "3"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Botafogo x Vasco da Gama",
                    "placar": "",
                    "data": "05/11/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Internacional x Criciúma",
                    "placar": "",
                    "data": "05/11/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "0"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Atlético Goianiense x Atlético-MG",
                    "placar": "",
                    "data": "06/11/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Cruzeiro x Flamengo",
                    "placar": "",
                    "data": "06/11/2024",
                    "local": "Estádio Independência",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "1"
                    }
                }
            }
        }
    },
    {
        "rodada": "33ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Internacional x Fluminense",
                    "placar": "",
                    "data": "08/11/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": "0"
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Palmeiras x Grêmio",
                    "placar": "",
                    "data": "08/11/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": "0"
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Botafogo x Cuiabá",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": "0"
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Vitória x Corinthians",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": "1"
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": "2"
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Atlético Goianiense x Bragantino",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": "0"
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Cruzeiro x Criciúma",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": "1"
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Fortaleza x Vasco da Gama",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": "3"
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": "0"
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x Bahia",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": "1"
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "São Paulo x Athletico-PR",
                    "placar": "",
                    "data": "09/11/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": "2"
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": "1"
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Flamengo x Atlético-MG",
                    "placar": "",
                    "data": "13/11/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": "0"
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": "0"
                    }
                }
            }
        }
    },
    {
        "rodada": "34ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Corinthians x Cruzeiro",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": ""
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Athletico-PR x Atlético Goianiense",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": ""
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Criciúma x Vitória",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": ""
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Bragantino x São Paulo",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": ""
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Bahia x Palmeiras",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": ""
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Cuiabá x Flamengo",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": ""
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Grêmio x Juventude",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": ""
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Atlético-MG x Botafogo",
                    "placar": "",
                    "data": "20/11/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": ""
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vasco da Gama x Internacional",
                    "placar": "",
                    "data": "21/11/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": ""
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Fluminense x Fortaleza",
                    "placar": "",
                    "data": "22/11/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": ""
                    }
                }
            }
        }
    },
    {
        "rodada": "35ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético Goianiense x Palmeiras",
                    "placar": "",
                    "data": "23/11/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": ""
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Botafogo x Vitória",
                    "placar": "",
                    "data": "23/11/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": ""
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Juventude x Cuiabá",
                    "placar": "",
                    "data": "23/11/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": ""
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "São Paulo x Atlético-MG",
                    "placar": "",
                    "data": "23/11/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Bahia x Athletico-PR",
                    "placar": "",
                    "data": "24/11/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Corinthians x Vasco da Gama",
                    "placar": "",
                    "data": "24/11/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": ""
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Internacional x Bragantino",
                    "placar": "",
                    "data": "24/11/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": ""
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Fluminense x Criciúma",
                    "placar": "",
                    "data": "26/11/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": ""
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Fortaleza x Flamengo",
                    "placar": "",
                    "data": "26/11/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": ""
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Cruzeiro x Grêmio",
                    "placar": "",
                    "data": "27/11/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": ""
                    }
                }
            }
        }
    },
    {
        "rodada": "36ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético-MG x Juventude",
                    "placar": "",
                    "data": "26/11/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": ""
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Palmeiras x Botafogo",
                    "placar": "",
                    "data": "26/11/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": ""
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Criciúma x Corinthians",
                    "placar": "",
                    "data": "30/11/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": ""
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Cuiabá x Bahia",
                    "placar": "",
                    "data": "30/11/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": ""
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Vasco da Gama x Atlético Goianiense",
                    "placar": "",
                    "data": "30/11/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": ""
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Flamengo x Internacional",
                    "placar": "",
                    "data": "01/12/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": ""
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Grêmio x São Paulo",
                    "placar": "",
                    "data": "01/12/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": ""
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Athletico-PR x Fluminense",
                    "placar": "",
                    "data": "01/12/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": ""
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Bragantino x Cruzeiro",
                    "placar": "",
                    "data": "01/12/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": ""
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vitória x Fortaleza",
                    "placar": "",
                    "data": "01/12/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": ""
                    }
                }
            }
        }
    },
    {
        "rodada": "37ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Athletico-PR x Bragantino",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Ligga Arena",
                    "mandante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": ""
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Atlético Goianiense x Fortaleza",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Estádio Antônio Accioly",
                    "mandante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": ""
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Corinthians x Bahia",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Neo Química Arena",
                    "mandante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": ""
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Criciúma x Flamengo",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Heriberto Hülse",
                    "mandante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": ""
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Cruzeiro x Palmeiras",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Mineirão",
                    "mandante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": ""
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Fluminense x Cuiabá",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": ""
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Internacional x Botafogo",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Estadio Beira-Rio",
                    "mandante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": ""
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "São Paulo x Juventude",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "MorumBIS",
                    "mandante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": ""
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Vasco da Gama x Atlético-MG",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Estádio São Januário",
                    "mandante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Vitória x Grêmio",
                    "placar": "",
                    "data": "03/12/2024",
                    "local": "Estádio Manoel Barradas",
                    "mandante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": ""
                    }
                }
            }
        }
    },
    {
        "rodada": "38ª rodada",
        "partidas": {
            "0": {
                "match": {
                    "confronto": "Atlético-MG x Athletico-PR",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Arena MRV",
                    "mandante": {
                        "nome": "Atlético-MG",
                        "abreviacao": "CAM",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/41v3fl8gq1fdj0uk01mvf29hte.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Athletico-PR",
                        "abreviacao": "CAP",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/75o43o0earfc5dq32bhtbpph3f.png",
                        "gols": ""
                    }
                }
            },
            "1": {
                "match": {
                    "confronto": "Bahia x Atlético Goianiense",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Arena Fonte Nova",
                    "mandante": {
                        "nome": "Bahia",
                        "abreviacao": "BAH",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3rsh22t1gaqjv2pccvs5h9dni0.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Atlético Goianiense",
                        "abreviacao": "ACG",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5ns4pb4f1675vuvl972ku1mna7.png",
                        "gols": ""
                    }
                }
            },
            "2": {
                "match": {
                    "confronto": "Botafogo x São Paulo",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Estádio Nilton Santos",
                    "mandante": {
                        "nome": "Botafogo",
                        "abreviacao": "BOT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3ppgu6k4ce5dlkln5pcad8qplf.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "São Paulo",
                        "abreviacao": "SAO",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/55dlofem9vrqj0e9h85q3et784.png",
                        "gols": ""
                    }
                }
            },
            "3": {
                "match": {
                    "confronto": "Cuiabá x Vasco da Gama",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Arena Pantanal",
                    "mandante": {
                        "nome": "Cuiabá",
                        "abreviacao": "CEC",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/11p2euj81m2v7dkio2ltatce00.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Vasco da Gama",
                        "abreviacao": "VAS",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5odkrqilcbhim28j7j10lgpsn7.png",
                        "gols": ""
                    }
                }
            },
            "4": {
                "match": {
                    "confronto": "Flamengo x Vitória",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Maracanã",
                    "mandante": {
                        "nome": "Flamengo",
                        "abreviacao": "FLA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/6juc9voua610blou9p2ih6r6pj.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Vitória",
                        "abreviacao": "VIT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/8vr6p9914pod4crds8o647iap.png",
                        "gols": ""
                    }
                }
            },
            "5": {
                "match": {
                    "confronto": "Fortaleza x Internacional",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Castelão",
                    "mandante": {
                        "nome": "Fortaleza",
                        "abreviacao": "FOR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5mlelgr1bb1bp14iu5uhtod1t7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Internacional",
                        "abreviacao": "INT",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/105v1kdvgn4qpbiqudq20s67t1.png",
                        "gols": ""
                    }
                }
            },
            "6": {
                "match": {
                    "confronto": "Grêmio x Corinthians",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Grêmio Arena",
                    "mandante": {
                        "nome": "Grêmio",
                        "abreviacao": "GRE",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/15cq43diumg649frqui8nrr0pu.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Corinthians",
                        "abreviacao": "COR",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5vcvvctt97r69pfi89v8th577m.png",
                        "gols": ""
                    }
                }
            },
            "7": {
                "match": {
                    "confronto": "Juventude x Cruzeiro",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Alfredo Jaconi",
                    "mandante": {
                        "nome": "Juventude",
                        "abreviacao": "ECJ",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7crlusedaeefbnqg4qa5sbp45v.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Cruzeiro",
                        "abreviacao": "CRU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/1tii84ip9opfetqj4atdchcgo8.png",
                        "gols": ""
                    }
                }
            },
            "8": {
                "match": {
                    "confronto": "Palmeiras x Fluminense",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Allianz Parque",
                    "mandante": {
                        "nome": "Palmeiras",
                        "abreviacao": "PAL",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/ghfutv8fqghq9l826jsnmt2c6.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Fluminense",
                        "abreviacao": "FLU",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/7ilimo1mms4bd7etug3pom84e6.png",
                        "gols": ""
                    }
                }
            },
            "9": {
                "match": {
                    "confronto": "Bragantino x Criciúma",
                    "placar": "",
                    "data": "07/12/2024",
                    "local": "Estádio Nabi Abi Chedid",
                    "mandante": {
                        "nome": "Bragantino",
                        "abreviacao": "BRA",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/3qdrsdhtkgqqevuvn4b2iveek7.png",
                        "gols": ""
                    },
                    "visitante": {
                        "nome": "Criciúma",
                        "abreviacao": "CRI",
                        "logo": "https://p2.trrsf.com/image/fget/cf/51/51/s1.trrsf.com/musa/pro/5lo7fj7n4g6j074k8ofn2ir1lv.png",
                        "gols": ""
                    }
                }
            }
        }
    }
];

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

function currentRound(dadosGlobais){

    // console.log(dadosGlobais.full);
    let contador = 0;

    dadosGlobais.full.forEach((v)=>{
        
        // console.log(v.partidas);
        
        let contadorPartidas = 0;
        for(let i in v.partidas){
            // console.log(v.partidas[i].match);

            if(v.partidas[i].match.mandante.gols && v.partidas[i].match.visitante.gols){
                contadorPartidas++
            };
        };

        if(contadorPartidas > 2) contador++;
    });

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

