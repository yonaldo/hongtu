const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('htzx_5star_heroes.json','utf8'));
const rankings = JSON.parse(fs.readFileSync('htzx_5star_rankings.json','utf8'));

const compact = heroes.map(h => ({
  id: h.id,
  name: h.name,
  faction: h.faction,
  cost: h.cost,
  troop: h.troop,
  troopEv: h.troopEvolution || '',
  force: h.attributes.force.base,
  forceG: h.attributes.force.growth,
  def: h.attributes.defense.base,
  defG: h.attributes.defense.growth,
  int: h.attributes.intellect.base,
  intG: h.attributes.intellect.growth,
  spd: h.attributes.speed.base,
  spdG: h.attributes.speed.growth,
  pol: h.attributes.politics.base,
  polG: h.attributes.politics.growth,
  cha: h.attributes.charm.base,
  chaG: h.attributes.charm.growth,
  msName: (h.mainSkill||{}).name||'',
  msQual: (h.mainSkill||{}).quality||'',
  msType: (h.mainSkill||{}).type||'',
  msProb: (h.mainSkill||{}).probability||'',
  msDesc: (h.mainSkill||{}).desc||'',
  ssName: (h.selfSkill||{}).name||'',
  ssQual: (h.selfSkill||{}).quality||'',
  ssType: (h.selfSkill||{}).type||'',
  ssDesc: (h.selfSkill||{}).desc||'',
  esName: (h.exchangeSkill||{}).name||'',
  esQual: (h.exchangeSkill||{}).quality||'',
  esType: (h.exchangeSkill||{}).type||'',
  esDesc: (h.exchangeSkill||{}).desc||'',
  bonds: (h.bonds||[]).map(b=>b.name),
  mainTag: ((h.tags||{}).mainSkill||'').split(' ').filter(Boolean),
  selfTag: ((h.tags||{}).selfSkill||'').split(' ').filter(Boolean),
  iconUrl: (h.images||{}).icon||'',
  bigUrl: (h.images||{}).big||'',
  total: h.attributes.force.base + h.attributes.defense.base + h.attributes.intellect.base 
         + h.attributes.speed.base + h.attributes.politics.base + h.attributes.charm.base
}));

fs.writeFileSync('heroes_data.js', 
  'const HEROES=' + JSON.stringify(compact) + ';const RANKINGS=' + JSON.stringify(rankings) + ';',
  'utf8'
);
console.log('OK: ' + compact.length + ' heroes, ' + (fs.statSync('heroes_data.js').size/1024).toFixed(1) + ' KB');
