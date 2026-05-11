with open('C:/Users/DELL/.qclaw/workspace-agent-3a84ad15/hongtu-repo/index.html', 'rb') as f:
    data = f.read()

footer_end = data.find(b'</div>', data.find(b'<div class="footer">')) + 6

battle_html = (
    b'\n\n<!-- ========== \xe6\x88\x98\xe6\x96\x97\xe6\xa8\xa1\xe6\x8b\x9f ========== -->\n'
    b'<div id="tab-battle" class="content">\n'
    b'  <div class="battle-teams">\n'
    b'    <div class="battle-team-panel">\n'
    b'      <div class="battle-team-title battle-team-a">\xe6\x94\xbb\xe5\x91\x8a A</div>\n'
    b'      <div class="battle-slot-row">\n'
    b'        <div class="battle-slot" id="bs-slot-a0" onclick="openBattleHeroPicker(\'a\',0)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe4\xb8\xbb\xe5\xb0\x86</span></div>\n'
    b'        <div class="battle-slot" id="bs-slot-a1" onclick="openBattleHeroPicker(\'a\',1)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe5\x89\xaf\xe5\xb0\x861</span></div>\n'
    b'        <div class="battle-slot" id="bs-slot-a2" onclick="openBattleHeroPicker(\'a\',2)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe5\x89\xaf\xe5\xb0\x862</span></div>\n'
    b'      </div>\n'
    b'      <div class="battle-skill-row" id="bs-skills-a"></div>\n'
    b'    </div>\n'
    b'    <div class="battle-vs-label">VS</div>\n'
    b'    <div class="battle-team-panel">\n'
    b'      <div class="battle-team-title battle-team-b">\xe9\x98\xb2\xe5\xae\x88 B</div>\n'
    b'      <div class="battle-slot-row">\n'
    b'        <div class="battle-slot" id="bs-slot-b0" onclick="openBattleHeroPicker(\'b\',0)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe4\xb8\xbb\xe5\xb0\x86</span></div>\n'
    b'        <div class="battle-slot" id="bs-slot-b1" onclick="openBattleHeroPicker(\'b\',1)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe5\x89\xaf\xe5\xb0\x861</span></div>\n'
    b'        <div class="battle-slot" id="bs-slot-b2" onclick="openBattleHeroPicker(\'b\',2)"><span class="battle-slot-add">+</span><span class="battle-slot-label">\xe5\x89\xaf\xe5\xb0\x862</span></div>\n'
    b'      </div>\n'
    b'      <div class="battle-skill-row" id="bs-skills-b"></div>\n'
    b'    </div>\n'
    b'  </div>\n'
    b'  <div class="battle-action">\n'
    b'    <button class="battle-start-btn" id="battleStartBtn" onclick="startBattle()" disabled>\xe6\x94\xbb\xe5\x91\x8a \xe5\xbc\x80\xe5\xa7\x8b</button>\n'
    b'    <button class="battle-reset-btn" onclick="resetBattle()">\xe9\x87\x8d\xe7\xbd\xae</button>\n'
    b'  </div>\n'
    b'  <div class="battle-result" id="battleResult" style="display:none;"></div>\n'
    b'  <div class="battle-log" id="battleLog"></div>\n'
    b'</div>\n\n'
)

new_data = data[:footer_end] + b'\n\n' + battle_html + data[footer_end:]

with open('C:/Users/DELL/.qclaw/workspace-agent-3a84ad15/hongtu-repo/index.html', 'wb') as f:
    f.write(new_data)

print('Done. New size:', len(new_data))
# Verify
with open('C:/Users/DELL/.qclaw/workspace-agent-3a84ad15/hongtu-repo/index.html', 'rb') as f:
    check = f.read()
print('tab-battle found:', b'tab-battle' in check)
print('openBattleHeroPicker found:', b'openBattleHeroPicker' in check)