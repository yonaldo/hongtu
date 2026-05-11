import urllib.request
import re

req = urllib.request.Request(
    'https://war.qq.com/a20200818web/generallist.shtml',
    headers={'User-Agent': 'Mozilla/5.0'}
)
resp = urllib.request.urlopen(req, timeout=15)
html = resp.read()
text = html.decode('gbk', errors='replace')
print('GBK decode OK, length:', len(text))

# Find script src
for m in re.finditer(r'src=["\']([^"\']+\.js)["\']', text[:8000]):
    print('JS:', m.group(1))

# Find data URLs
for m in re.finditer(r'(https?://[^\s"\']+\.(?:js|json))', text[:10000]):
    print('URL:', m.group(1))

# Find API endpoints
for m in re.finditer(r'["\']([a-z][a-zA-Z]+)["\']', text[:10000]):
    pass

# Look for wujiang data source
for line in text.split('\n'):
    if 'wujiang' in line.lower() or 'generaldata' in line.lower() or 'general_list' in line.lower():
        print('DATA LINE:', line[:300])

# Find all script URLs
print('\n=== SCRIPTS ===')
for m in re.finditer(r'src=["\']([^"\']+\.js)["\']', text):
    print('JS:', m.group(1))