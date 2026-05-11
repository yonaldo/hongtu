import urllib.request, json

req = urllib.request.Request(
    'https://war.qq.com/act/a20200914wxpx/wujiang.json',
    headers={'User-Agent': 'Mozilla/5.0'}
)
resp = urllib.request.urlopen(req, timeout=30)
data = json.loads(resp.read().decode('utf-8'))

all_heroes = data['wujiang']
print('Total heroes:', len(all_heroes))

# Check first hero structure
print('\nFirst hero keys:')
for k, v in list(all_heroes[0].items()):
    print('  %s: %s' % (k, str(v)[:100]))

# Save to local file
with open('C:/Users/DELL/.qclaw/workspace-agent-3a84ad15/hongtu-repo/all_heroes_data.js', 'w', encoding='utf-8') as f:
    f.write('const ALL_HEROES = ')
    json.dump(all_heroes, f, ensure_ascii=False, indent=2)
    f.write(';\n')
print('\nSaved all_heroes_data.js')