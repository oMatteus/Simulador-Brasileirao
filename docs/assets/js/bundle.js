/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _js_tabela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/tabela */ "./src/assets/js/tabela.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var API_URL = "https://p1.trrsf.com/api/musa-soccer/ms-standings-games-light?idChampionship=1436&idPhase=&language=pt-BR&country=BR&nav=N&timezone=BR";

//Coletando dados

var responseAPI = await getData();
var dadosGlobais = {
  full: responseAPI,
  "short": optimizeData(responseAPI)
};

//Rodada exibida
var round = currentRound(dadosGlobais);

//Inicia o código para exibição dos jogos
loadMatches(dadosGlobais);

//Funções
function loadMatches(_x) {
  return _loadMatches.apply(this, arguments);
}
function _loadMatches() {
  _loadMatches = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dados) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          document.querySelector('.round').innerText = "Rodada " + round;
          document.querySelector('.round').setAttribute('round', +round);

          // console.log(dados);
          renderMatches(dados.full, round);
          geraTable(dados["short"]);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _loadMatches.apply(this, arguments);
}
function geraTable(dadosOriginais, DadosSimulados) {
  // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG
  var tabela = document.querySelector('table');
  while (tabela.children.length > 1) {
    tabela.removeChild(tabela.lastChild); // Remove o último filho repetidamente
  }
  var dados;
  if (DadosSimulados) {
    dados = new _js_tabela__WEBPACK_IMPORTED_MODULE_1__["default"](dadosOriginais, DadosSimulados);
  } else {
    dados = new _js_tabela__WEBPACK_IMPORTED_MODULE_1__["default"](dadosOriginais);
  }
  var tbody = document.createElement('tbody');
  dados.classificacao.forEach(function (value, key) {
    var tr = document.createElement('tr');
    var posicao = document.createElement('td');
    var posicaoText = document.createElement('p');
    posicaoText.innerText = "".concat(key + 1);
    posicaoText.style.fontWeight = 'bold';
    posicao.appendChild(posicaoText);
    tr.appendChild(posicao);
    for (var time in value) {
      if (time === 'logo') {
        var _td = document.createElement('td');
        var logo = document.createElement('img');
        logo.setAttribute('src', value[time]);
        _td.appendChild(logo);
        tr.appendChild(_td);
        continue;
      }
      ;
      var td = document.createElement('td');
      var text = document.createElement('p');
      text.innerText = value[time];
      if (time === 'nome') {
        text.style = 'text-align: left;';
      }
      td.appendChild(text);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  tabela.appendChild(tbody);
  (function () {
    var tbody = document.querySelectorAll('tbody tr');
    tbody.forEach(function (v, k) {
      k += 1;
      if (k <= 4) v.firstChild.style.backgroundColor = 'blue';
      if (k >= 5 && k <= 6) v.firstChild.style.backgroundColor = 'orange';
      if (k >= 7 && k <= 12) v.firstChild.style.backgroundColor = 'green';
      if (k > 16) v.firstChild.style.backgroundColor = 'red';
    });
  })();
}
function optimizeData(dados) {
  var dadosOtimizados = [];
  dados.forEach(function (value) {
    // console.log(value);

    for (var info in value.partidas) {
      var obj = {
        rodada: value.rodada,
        confronto: value.partidas[info].match.confronto,
        mandante: value.partidas[info].match.mandante.nome,
        mandanteGols: value.partidas[info].match.mandante.gols,
        mandateLogo: value.partidas[info].match.mandante.logo,
        visitante: value.partidas[info].match.visitante.nome,
        visitanteGols: value.partidas[info].match.visitante.gols,
        visitanteLogo: value.partidas[info].match.visitante.logo
      };

      // console.log(value.partidas[info].match);
      dadosOtimizados.push(obj);
    }
  });

  // console.log(dadosOtimizados);

  return dadosOtimizados;
}
function getData() {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var tabela, response, texto, parser, doc, leitura, rodadas, _iterator, _step, rodada, _loop, i;
    return _regeneratorRuntime().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          tabela = [];
          _context5.next = 4;
          return fetch(API_URL);
        case 4:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 7;
            break;
          }
          throw new Error('Dados nao encontrados');
        case 7:
          ;
          _context5.next = 10;
          return response.text();
        case 10:
          texto = _context5.sent;
          parser = new DOMParser();
          doc = parser.parseFromString(texto, 'text/html');
          leitura = doc.querySelector('ul.rounds'); // console.log(leitura);
          //Encontra as rodadas
          rodadas = doc.querySelectorAll('li.round .header-round'); //Adiciona um objeto em cada indice do array
          _iterator = _createForOfIteratorHelper(rodadas);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              rodada = _step.value;
              tabela.push({
                rodada: rodada.innerText
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            var rodadasJogos;
            return _regeneratorRuntime().wrap(function _loop$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  rodadasJogos = doc.querySelectorAll("#round-".concat(i, " .match"));
                  if (_typeof(tabela[i - 1].partidas) !== 'object') {
                    tabela[i - 1].partidas = {};
                  }
                  rodadasJogos.forEach(function (value, key) {
                    var match = {
                      confronto: value.querySelector('[itemprop="name"]').content,
                      placar: '',
                      data: value.querySelector('[itemprop="startDate"]').content.split("-").reverse().join('/'),
                      local: value.querySelector('[itemprop="location"] [itemprop="name"]').content,
                      mandante: {
                        nome: value.querySelector('a.shield.home').title,
                        abreviacao: value.querySelector('a.shield.home .acronym').innerText,
                        logo: value.querySelector('a.shield.home img').src,
                        gols: value.querySelector('strong.goals.home').innerText
                      },
                      visitante: {
                        nome: value.querySelector('a.shield.away').title,
                        abreviacao: value.querySelector('a.shield.away .acronym').innerText,
                        logo: value.querySelector('a.shield.away img').src,
                        gols: value.querySelector('strong.goals.away').innerText
                      }
                    };

                    // console.log(value.querySelector('a.shield.home img').src);

                    tabela[i - 1].partidas[key] = {
                      match: match
                    };
                  });
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _loop);
          });
          i = 1;
        case 19:
          if (!(i < tabela.length + 1)) {
            _context5.next = 24;
            break;
          }
          return _context5.delegateYield(_loop(i), "t0", 21);
        case 21:
          i++;
          _context5.next = 19;
          break;
        case 24:
          return _context5.abrupt("return", tabela);
        case 27:
          _context5.prev = 27;
          _context5.t1 = _context5["catch"](0);
          console.error('Erro:', _context5.t1);
        case 30:
          ;
        case 31:
        case "end":
          return _context5.stop();
      }
    }, _callee4, null, [[0, 27]]);
  }));
  return _getData.apply(this, arguments);
}
;
function renderMatches(data) {
  var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  // data = data[round-1];
  data[round - 1] ? data = data[round - 1] : data = data[round];
  var partidas = data.partidas;
  var slots = document.querySelectorAll('.box');
  slots.forEach(function (doc, key) {
    // console.log(partidas[key]);

    doc.setAttribute('match', partidas[key].match.confronto);
    doc.querySelector('.local').innerText = partidas[key].match.local;
    doc.querySelector('.data').innerText = partidas[key].match.data;
    doc.querySelector('.mandante-name').innerText = partidas[key].match.mandante.abreviacao;
    doc.querySelector('.mandante-name').setAttribute('fullname', partidas[key].match.mandante.nome);
    doc.querySelector('.mandante-logo').setAttribute('src', partidas[key].match.mandante.logo);
    if (partidas[key].match.mandante.gols) {
      doc.querySelector('.mandante-gols').value = partidas[key].match.mandante.gols;
      doc.querySelector('.mandante-gols').setAttribute('disabled', '');
    } else {
      doc.querySelector('.mandante-gols').value = '';
      doc.querySelector('.mandante-gols').removeAttribute('disabled', '');
    }
    doc.querySelector('.visitante-name').innerText = partidas[key].match.visitante.abreviacao;
    doc.querySelector('.visitante-name').setAttribute('fullname', partidas[key].match.visitante.nome);
    doc.querySelector('.visitante-logo').setAttribute('src', partidas[key].match.visitante.logo);
    if (partidas[key].match.mandante.gols) {
      doc.querySelector('.visitante-gols').value = partidas[key].match.visitante.gols;
      doc.querySelector('.visitante-gols').setAttribute('disabled', '');
    } else {
      doc.querySelector('.visitante-gols').value = '';
      doc.querySelector('.visitante-gols').removeAttribute('disabled', '');
    }
  });
}
function currentRound(dadosGlobais) {
  // console.log(dadosGlobais.full);
  var contador = 1;
  dadosGlobais.full.forEach(function (rodadas) {
    // console.log(rodadas.partidas);

    var contadorPartidas = 0;
    for (var i in rodadas.partidas) {
      // console.log(rodadas.partidas[i].match);

      if (rodadas.partidas[i].match.mandante.gols && rodadas.partidas[i].match.visitante.gols) {
        contadorPartidas++;
      }
      ;
    }
    ;
    // console.log(contadorPartidas);

    if (contadorPartidas >= 1) contador++;
  });

  // console.log(contador, 'Rodada');
  return Number(contador);
}

