(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),u=n(8),i=n(9),o=n(11),j=n(10),l=(n(16),n(17),n(0)),f=function(){return Object(l.jsx)("div",{className:"Header",children:"Tic Tac Toe"})},d=n(3);var b=n(2);n(19);var v=function(e){var t=e.text,n=e.whenClicked;return Object(l.jsx)("button",{className:"button",onClick:n,children:t})},O=(n(20),function(e){var t=e.playerName;return Object(l.jsx)("div",{className:"PlayerName",children:t})}),m=(n(21),function(e){var t=e.score;return Object(l.jsx)("div",{className:"ScoreHolder",children:t})}),x=(n(22),function(e){var t=e.gameStatus,n=e.winner,r=e.scores;return Object(l.jsxs)("div",{className:"PlayersGrid",children:[Object(l.jsx)(O,{playerName:"Ben"}),Object(l.jsx)("div",{className:"GameStatus",children:0===t?"Lets Play!!":1===t?"Continue":0===n?"Draw":"Winner = ".concat(-1===n?"Mohan":"Ben")}),Object(l.jsx)(O,{playerName:"Mohan"}),Object(l.jsx)(m,{score:r[0]}),Object(l.jsx)(m,{score:r[1]})]})});function h(e,t,n){var r=n.gameStatus,c=n.gridValues,a=n.moves,s=t.setGameStatus,u=t.changeGridValues,i=t.setMoves;if(!function(e){return-1===e}(r)){(function(e){return 0===e})(r)&&s(1);var o,j=function(e,t){return t.findIndex((function(t){return t===e.target}))}(e,Object(b.a)(function(e){return Array.from(e.target.parentElement.children)}(e))),l=(o=j,Math.floor(o/3)),f=function(e){return e%3}(j);if(!function(e,t,n){return 0!==e[t][n]}(c,l,f)&&function(e){return"PlayingGridCell"===e.target.className}(e)){var d=function(e,t,n,r){var c=r%2===0?1:-1,a=Object(b.a)(e);return a[t][n]=c,a}(c,l,f,a);i(a+1),u(d)}}}var g=function(e){return 0===e?"-":1===e?"X":-1===e?"O":void 0},N=(n(23),function(e){var t=e.value;return Object(l.jsx)("div",{className:"PlayingGridCell",children:g(t)})}),S=(n(24),function(e){var t=e.gridValues,n=e.gameStatus,r=e.moves,c={changeGridValues:e.changeGridValues,setGameStatus:e.setGameStatus,setMoves:e.setMoves},a={gridValues:t,gameStatus:n,moves:r};return Object(l.jsx)("div",{className:"PlayingGrid",onClick:function(e){return h(e,c,a)},children:t.map((function(e,t){return e.map((function(e,n){return Object(l.jsx)(N,{value:e},"".concat(t,"_").concat(n))}))}))})}),p=(n(25),function(){var e=Object(r.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(d.a)(a,2),u=s[0],i=s[1],o=Object(r.useState)([0,0]),j=Object(d.a)(o,2),f=j[0],O=j[1],m=Object(r.useState)([[0,0,0],[0,0,0],[0,0,0]]),h=Object(d.a)(m,2),g=h[0],N=h[1],p=Object(r.useState)(0),G=Object(d.a)(p,2),y=G[0],C=G[1];return Object(r.useEffect)((function(){!function(e,t,n,r,c,a,s){if(1===e){r(1);var u=Object(b.a)(t);u[0]++,c(u),a(-1),s(0)}else if(-1===e){r(-1);var i=Object(b.a)(t);i[1]++,c(i),a(-1),s(0)}else 9===n&&(r(0),a(-1),s(0))}(function(e){for(var t=0;t<3;t++){for(var n=0,r=0,c=0;c<3;c++)n+=e[t][c],r+=e[c][t];if(3===n)return 1;if(-3===n)return-1;if(3===r)return 1;if(-3===r)return-1}var a=e[0][0]+e[1][1]+e[2][2];if(3===a)return 1;if(-3===a)return-1;var s=e[0][2]+e[1][1]+e[2][0];return 3===s?1:-3===s?-1:0}(g),f,y,i,O,c,C)}),[g]),Object(l.jsxs)("div",{className:"GameBox",children:[Object(l.jsx)(x,{gameStatus:n,winner:u,scores:f}),Object(l.jsx)(S,{gridValues:g,changeGridValues:N,gameStatus:n,setGameStatus:c,moves:y,setMoves:C}),Object(l.jsx)("div",{className:"ButtonHolder",children:Object(l.jsx)(v,{text:"Reset",whenClicked:function(){return function(e,t,n,r,c){(function(e){return 0===e})(c)||(e(0),t(0),r(0),n([[0,0,0],[0,0,0],[0,0,0]]))}(c,i,N,C,n)}})})]})}),G=(n(26),function(){return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsx)(f,{}),Object(l.jsx)(p,{})]})}),y=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(G,{})})}}]),n}(c.a.Component);s.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.85c2a15a.chunk.js.map