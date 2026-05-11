import urllib.request, json

req = urllib.request.Request(
    'https://war.qq.com/act/a20200914wxpx/wujiang.json',
    headers={'User-Agent': 'Mozilla/5.0'}
)
resp = urllib.request.urlopen(req, timeout=30)
data = json.loads(resp.read().decode('utf-8'))
heroes = data['wujiang']

output = []
for h in heroes:
    hero = {
        'id': h['wjid_b9'],
        'name': h['wjmc_4b'],
        'faction': h.get('slgs_ce', ''),
        'cost': h.get('jl_28', 0),
        'troop': h.get('wjbz_cd', ''),
        'force': h.get('wlzjcsz_89', 0),
        'forceG': h.get('wlzzcsz_7e', 0),
        'def': h.get('fyzjcsz_37', 0),
        'defG': h.get('fyzzcsz_01', 0),
        'int': h.get('zlzjcsz_64', 0),
        'intG': h.get('zlzzcsz_dd', 0),
        'spd': h.get('gsjcsz_53', 0),
        'spdG': h.get('gszcsz_0b', 0),
        'pol': h.get('zzjcsz_d7', 0),
        'polG': h.get('zzzcsz_d9', 0),
        'cha': h.get('ljcsz_87', 0),
        'chaG': h.get('lzcsz_78', 0),
        'msName': h.get('zjjwjmc_17', ''),
        'msQual': h.get('zjjwjdj_c9', ''),
        'msType': h.get('zjjjnlx_be', ''),
        'msProb': '',
        'msDesc': h.get('zjjwjsm_13', ''),
        'ssName': h.get('wjmc_17', ''),
        'ssQual': h.get('wjdj_c9', ''),
        'ssType': h.get('jnlx_be', ''),
        'ssDesc': h.get('wjsm_13', ''),
        'esName': '',
        'esQual': '',
        'esType': '',
        'esDesc': '',
        'bonds': [],
        'mainTag': [],
        'selfTag': [],
        'iconUrl': h.get('wjxtxzfw', ''),
        'bigUrl': h.get('wjbiggwpic', ''),
    }
    hero['total'] = round(
        hero['force'] + hero['def'] + hero['int'] +
        hero['spd'] + hero['pol'] + hero['cha'], 1
    )
    output.append(hero)

output.sort(key=lambda x: x['id'])

with open('C:/Users/DELL/.qclaw/workspace-agent-3a84ad15/hongtu-repo/heroes_data.js', 'w', encoding='utf-8') as f:
    f.write('const HEROES = ')
    json.dump(output, f, ensure_ascii=False, indent=2)
    f.write(';\n')

from collections import Counter
print('Saved heroes_data.js with', len(output), 'heroes')
cost_dist = Counter(h['cost'] for h in output)
print('Cost distribution:', dict(sorted(cost_dist.items())))

s5 = len([h for h in output if h['cost'] >= 8])
s4 = len([h for h in output if 6 <= h['cost'] <= 7])
s3 = len([h for h in output if h['cost'] <= 5])
print('5-star (cost>=8):', s5)
print('4-star (cost 6-7):', s4)
print('3-star (cost<=5):', s3)

# Show a few 3-star names
print('\n3-star heroes:')
for h in output:
    if h['cost'] <= 5:
        print('  [%d] %s (cost:%d)' % (h['id'], h['name'], h['cost']))