// -- Listeners --

//Ouve o controlador de paginas de rodadas
(function () {
  var _listenerPageRound = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var controller;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          controller = document.querySelector('.controller');
          controller.addEventListener('click', /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
              var el, botao;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    el = e.target; // console.log(e);
                    if (!el.classList.contains('prevButton')) {
                      _context.next = 6;
                      break;
                    }
                    if (!(round == 1)) {
                      _context.next = 4;
                      break;
                    }
                    return _context.abrupt("return");
                  case 4:
                    round--;
                    loadMatches(dadosGlobais);
                  case 6:
                    if (!el.classList.contains('nextButton')) {
                      _context.next = 11;
                      break;
                    }
                    if (!(round == 38)) {
                      _context.next = 9;
                      break;
                    }
                    return _context.abrupt("return");
                  case 9:
                    round++;
                    loadMatches(dadosGlobais);
                  case 11:
                    botao = event.target.closest('.refreshButton');
                    if (!botao) {
                      _context.next = 20;
                      break;
                    }
                    round = currentRound(dadosGlobais);
                    _context.next = 16;
                    return getData();
                  case 16:
                    responseAPI = _context.sent;
                    dadosGlobais.full = responseAPI;
                    dadosGlobais["short"] = optimizeData(responseAPI);
                    loadMatches(dadosGlobais);
                  case 20:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  function listenerPageRound() {
    return _listenerPageRound.apply(this, arguments);
  }
  return listenerPageRound;
})()();

//Ouve os inputs de palpites dos jogos futuros
(function listenerImputGols() {
  document.querySelector('.matches').addEventListener('input', function (e) {
    var elementoPai = e.target.parentElement;
    var confronto = elementoPai.parentElement.attributes.match.value;
    var simulacao = {
      rodada: document.querySelector('.round').attributes.round.value,
      confronto: confronto,
      mandante: elementoPai.children[0].attributes['fullname'].value,
      mandanteGols: elementoPai.children[2].value ? Number(elementoPai.children[2].value) : 0,
      visitante: elementoPai.children[6].attributes['fullname'].value,
      visitanteGols: elementoPai.children[4].value ? Number(elementoPai.children[4].value) : 0
    };
    //console.log(simulacao);
    geraTable(dadosGlobais["short"], simulacao);
  });
})();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/assets/js/tabela.js":
/*!*********************************!*\
  !*** ./src/assets/js/tabela.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabela)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tabela = /*#__PURE__*/function () {
  function Tabela(dadosOriginais) {
    var DadosSimulados = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Tabela);
    // console.log(dadosOriginais);

    if (DadosSimulados) {
      this.classificacao = this.atualizaTabela(dadosOriginais, DadosSimulados);
      return;
    }
    this.classificacao = this.criaTabela(dadosOriginais);
  }
  return _createClass(Tabela, [{
    key: "criaTabela",
    value: function criaTabela(dadosOriginais) {
      var times = {};
      dadosOriginais.forEach(function (value, key) {
        if (key <= 9) {
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
            saldoGols: 0
          };
          times[value.visitante] = {
            logo: value.visitanteLogo,
            nome: value.visitante,
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
          };
        }
      });

      // Clube | PTS | PJ | Vit | Emp | Der | GM| GS | SG
      // console.log(times);
      return this.ordenaTabela(times, dadosOriginais);
    }
  }, {
    key: "ordenaTabela",
    value: function ordenaTabela(tabela, dados) {
      dados.forEach(function (v, k) {
        if (v.mandanteGols || v.visitanteGols) {
          // console.log(v); 

          tabela[v.mandante].partidasJogadas++;
          tabela[v.visitante].partidasJogadas++;
          if (v.mandanteGols === v.visitanteGols) {
            tabela[v.mandante].empates++;
            tabela[v.mandante].pontos++;
            tabela[v.mandante].golsMarcados += Number(v.mandanteGols);
            tabela[v.mandante].golsSofridos += Number(v.visitanteGols);
            tabela[v.mandante].saldoGols += 0;
            tabela[v.visitante].empates++;
            tabela[v.visitante].pontos++;
            tabela[v.visitante].golsMarcados += Number(v.visitanteGols);
            tabela[v.visitante].golsSofridos += Number(v.mandanteGols);
            tabela[v.visitante].saldoGols += 0;
          } else if (v.mandanteGols > v.visitanteGols) {
            tabela[v.mandante].vitorias++;
            tabela[v.mandante].pontos += 3;
            tabela[v.mandante].golsMarcados += Number(v.mandanteGols);
            tabela[v.mandante].golsSofridos += Number(v.visitanteGols);
            tabela[v.mandante].saldoGols += Number(v.mandanteGols) - Number(v.visitanteGols);
            tabela[v.visitante].derrotas++;
            tabela[v.visitante].golsMarcados += Number(v.visitanteGols);
            tabela[v.visitante].golsSofridos += Number(v.mandanteGols);
            tabela[v.visitante].saldoGols += Number(v.visitanteGols) - Number(v.mandanteGols);
          } else {
            tabela[v.visitante].vitorias++;
            tabela[v.visitante].pontos += 3;
            tabela[v.visitante].golsMarcados += Number(v.visitanteGols);
            tabela[v.visitante].golsSofridos += Number(v.mandanteGols);
            tabela[v.visitante].saldoGols += Number(v.visitanteGols) - Number(v.mandanteGols);
            tabela[v.mandante].derrotas++;
            tabela[v.mandante].golsMarcados += Number(v.mandanteGols);
            tabela[v.mandante].golsSofridos += Number(v.visitanteGols);
            tabela[v.mandante].saldoGols += Number(v.mandanteGols) - Number(v.visitanteGols);
          }
        }
      });
      var ordemClassificacao = [];
      for (var time in tabela) {
        ordemClassificacao.push(tabela[time]);
      }
      ordemClassificacao.sort(function (a, b) {
        if (b.pontos !== a.pontos) {
          return b.pontos - a.pontos;
        }
        if (b.vitorias !== a.vitorias) {
          return b.vitorias - a.vitorias;
        }
        return b.saldoGols - a.saldoGols;
      });
      return ordemClassificacao;
    }
  }, {
    key: "atualizaTabela",
    value: function atualizaTabela(dadosOriginais, DadosSimulados) {
      var newDados = [];
      var att = dadosOriginais.findIndex(function (partida) {
        return partida.confronto === DadosSimulados.confronto;
      });
      dadosOriginais[att].mandanteGols = DadosSimulados.mandanteGols;
      dadosOriginais[att].visitanteGols = DadosSimulados.visitanteGols;

      // console.log(dadosOriginais[att], 'dado bruto atualizado');
      return this.criaTabela(dadosOriginais);
    }
  }]);
}();

