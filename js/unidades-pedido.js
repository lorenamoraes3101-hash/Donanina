(function(){
var U={
 itaquera:{n:'Salgados Dona Nina – Itaquera',i:'https://www.ifood.com.br/delivery/sao-paulo-sp/dona-nina---itaquera-itaquera/317d56a5-995c-4950-bf67-3d0e1361fb05?utm_medium=share',w:'https://wa.me/5511957451288'},
 guaianases:{n:'Salgados Dona Nina – Guaianases',i:'https://www.ifood.com.br/delivery/sao-paulo-sp/salgados-dona-nina-vila-princesa-isabel/5ccbc99d-17be-4288-ba12-721ed243c6ef?utm_medium=share',w:'https://wa.me/5511946622613'}};
window.UN=U;
var d=document.getElementById('dlg'),s1=document.getElementById('s1'),s2=document.getElementById('s2');
function reset(){s1.hidden=false;s2.hidden=true}
var prod='';
function abrir(p){prod=typeof p==='string'?p:'';document.getElementById('dt').textContent=prod?'Quero pedir: '+prod:'Faça seu pedido';reset();if(d.showModal)d.showModal();else d.setAttribute('open','')}
window.pedir=abrir;
document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',abrir)});
document.querySelectorAll('[data-u]').forEach(function(b){b.addEventListener('click',function(){
 var u=U[b.dataset.u];
 document.getElementById('un').textContent=u.n+': como você prefere pedir?';
 var m='Olá, Dona Nina! '+(prod?'Quero pedir: '+prod+'.':'Quero fazer um pedido.');
 document.getElementById('l-if').href=u.i;document.getElementById('l-wa').href=u.w+'?text='+encodeURIComponent(m);
 s1.hidden=true;s2.hidden=false;
})});
document.getElementById('voltar').addEventListener('click',reset);
document.getElementById('fechar').addEventListener('click',function(){d.close()});
d.addEventListener('click',function(e){if(e.target===d)d.close()});
})();
