document.addEventListener('DOMContentLoaded',function(){
var SAL='Nossos salgadinhos pesam em média 20 a 25g, são sequinhos e crocantes, com massa levinha e recheio super saboroso.';
/* Para usar uma foto oficial, preencha o campo i com o caminho da imagem. */
var P=[
{n:'Kit Festa P – 10 a 12 pessoas',p:199,c:'kit dest',k:1,d:'É necessário escolher o sabor do bolo nos adicionais. Não é possível alterar os itens do kit.',l:['1 bolo retangular (10 a 12 fatias)','60 salgados fritos (coxinha tradicional, bolinha de queijo e risoles de presunto e queijo)','20 mini churros de doce de leite','20 docinhos (10 brigadeiros e 10 beijinhos)','1 vela faísca','1 refrigerante de 1,5 L']},
{n:'300 Salgados com SUPER DESCONTO',p:237.63,o:267,c:'dest promo',d:'Salgadinhos deliciosos para comemorar com quem você ama!'},
{n:'200 Salgados',p:160.2,o:178,c:'dest promo',d:'200 salgados variados, com massa macia e recheios saborosos, ideais para servir seus convidados em festas e eventos.'},
{n:'150 Salgados com DESCONTO',p:120.15,o:133.5,c:'dest promo',d:'Salgadinhos fresquinhos, sequinhos e crocantes. Escolha os sabores.'},
{n:'20 Mini Coxinhas',p:17.99,c:'mais',d:'Nada supera a clássica! 20 coxinhas douradinhas, ultra crocantes por fora e com recheio bem temperado por dentro. O tamanho ideal para matar sua fome ou compartilhar com quem você ama.'},
{n:'Surpresa de Uva',p:12,c:'mais',d:'Delícia no pote: creme de Ninho, uvas crocantes e sem sementes e chocolate premium.'},
{n:'100 Salgados',p:89,c:'sal',d:SAL},
{n:'50 Salgados',p:45,c:'dest sal',d:SAL},
{n:'30 Salgados',p:27,c:'dest sal',d:SAL+' O combo contém 10 coxinhas, 10 bolinhas de queijo e 10 mini quibes.'},
{n:'25 Mini Pastéis de Queijo',p:29.99,c:'past'},
{n:'25 Mini Pastéis de Frango',p:29.99,c:'past'},
{n:'25 Mini Pastéis de Carne',p:29.99,c:'past'},
{n:'15 Mini Pastéis de Calabresa',p:29.99,c:'past'},
{n:'Quiche 3 Queijos',p:14.9,c:'quiche',d:'Massa leve e crocante, creme super macio de mussarela, o legítimo Catupiry Original e um toque marcante de queijo gorgonzola. Uma explosão de sabores que derrete na boca!'},
{n:'Quiche Alho-Poró, Calabresa e Bacon',p:14.9,c:'quiche',d:'Massa leve e crocante recheada com um creme super macio, calabresa defumada moída, cubinhos de bacon crocante e a leveza do alho-poró refogado.'},
{n:'15 Coxinhas + 1 Coca 350ml',p:19.99,c:'combo',d:'São 15 deliciosas coxinhas e 1 Coca-Cola geladinha.'},
{n:'15 Bolinhas de Queijo + 1 Coca 350ml',p:19.99,c:'combo',d:'15 bolinhas de queijo deliciosas acompanhadas de uma Coca-Cola geladinha.'},
{n:'Coxinha de morango',p:15,c:'dest doce'},
{n:'Pudim',p:15,c:'doce',d:'Doce clássico, cremoso e feito com ingredientes de alta qualidade.'},
{n:'Brownie doce de leite',p:15,c:'doce'},
{n:'50 Mini Churros',p:45,c:'doce',d:'Mini churros de doce de leite.'},
{n:'100 Mini Churros',p:89,c:'doce',d:'Mini churros sabor doce de leite.'},
{n:'Bolo de pote Brigadeiro',p:16,c:'pote',d:'Um perfeito e cremoso brigadeiro de panela feito na medida certa para agradar seu paladar.'},
{n:'Bolo de pote Cenoura com Chocolate',p:16,c:'pote'},
{n:'Bolo Prestígio',p:99,c:'bolo'},
{n:'Coca-Cola 350ml',p:8,c:'refri'},
{n:'Pepsi Cola 350ml',p:8,c:'refri'},
{n:'Itubaína Tutti Frutti Retrô 350ml',p:8,c:'refri'}
];
var IM={
 "pudim": "assets/img/produtos/doces/pudim.jpg",
 "coxinha-morango": "assets/img/produtos/doces/coxinha-morango.jpg",
 "brownie": "assets/img/produtos/doces/brownie.jpg",
 "churros-50": "assets/img/produtos/churros/churros-50.jpg",
 "mini-coxinhas": "assets/img/produtos/mini-coxinhas/mini-coxinhas.jpg",
 "surpresa-uva": "assets/img/produtos/doces/surpresa-uva.jpg",
 "salgados-200": "assets/img/produtos/salgados/salgados-200.jpg",
 "salgados-300": "assets/img/produtos/salgados/salgados-300.jpg",
 "salgados-150": "assets/img/produtos/salgados/salgados-150.jpg",
 "salgados-100": "assets/img/produtos/salgados/salgados-100.jpg",
 "pastel-queijo": "assets/img/produtos/mini-pasteis/pastel-queijo.jpg",
 "pastel-frango": "assets/img/produtos/mini-pasteis/pastel-frango.jpg",
 "pastel-carne": "assets/img/produtos/mini-pasteis/pastel-carne.jpg",
 "combo-coxinhas": "assets/img/produtos/combos/combo-coxinhas.jpg",
 "combo-bolinhas": "assets/img/produtos/combos/combo-bolinhas.jpg",
 "pote-brigadeiro": "assets/img/produtos/bolos/pote-brigadeiro.jpg",
 "pote-cenoura": "assets/img/produtos/bolos/pote-cenoura.jpg",
 "prestigio": "assets/img/produtos/bolos/prestigio.jpg",
 "coca": "assets/img/produtos/bebidas/coca.jpg",
 "pepsi": "assets/img/produtos/bebidas/pepsi.jpg",
 "itubaina": "assets/img/produtos/bebidas/itubaina.jpg",
 "kit-festa": "assets/img/produtos/kits-festa/kit-festa.jpg",
 "quiche-3q": "assets/img/produtos/quiches/quiche-3q.jpg",
 "quiche-alho": "assets/img/produtos/quiches/quiche-alho.jpg"
};
var M={"Kit Festa P – 10 a 12 pessoas": "kit-festa", "300 Salgados com SUPER DESCONTO": "salgados-300", "200 Salgados": "salgados-200", "150 Salgados com DESCONTO": "salgados-150", "20 Mini Coxinhas": "mini-coxinhas", "Surpresa de Uva": "surpresa-uva", "100 Salgados": "salgados-100", "50 Salgados": "salgados-100", "30 Salgados": "salgados-100", "25 Mini Pastéis de Queijo": "pastel-queijo", "25 Mini Pastéis de Frango": "pastel-frango", "25 Mini Pastéis de Carne": "pastel-carne", "15 Mini Pastéis de Calabresa": "pastel-carne", "Quiche 3 Queijos": "quiche-3q", "Quiche Alho-Poró, Calabresa e Bacon": "quiche-alho", "15 Coxinhas + 1 Coca 350ml": "combo-coxinhas", "15 Bolinhas de Queijo + 1 Coca 350ml": "combo-bolinhas", "Coxinha de morango": "coxinha-morango", "Pudim": "pudim", "Brownie doce de leite": "brownie", "50 Mini Churros": "churros-50", "100 Mini Churros": "churros-50", "Bolo de pote Brigadeiro": "pote-brigadeiro", "Bolo de pote Cenoura com Chocolate": "pote-cenoura", "Bolo Prestígio": "prestigio", "Coca-Cola 350ml": "coca", "Pepsi Cola 350ml": "pepsi", "Itubaína Tutti Frutti Retrô 350ml": "itubaina"};
P.forEach(function(p){if(M[p.n])p.i=IM[M[p.n]]});
var F=[['dest','Destaques'],['mais','Mais pedidos'],['promo','Promocionais'],['kit','Kit Festa'],['sal','Salgados'],['past','Mini Pastéis'],['quiche','Quiches'],['combo','Combos'],['doce','Doces'],['pote','Bolos de Pote'],['bolo','Bolos de Festa'],['refri','Refrigerantes']];
var fm=function(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})};
var g=document.getElementById('pgrid'),fl=document.getElementById('filtros');
function show(f){
 fl.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.f===f)});
 g.innerHTML='';
 P.forEach(function(p,ix){
  if(f!=='todos'&&p.c.split(' ').indexOf(f)<0)return;
  var a=document.createElement('article');a.className='pc'+(p.o?' promo':'')+(p.k?' kit':'');
  var ph=p.i?'<img src="'+p.i+'" alt="'+p.n+'" loading="lazy">':'<div class="ph" role="img" aria-label="Foto de '+p.n+' em breve"><svg aria-hidden="true"><use href="#flor"/></svg><span>Foto oficial em breve</span></div>';
  var tag=p.o?'<span class="tag">OFERTA −'+Math.round((1-p.p/p.o)*100)+'%</span>':(p.k?'<span class="tag">KIT FESTA</span>':'');
  var pr=(p.o?'<s>'+fm(p.o)+'</s>':'')+fm(p.p);
  var li=p.l?'<ul>'+p.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>':'';
  a.innerHTML=tag+ph+'<div class="tx"><h3>'+p.n+'</h3>'+(p.d?'<p class="d">'+p.d+'</p>':'<p class="d"></p>')+li+'<div class="pr">'+pr+'</div><div class="ctl" data-c="'+ix+'">'+ctl(ix)+'</div></div>';
  g.appendChild(a);
 });
}
F.forEach(function(x){var b=document.createElement('button');b.type='button';b.dataset.f=x[0];b.textContent=x[1];b.addEventListener('click',function(){show(x[0])});fl.appendChild(b)});
var UNN={itaquera:'Dona Nina Itaquera',guaianases:'Dona Nina Guaianases'},cart={},unit='',PN={};
P.forEach(function(p,i){PN[p.n]=i});
try{var sv=JSON.parse(localStorage.getItem('dn_cart')||'null');if(sv){Object.keys(sv.q||{}).forEach(function(n){var q=parseInt(sv.q[n],10);if(PN[n]!==undefined&&q>0)cart[n]=Math.min(q,99)});if(UNN[sv.u])unit=sv.u}}catch(e){}
var $=function(i){return document.getElementById(i)};
var nm=function(v){return fm(v).replace(/\u00a0/g,' ')};
var sub=function(x){return Math.round(x.p.p*x.q*100)/100};
function items(){return Object.keys(cart).map(function(n){return{i:PN[n],p:P[PN[n]],q:cart[n]}})}
function total(){return Math.round(items().reduce(function(s,x){return s+sub(x)},0)*100)/100}
function count(){return items().reduce(function(s,x){return s+x.q},0)}
function ctl(i){var p=P[i],q=cart[p.n]||0;
 if(!q)return '<button class="btn" type="button" data-add="'+i+'">Adicionar ao carrinho</button>';
 return '<div class="step"><button type="button" aria-label="Diminuir quantidade" data-dec="'+i+'">−</button><span aria-live="polite">'+q+'</span><button type="button" aria-label="Aumentar quantidade" data-inc="'+i+'">+</button></div><div class="sub">'+nm(p.p)+' cada · Subtotal: '+nm(Math.round(p.p*q*100)/100)+'</div>'}