;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-color: rgb(17, 86, 102);
    --primary-color-darker: rgb(9, 48, 56);
    font-size: 62.5%;
}

*{
    box-sizing: border-box; 
    outline: 0;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--primary-color);
    font-family: sans-serif;
    font-size: 2.5rem;
}

p{
    margin: 0;
}

.container{
    max-width: 85rem;
    margin: 3rem auto;
    background-color:#fff;
    padding: 1rem;
    border-radius: 1rem;
    overflow-y: hidden;
    filter: none;
}

.container h1 {
    text-align: center;
    margin-top: 0; margin-bottom: 15px;
    border-bottom: 2px solid var(--primary-color);
}

.controller{
    margin-bottom: 1rem;
    align-items: center;
}

.buttons{
    display: flex; gap: 3px;

    margin-bottom: 1px;
    & button{
        height: 3rem;
        border: 1px solid black;
    };

    & .refreshButton{
    }
}

.matches{
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
}

.box{
    width: 30rem;
    background-color: rgb(241, 241, 241);
    border: 1px solid black;
    flex: 1 1 400px;
    padding: 1rem;

    align-items: center; padding: auto; 

    & .header{
        display: flex; flex-direction: column;
        text-align: center;
        margin-bottom: 1rem;

        & .data{
            font-size: 1.5rem;
        }
    }

    & .info{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        & img{
            padding: 0 1rem;
        }

        & input{
            width: 3rem; height: 3rem;
            font-size: 2rem;
            text-align: center;
            padding: 0; margin: auto;
        }

        & input:disabled{
            background-color: inherit;
            opacity: 100%;
            border: none;
            font-size: 3rem;
            color: black;
        }
    }
}

