---
agility: 1
ev: '-'
free_strike: 3
intuition: 1
keywords:
    - Eyestalk
    - Horror
    - Overmind
level: 6
might: -1
movement: Fly, hover
name: Compulsion Eye
presence: -1
reason: 4
role: Controller
scc: mcdm.monsters.v1/monster.xorannox-the-tyract.statblock/compulsion-eye
size: 1M
speed: 5
stability: 0
stamina: "30"
type: statblock
---

# Compulsion Eye

---

<script type="application/json" class="sc-statblock-data">
{"id":"compulsion-eye","name":"Compulsion Eye","ancestry":"Eyestalk, Horror, Overmind","level":"6","role":"Controller","roleKey":"controller","ev":"-","defenses":[{"l":"Size","v":"1M"},{"l":"Speed","v":"5"},{"l":"Stamina","v":"30"},{"l":"Stability","v":"0"},{"l":"Free Strike","v":"3"}],"meta":{"immunity":"—","weakness":"—","movement":"Fly, hover","captain":{"label":"With Captain","value":"—"}},"characteristics":[{"l":"Might","k":"M","v":"-1"},{"l":"Agility","k":"A","v":"+1"},{"l":"Reason","k":"R","v":"+4"},{"l":"Intuition","k":"I","v":"+1"},{"l":"Presence","k":"P","v":"-1"}],"features":[{"kind":"ability","action":"main","name":"Compulsion Beam","cost":"Signature","usage":"Main action","keywords":["Psionic","Ranged","Strike"],"distance":"Ranged 6","target":"One creature","powerRoll":{"formula":"+ 4","tiers":{"high":"I \u003c 4 the target is charmed","low":"I \u003c 2 the target is charmed","mid":"I \u003c 3 the target is charmed"}},"sections":[{"label":"Effect","text":"As a free triggered action, a charmed target immediately moves up to their speed and can make a free strike against an enemy of Xorannox's choice. The target is then no longer charmed."}]},{"kind":"passive","action":"passive","name":"Psionic Barrier","body":"The compulsion eye has damage immunity 15. When they use a main action, they lose this immunity until the end of the round."}]}
</script>