function setQ(i,q){var n=P[i].n;q=Math.min(99,q);if(q<1)delete cart[n];else cart[n]=q;upd()}
function upd(){
 try{localStorage.setItem('dn_cart',JSON.stringify({q:cart,u:unit}))}catch(e){}
 var a=document.activeElement,box=a&&a.closest?a.closest('[data-c]'):null,k=box?box.dataset.c:null;
 g.querySelectorAll('[data-c]').forEach(function(el){el.innerHTML=ctl(el.dataset.c)});
 if(k!==null){var nb=g.querySelector('[data-c="'+k+'"] [data-inc]')||g.querySelector('[data-c="'+k+'"] button');if(nb)nb.focus()}
 var c=count(),t=total();
 document.body.classList.toggle('hascart',c>0);
 $('cnt').textContent=c;$('cnt').hidden=!c;
 $('cbar').hidden=!c;$('cbar').textContent='Ver carrinho • '+c+(c===1?' item':' itens')+' • '+nm(t);
 if($('cart').open&&!$('cv1').hidden)renderCart();
}
function renderCart(){
 var it=items(),has=it.length>0;
 $('clist').innerHTML=has?it.map(function(x){return '<div class="ci">'+(x.p.i?'<img src="'+x.p.i+'" alt="'+x.p.n+'">':'<span></span>')+'<div class="cm"><b>'+x.p.n+'</b><span>'+nm(x.p.p)+' cada</span><div class="step"><button type="button" aria-label="Diminuir quantidade" data-cdec="'+x.i+'"'+(x.q<2?' disabled':'')+'>−</button><span>'+x.q+'</span><button type="button" aria-label="Aumentar quantidade" data-cinc="'+x.i+'">+</button></div></div><div class="cr"><b>'+nm(sub(x))+'</b><button class="rm" type="button" data-rm="'+x.i+'">Remover</button></div></div>'}).join(''):'<p style="padding:24px 0">Seu carrinho está vazio. Escolha seus favoritos no cardápio e eles aparecem aqui.</p><button class="btn" type="button" data-shut="1">Ver cardápio</button>';
 $('unf').hidden=!has;$('cf1').hidden=!has;$('tt').textContent=nm(total());
 document.querySelectorAll('input[name=un]').forEach(function(r){r.checked=r.value===unit});
}
function showV(n){$('cv1').hidden=n!==1;$('cv2').hidden=n!==2;$('ct').textContent=n===1?'Seu pedido':'Como você deseja finalizar seu pedido? 💗'}
function openCart(){showV(1);renderCart();var c=$('cart');if(c.showModal)c.showModal();else c.setAttribute('open','')}
function shut(){$('cart').close()}
function finalizar(){
 var it=items();if(!it.length)return;
 if(!unit){$('err').hidden=false;var f=document.querySelector('input[name=un]');if(f)f.focus();return}
 var U=window.UN[unit],lab=unit==='itaquera'?'Itaquera':'Guaianases';
 var ln=it.map(function(x){return '- '+x.q+'x '+x.p.n+' ('+nm(x.p.p)+' cada) — '+nm(sub(x))});
 var msg='Olá! Gostaria de fazer um pedido na Dona Nina.\n\nUnidade: '+lab+'\n\nMeu pedido:\n\n'+ln.join('\n')+'\n\nTotal: '+nm(total())+'\n\nGostaria de confirmar meu pedido. Obrigado(a)!';
 $('owa').href=U.w+'?text='+encodeURIComponent(msg);$('oif').href=U.i;
 $('un2').textContent=UNN[unit];
 $('rs').innerHTML=it.map(function(x){return '<div class="rl"><span>'+x.q+'x '+x.p.n+'</span><b>'+nm(sub(x))+'</b></div>'}).join('')+'<div class="tot" style="margin-top:10px"><span>Total</span><span>'+nm(total())+'</span></div>';
 showV(2);
}
g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var d=b.dataset;
 if(d.add!==undefined)setQ(+d.add,1);
 else if(d.inc!==undefined)setQ(+d.inc,(cart[P[+d.inc].n]||0)+1);
 else if(d.dec!==undefined)setQ(+d.dec,(cart[P[+d.dec].n]||0)-1)});
$('cart').addEventListener('click',function(e){
 if(e.target===this){shut();return}
 var b=e.target.closest('button');if(!b)return;var d=b.dataset;
 if(d.cinc!==undefined)setQ(+d.cinc,(cart[P[+d.cinc].n]||0)+1);
 else if(d.cdec!==undefined){var q=cart[P[+d.cdec].n]||0;if(q>1)setQ(+d.cdec,q-1)}
 else if(d.rm!==undefined)setQ(+d.rm,0);
 else if(d.shut!==undefined)shut()});
document.querySelectorAll('input[name=un]').forEach(function(r){r.addEventListener('change',function(){unit=r.value;$('err').hidden=true;upd()})});
$('cartbtn').addEventListener('click',openCart);$('cbar').addEventListener('click',openCart);
$('cx').addEventListener('click',shut);$('cont').addEventListener('click',shut);
$('fin').addEventListener('click',finalizar);$('back').addEventListener('click',function(){showV(1);renderCart()});
upd();
show('dest');
});