.container-tabela{
    display: flex;
    flex-direction: column;
}


table{
    border-collapse: collapse;

    text-align: center;

    & th{
        font-size: 2rem;
    };

    & td{
        align-items: center;
        padding: 0;
        border-bottom: 1px solid black;
        

        & p{
            font-size: 1.5rem;
        };
    };

    & img{
        width: 25px;
        margin-top: 6px;
        padding-left: 6px;
    }
}

.loader-circle {
    width: 100px; height: 100px;
    border-radius: 50%; border: 10px solid #fff;
    border-top-color: var(--primary-color-darker);
    animation: loader-circle 1s linear infinite;
  }
  
  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }


@media (max-width: 368px){
    
}

@media (min-width: 369px) and (max-width: 504px){



}

@media (min-width: 505px) and (max-width: 900px){

}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAEA;IACI,iCAAiC;IACjC,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;;IAEI,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sCAAsC;IACtC,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa,EAAE,mBAAmB;IAClC,6CAA6C;AACjD;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa,EAAE,QAAQ;;IAEvB,kBAAkB;IAClB;QACI,YAAY;QACZ,uBAAuB;IAC3B,CAAA;;IAEA;IACA;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,uBAAuB;IACvB,eAAe;IACf,aAAa;;IAEb,mBAAmB,EAAE,aAAa;;IAElC;QACI,aAAa,EAAE,sBAAsB;QACrC,kBAAkB;QAClB,mBAAmB;;QAEnB;YACI,iBAAiB;QACrB;IACJ;;IAEA;QACI,aAAa;QACb,6BAA6B;QAC7B,mBAAmB;;QAEnB;YACI,eAAe;QACnB;;QAEA;YACI,WAAW,EAAE,YAAY;YACzB,eAAe;YACf,kBAAkB;YAClB,UAAU,EAAE,YAAY;QAC5B;;QAEA;YACI,yBAAyB;YACzB,aAAa;YACb,YAAY;YACZ,eAAe;YACf,YAAY;QAChB;IACJ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,yBAAyB;;IAEzB,kBAAkB;;IAElB;QACI,eAAe;IACnB,CAAA;;IAEA;QACI,mBAAmB;QACnB,UAAU;QACV,8BAA8B;;;QAG9B;YACI,iBAAiB;QACrB,CAAA;IACJ,CAAA;;IAEA;QACI,WAAW;QACX,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI,YAAY,EAAE,aAAa;IAC3B,kBAAkB,EAAE,uBAAuB;IAC3C,6CAA6C;IAC7C,2CAA2C;EAC7C;;EAEA;IACE;MACE,oBAAoB;IACtB;IACA;MACE,yBAAyB;IAC3B;EACF;;;AAGF;;AAEA;;AAEA;;;;AAIA;;AAEA;;AAEA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n\r\n:root{\r\n    --primary-color: rgb(17, 86, 102);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n    font-size: 62.5%;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box; \r\n    outline: 0;\r\n}\r\n\r\ninput[type=\"number\"]::-webkit-outer-spin-button,\r\ninput[type=\"number\"]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family: sans-serif;\r\n    font-size: 2.5rem;\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n.container{\r\n    max-width: 85rem;\r\n    margin: 3rem auto;\r\n    background-color:#fff;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    overflow-y: hidden;\r\n    filter: none;\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-top: 0; margin-bottom: 15px;\r\n    border-bottom: 2px solid var(--primary-color);\r\n}\r\n\r\n.controller{\r\n    margin-bottom: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.buttons{\r\n    display: flex; gap: 3px;\r\n\r\n    margin-bottom: 1px;\r\n    & button{\r\n        height: 3rem;\r\n        border: 1px solid black;\r\n    };\r\n\r\n    & .refreshButton{\r\n    }\r\n}\r\n\r\n.matches{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: 1rem;\r\n}\r\n\r\n.box{\r\n    width: 30rem;\r\n    background-color: rgb(241, 241, 241);\r\n    border: 1px solid black;\r\n    flex: 1 1 400px;\r\n    padding: 1rem;\r\n\r\n    align-items: center; padding: auto; \r\n\r\n    & .header{\r\n        display: flex; flex-direction: column;\r\n        text-align: center;\r\n        margin-bottom: 1rem;\r\n\r\n        & .data{\r\n            font-size: 1.5rem;\r\n        }\r\n    }\r\n\r\n    & .info{\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        align-items: center;\r\n\r\n        & img{\r\n            padding: 0 1rem;\r\n        }\r\n\r\n        & input{\r\n            width: 3rem; height: 3rem;\r\n            font-size: 2rem;\r\n            text-align: center;\r\n            padding: 0; margin: auto;\r\n        }\r\n\r\n        & input:disabled{\r\n            background-color: inherit;\r\n            opacity: 100%;\r\n            border: none;\r\n            font-size: 3rem;\r\n            color: black;\r\n        }\r\n    }\r\n}\r\n\r\n.container-tabela{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\ntable{\r\n    border-collapse: collapse;\r\n\r\n    text-align: center;\r\n\r\n    & th{\r\n        font-size: 2rem;\r\n    };\r\n\r\n    & td{\r\n        align-items: center;\r\n        padding: 0;\r\n        border-bottom: 1px solid black;\r\n        \r\n\r\n        & p{\r\n            font-size: 1.5rem;\r\n        };\r\n    };\r\n\r\n    & img{\r\n        width: 25px;\r\n        margin-top: 6px;\r\n        padding-left: 6px;\r\n    }\r\n}\r\n\r\n.loader-circle {\r\n    width: 100px; height: 100px;\r\n    border-radius: 50%; border: 10px solid #fff;\r\n    border-top-color: var(--primary-color-darker);\r\n    animation: loader-circle 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes loader-circle {\r\n    0% {\r\n      transform: rotate(0);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n\r\n@media (max-width: 368px){\r\n    \r\n}\r\n\r\n@media (min-width: 369px) and (max-width: 504px){\r\n\r\n\r\n\r\n}\r\n\r\n@media (min-width: 505px) and (max-width: 900px){\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map