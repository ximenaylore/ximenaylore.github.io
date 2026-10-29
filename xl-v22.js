/* Ximena + Lore | Alcances y glosario v2.2 */
(function(){
'use strict';
const cadence={
 retainer:['Una reunión cada dos semanas y revisión puntual de avances.','Una reunión semanal de trabajo y seguimiento de prioridades.','Una reunión semanal de dirección, coordinación asíncrona y revisión mensual de resultados.'],
 project:['Sesión inicial y revisión de un entregable acordado.','Kickoff y revisiones al cierre de cada hito.','Kickoff, seguimiento por hitos y coordinación de los equipos implicados.'],
 campaign:['Alineación de campaña y revisión antes de la salida.','Reuniones por fase: preparación, activación y cierre.','Dirección del programa, coordinación durante la activación y cierre de resultados.'],
 advisory:['Sesión de diagnóstico con conclusiones y próximos pasos.','Una sesión de trabajo y otra para revisar decisiones o materiales.','Acompañamiento estratégico por fases, con sesiones pactadas.']
};
const responsibilities=[
 'Tu equipo mantiene la ejecución y publicación. Nosotras damos dirección, criterio y feedback.',
 'Nosotras preparamos y coordinamos entregables acordados; tu equipo valida y facilita accesos, información y decisiones.',
 'Una consultora senior lidera el frente contratado y coordina el plan, las entregas y el seguimiento con tu equipo. No supone una persona exclusiva a jornada completa.'
];
const outcomes=[
 'Una prioridad, una entrega central y hasta dos indicadores claros.',
 'Un plan conectado, varias piezas o hitos pactados y entre dos y cuatro KPIs relevantes.',
 'Responsabilidad integral sobre el programa definido: plan de trabajo, entregas, coordinación y entre tres y cinco KPIs, según alcance.'
];
function info(model,i){return {rhythm:(cadence[model]||cadence.project)[i],owner:responsibilities[i],result:outcomes[i]};}
const originalPreview=renderScopePreview;
renderScopePreview=function(){
 originalPreview();
 const d=readQuote();
 document.querySelectorAll('#xl19-teaser-grid .xl19-teaser-card').forEach((card,i)=>{
  const m=info(d.model,i);
  const detail=document.createElement('div');detail.className='xl22-scope-details';
  [['Ritmo de trabajo',m.rhythm],['Quién ejecuta',m.owner],['Entregables y medición',m.result]].forEach(([label,value])=>{
    const wrap=document.createElement('div');
    const l=document.createElement('span');l.className='xl22-detail-label';l.textContent=label;
    const v=document.createElement('span');v.className='xl22-detail-value';v.textContent=value;
    wrap.append(l,v);detail.append(wrap);
  });
  const note=document.createElement('small');note.className='xl22-scope-note';note.textContent='Ejemplo de alcance, no compromiso cerrado. Lo ajustamos al presupuesto, capacidad y objetivos.';detail.append(note);
  card.append(detail);
 });
};
const originalRenderQuote=renderQuote;
renderQuote=function(result){
 originalRenderQuote(result);
 document.querySelectorAll('#tier-grid .tier').forEach((card,i)=>{
  const m=info(result.d.model,i);
  const details=document.createElement('div');details.className='xl22-full-details';
  [['Cómo trabajaríamos',m.rhythm],['Qué hacemos nosotras / qué haces tú',m.owner],['Qué recibirías y mediríamos',m.result]].forEach(([heading,content])=>{
   const row=document.createElement('div'),b=document.createElement('b'),span=document.createElement('span');
   b.textContent=heading;span.textContent=content;row.append(b,span);details.append(row);
  });
  card.append(details);
 });
};
const termData=[
{id:'ugc',name:'UGC · Contenido generado por usuarios',group:'creator',tag:'Creadores / Contenido',service:'ugc',teaser:'Piezas hechas por personas reales — o con esa estética — que muestran usos concretos.',definition:'UGC significa User-Generated Content. En marketing también se usa para piezas creadas por perfiles externos en un formato cercano, como una reseña o una demostración. Necesita briefs claros, derechos de uso y transparencia cuando hay compensación.',yes:'Funciona para productos demostrables, apps de consumo, belleza, hogar o casos con clientes reales. En B2B sirve si enseña un proceso o resultado verificable.',no:'Para una compra técnica con varios decisores, una reacción genérica en video no suele ser la prioridad.',with:'Social orgánico, campañas pagadas, testimonios y demostraciones de producto.',metric:'Calidad y uso del contenido; retención, clics y conversiones según canal.'},
{id:'influencer',name:'Influencer marketing',group:'creator',tag:'Creadores / Audiencias',service:'creators',teaser:'Llegar a una comunidad con una voz que ya tiene su atención y confianza.',definition:'Colaboraciones con creadores o especialistas que aportan credibilidad, distribución y un vínculo con una audiencia. La selección depende de afinidad, transparencia, derechos y objetivos, no solo del número de seguidores.',yes:'Para lanzamientos, marcas de consumo, comunidades nicho o incluso B2B con especialistas reconocidos.',no:'Si aún no sabes cuál es tu público o por qué debería elegirte, traer una figura conocida no resolverá la propuesta.',with:'UGC, PR, eventos, contenido y landing de campaña.',metric:'Alcance relevante, conversación, tráfico y conversiones atribuibles cuando existan.'},
{id:'pr',name:'Relaciones públicas · PR',group:'pr',tag:'Reputación / Confianza',service:'pr',teaser:'Dar razones de interés para que medios y terceros hablen de tu negocio.',definition:'PR trabaja la narrativa pública, las relaciones con periodistas y actores relevantes, la vocería y la reputación. No compra publicaciones ni garantiza cobertura editorial.',yes:'Cuando tienes un lanzamiento, una historia noticiable, experiencia para compartir o necesitas credibilidad en un mercado.',no:'Si necesitas ventas inmediatas y control total de un anuncio, PR no sustituye una campaña de conversión.',with:'Casos, voceros, LinkedIn, thought leadership y contenido propio.',metric:'Calidad de menciones, relevancia editorial, mensajes y oportunidades de relación.'},
{id:'earned',name:'Earned media',group:'pr',tag:'Medios / Credibilidad',service:'pr',teaser:'Visibilidad editorial que se gana, no un espacio que se compra.',definition:'Coberturas, entrevistas, menciones o recomendaciones que terceros publican por interés propio. Un pitch bien trabajado puede generar oportunidades, pero la decisión editorial siempre es externa.',yes:'Si hay hechos, datos o perspectivas relevantes y buscas confianza sostenida.',no:'Si necesitas controlar la fecha, el texto final o garantizar una cantidad exacta de notas.',with:'PR, investigación, vocería y casos de cliente.',metric:'Relevancia de los medios, profundidad de mensajes y repercusiones cualitativas.'},
{id:'thought',name:'Thought leadership',group:'pr',tag:'Autoridad / Liderazgo',service:'reputacion',teaser:'Construir una voz experta que aporta perspectivas propias, no frases vacías.',definition:'Consiste en hacer visible el conocimiento de founders, directivos o especialistas con artículos, conversaciones, entrevistas y análisis fundados en experiencia.',yes:'Muy útil en B2B, categorías emergentes, liderazgo ejecutivo y procesos de decisión largos.',no:'Si todavía no hay datos, ejemplos o una visión propia que defender.',with:'PR, LinkedIn, artículos, newsletter y eventos.',metric:'Conversaciones relevantes, invitaciones, referencias y engagement cualitativo.'},
{id:'social',name:'Social media y contenido editorial',group:'creator',tag:'Canales / Comunidad',service:'digital',teaser:'Estar presente en los canales que importan, no publicar en todos.',definition:'Estrategia, calendario, piezas y conversación alrededor de una audiencia definida. El formato debe adaptarse a la decisión de compra y la capacidad real del equipo.',yes:'Cuando clientes o comunidades descubren, comparan o hablan de tu marca en redes.',no:'Si el público está en otros canales y mantener redes dispersa el esfuerzo.',with:'UGC, creators, PR, contenido y pauta cuando procede.',metric:'Conversación cualitativa, alcance útil, tráfico y conversiones pertinentes.'},
{id:'gtm',name:'Go-to-market · GTM',group:'growth',tag:'Lanzamientos / Negocio',service:'gtm',teaser:'Llevar una propuesta al mercado con mensaje, canales y equipos alineados.',definition:'Alinea cliente ideal, propuesta de valor, diferencia competitiva, lanzamiento y activación comercial. Incluye la preparación, no únicamente el día en que se anuncia algo.',yes:'Si estrenas producto, entras a un mercado nuevo o necesitas explicar una propuesta compleja.',no:'Si aún no has validado qué problema resuelves y para quién: primero investiga.',with:'Product marketing, PR, contenidos, CRM y equipos comerciales.',metric:'Adopción, oportunidades, conversión y aprendizaje del mercado.'},
{id:'pmm',name:'Product marketing',group:'growth',tag:'Producto / Posicionamiento',service:'gtm',teaser:'Convertir características de producto en motivos claros para elegirlo.',definition:'Define mensajes por audiencia, diferenciación, casos de uso y materiales para ventas. Traduce funcionalidades a problemas y beneficios que el cliente reconoce.',yes:'Para tecnología, servicios B2B o productos con muchas funcionalidades o público diverso.',no:'Si el producto no cumple su promesa, el posicionamiento no sustituye cambios de producto.',with:'GTM, ventas, casos, web y PR.',metric:'Comprensión del mensaje, adopción, uso de materiales y señales de conversión.'},
{id:'crm',name:'CRM y email marketing',group:'growth',tag:'Relación / Conversión',service:'contenido',teaser:'Dar continuidad a relaciones sin saturar con mensajes.',definition:'CRM organiza la relación con prospectos y clientes; el email puede nutrir, informar y convertir cuando existe consentimiento y relevancia. No se trata de enviar más mensajes indiscriminados.',yes:'Para ciclos largos de compra, comunidad, leads captados y fidelización.',no:'Si no existen permiso o datos de calidad, es mejor arreglar la base antes.',with:'Contenido, eventos, GTM y automatización.',metric:'Respuestas, oportunidades útiles, activación y retención.'},
{id:'paid',name:'Paid media',group:'growth',tag:'Distribución / Publicidad',service:'digital',teaser:'Amplificar mensajes mediante inversión en plataformas o espacios publicitarios.',definition:'Campañas pagadas que distribuyen contenidos o anuncios a públicos definidos. El presupuesto de medios, la creatividad y la operación deben distinguirse de los honorarios de asesoría.',yes:'Si tienes una oferta, landing y medición razonablemente listas y quieres escalar.',no:'Si aún no está clara la propuesta o falla la experiencia después del clic.',with:'UGC, contenidos, landing, CRM y analítica.',metric:'Coste por resultado, calidad de leads, conversión y retorno cuando aplica.'},
{id:'seo',name:'SEO y GEO',group:'growth',tag:'Descubrimiento / Búsqueda',service:'contenido',teaser:'Ser una respuesta útil cuando alguien investiga soluciones como la tuya.',definition:'SEO trabaja la visibilidad en buscadores. GEO suele referirse a mejorar la claridad y estructura de contenidos para motores de respuesta y experiencias generativas, sin garantizar que una IA recomiende una marca.',yes:'Si los clientes investigan antes de comprar y puedes aportar contenido útil y comprobable.',no:'Si necesitas resultados comerciales de un día a otro sin una base de contenido.',with:'Web, casos, PR, contenido propio y experiencia de usuario.',metric:'Visibilidad verificable, tráfico relevante y oportunidades orgánicas.'},
{id:'events',name:'Field marketing y eventos',group:'growth',tag:'Experiencias / Relaciones',service:'eventos',teaser:'Transformar encuentros en conversaciones de negocio y comunidad.',definition:'Planear experiencias, encuentros o activaciones con objetivos claros, audiencia adecuada, contenidos y seguimiento posterior. El valor no está solo en la logística.',yes:'Cuando la confianza, una demo o hablar con expertos ayuda a decidir la compra.',no:'Si no hay público definido ni plan de seguimiento, el evento corre riesgo de quedarse en asistencia.',with:'PR, CRM, ventas, creators y contenido.',metric:'Asistencia relevante, reuniones, oportunidades y pipeline con atribución prudente.'}
];
const list=document.getElementById('xl22-terms');
if(!list)return;
const search=document.getElementById('xl22-search');
const empty=document.getElementById('xl22-empty');
let group='all';
function node(tag,cls,content){const e=document.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=content;return e;}
function renderTerms(){
 const q=search.value.trim().toLocaleLowerCase('es');
 const filtered=termData.filter(t=>(group==='all'||t.group===group)&&[t.name,t.tag,t.teaser,t.definition,t.yes,t.no,t.with].join(' ').toLocaleLowerCase('es').includes(q));
 list.replaceChildren();
 empty.hidden=filtered.length!==0;
 for(const t of filtered){
  const wrap=node('details','xl22-term');wrap.id='xl22-term-'+t.id;
  const summary=node('summary');const num=node('span','xl22-term-no',String(termData.indexOf(t)+1).padStart(2,'0'));
  const title=node('div','xl22-term-text');title.append(node('small','',t.tag),node('strong','',t.name),node('span','',t.teaser));
  const plus=node('span','xl22-term-plus','+');plus.setAttribute('aria-hidden','true');summary.append(num,title,plus);
  const body=node('div','xl22-term-body');body.append(node('p','xl22-term-definition',t.definition));
  const lanes=node('div','xl22-term-lanes');[['Cuándo sí te conviene',t.yes],['Cuándo no lo priorizaríamos',t.no]].forEach(([a,b])=>{const lane=node('div','xl22-term-lane');lane.append(node('b','',a),node('p','',b));lanes.append(lane);});body.append(lanes);
  const footer=node('div','xl22-term-footer');[['Se combina con',t.with],['Qué observaríamos',t.metric]].forEach(([a,b])=>{const d=node('div');d.append(node('b','',a),node('span','',b));footer.append(d);});body.append(footer);
  const cta=node('button','xl22-term-cta','Explorar esto para mi negocio ↗');cta.type='button';cta.addEventListener('click',()=>{
   const input=document.querySelector('input[name="service"][value="'+t.service+'"]');
   if(input)input.checked=true;
   navigate('diagnostico');gotoStep(2);
  });
  body.append(cta);wrap.append(summary,body);list.append(wrap);
 }
}
document.querySelectorAll('.xl22-filter').forEach(b=>b.addEventListener('click',()=>{
 group=b.dataset.group;document.querySelectorAll('.xl22-filter').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderTerms();
}));
search.addEventListener('input',renderTerms);
renderTerms();
if(step===3)renderScopePreview();
if(step===4&&lastResult)renderQuote(lastResult);
})();