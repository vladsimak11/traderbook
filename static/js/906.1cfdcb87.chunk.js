"use strict";(self.webpackChunktraderbook=self.webpackChunktraderbook||[]).push([[906],{9906:function(n,e,r){r.r(e),r.d(e,{default:function(){return W}});var t,i,o,a,l,s,d,c,x,u,p,m,h,b,f,g,j,v=r(168),y=r(7924),Z=y.ZP.table(t||(t=(0,v.Z)(["\n  margin-top: 40px;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 25px 0;\n  font-family: sans-serif;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n"]))),k=y.ZP.tr(i||(i=(0,v.Z)(["\n  background-color: var(--light-green);\n  color: #ffffff;\n  text-align: center;\n"]))),P=y.ZP.th(o||(o=(0,v.Z)(["\n  padding: 12px 15px;\n  text-align: center;\n"]))),E=y.ZP.td(a||(a=(0,v.Z)(["\n  padding: 12px 15px;\n  text-align: center;\n"]))),C=y.ZP.tr(l||(l=(0,v.Z)(["\n  border-bottom: 1px solid #dddddd;\n\n  &:nth-of-type(even) {\n    background-color: #f3f3f3;\n  }\n\n  &:last-of-type {\n    border-bottom: 2px solid var(--dark-blue);\n  }\n"]))),q=y.ZP.button(s||(s=(0,v.Z)(["\n  background-color: var(--light-red);\n  color: white;\n  border-radius: 5px;\n  text-align: center;\n  padding: 7px;\n  border: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #da0505;\n  }\n\n"]))),w=r(4393),D=r(4420),z=function(n){return n.coins.items},I=function(n){return n.coins.isLoading},L=function(n){return n.filter.filter},S=r(184),T=function(){var n=(0,D.I0)(),e=(0,D.v9)(z),r=(0,D.v9)(L),t=function(){var n=r.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,S.jsxs)(Z,{children:[(0,S.jsx)("thead",{children:(0,S.jsxs)(k,{children:[(0,S.jsx)(P,{children:"Name Coin"}),(0,S.jsx)(P,{children:"Quantity Coins"}),(0,S.jsx)(P,{children:"Commission"}),(0,S.jsx)(P,{children:"Entry Point"}),(0,S.jsx)(P,{children:"Sum, USDT"}),(0,S.jsx)(P,{children:"Action"})]})}),(0,S.jsx)("tbody",{children:t.map((function(e){var r=e._id,t=e.name,i=e.quantity,o=e.commission,a=e.entry,l=e.sum;return(0,S.jsxs)(C,{children:[(0,S.jsx)(E,{children:t}),(0,S.jsx)(E,{children:i}),(0,S.jsx)(E,{children:o}),(0,S.jsx)(E,{children:a}),(0,S.jsx)(E,{children:l}),(0,S.jsx)(E,{children:(0,S.jsx)(q,{onClick:function(){return n((0,w.nd)(r))},children:"X"})})]},r)}))})]})},A=y.ZP.form(d||(d=(0,v.Z)(["\n  margin-bottom: 40px;\n"]))),F=y.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),N=y.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),Q=y.ZP.label(u||(u=(0,v.Z)(["\n  color: #f4a442;\n  font-size: 18px;\n  font-weight: 600;\n"]))),Y=y.ZP.input(p||(p=(0,v.Z)(["\n  background-color: var(--dark-gray);\n  border: 2px solid var(--dark-blue);\n  padding: 5px 10px 5px 10px;\n  border-radius: 5px;\n  color: var(--dark-blue);\n"]))),G=y.ZP.button(m||(m=(0,v.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: var(--dark-blue);\n  color: var(--light-green);\n  font-size: 22px;\n  padding: 5px 20px 5px 20px;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: transparent;\n    color: var(--dark-blue);\n    border: 2px solid var(--dark-blue);\n  }\n"]))),U=function(){var n=(0,D.I0)();return(0,S.jsxs)(A,{onSubmit:function(e){e.preventDefault();var r=e.target,t={name:r.elements.name.value,quantity:r.elements.quantity.value,commission:r.elements.commission.value,entry:r.elements.entry.value,sum:r.elements.sum.value};n((0,w.pG)(t)),r.reset()},children:[(0,S.jsxs)(F,{children:[(0,S.jsxs)(N,{children:[(0,S.jsx)(Q,{children:"Name Coin"}),(0,S.jsx)(Y,{type:"text",placeholder:"Enter name coin",name:"name",required:!0})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(Q,{children:"Quantity Coins"}),(0,S.jsx)(Y,{type:"text",placeholder:"Enter quantity coins",name:"quantity",required:!0})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(Q,{children:"Commission"}),(0,S.jsx)(Y,{type:"text",placeholder:"Enter commission",name:"commission",required:!0})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(Q,{children:"Entry Point"}),(0,S.jsx)(Y,{type:"text",placeholder:"Enter entry point",name:"entry",required:!0})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(Q,{children:"Sum"}),(0,S.jsx)(Y,{type:"text",placeholder:"Enter sum",name:"sum",required:!0})]})]}),(0,S.jsx)(G,{type:"submit",children:"Add values"})]})},X=y.ZP.label(h||(h=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 20px;\n"]))),_=y.ZP.input(b||(b=(0,v.Z)(["\n  width: 450px;\n  height: 25px;\n  border: 2px solid #c1c1c1;\n  padding: 5px 0px 5px 10px;\n  outline: none;\n\n  &:focus {\n    border: 2px solid #2EE59D;\n  }\n"]))),B=r(5821),H=function(){var n=(0,D.v9)(L),e=(0,D.I0)();return(0,S.jsxs)(X,{children:["Find contacts by name",(0,S.jsx)(_,{type:"text",placeholder:"Enter name coin",name:"filter",value:n,onChange:function(n){e((0,B.j)(n.target.value))}})]})},J=r(2791),K=r(4270),M=r(915),O=y.ZP.h1(f||(f=(0,v.Z)(["\n  text-align: center;\n  margin-bottom: 25px;\n"]))),R=y.ZP.h2(g||(g=(0,v.Z)(["\n  text-align: center;\n  margin-bottom: 25px;\n"]))),V=y.ZP.div(j||(j=(0,v.Z)(["\n  background-color: #EDEDED;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom: 8px solid var(--light-green);\n  border-radius: 10px;\n  margin-top: 80px;\n"])));function W(){var n=(0,D.I0)(),e=(0,D.v9)(I);return(0,J.useEffect)((function(){n((0,w.Yr)())}),[n]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(K.q,{children:(0,S.jsx)("title",{children:"Your Traderbook"})}),(0,S.jsxs)(V,{children:[(0,S.jsx)(O,{children:"Traderbook"}),(0,S.jsx)(U,{}),(0,S.jsx)("div",{children:e&&(0,S.jsx)(M.g,{})}),(0,S.jsx)(R,{children:"List Coins"}),(0,S.jsx)(H,{}),(0,S.jsx)(T,{})]})]})}}}]);
//# sourceMappingURL=906.1cfdcb87.chunk.js.map