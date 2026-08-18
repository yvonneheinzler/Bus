BUS-APP v9 – OHNE SERVICE-WORKER-CACHE

Funktion:
- nur Linie 4602
- Lindhorst immer Ringstraße
- Nach Hause: IGS Hittfeld -> Ringstraße
- Zur Schule: Ringstraße -> Schulzentrum Hittfeld
- PDF-Regelfahrplan
- Abfahrtszeit groß und fett
- Ankunftszeit kleiner, grau und nicht fett

WICHTIG ZU v9:
- Kein dauerhafter Service-Worker-Cache mehr.
- Beim Öffnen versucht die App vorhandene alte Service Worker zu entfernen.
- Alte Browser-Caches dieser App werden gelöscht.
- sw.js ist absichtlich ein "Self-Destruct"-Worker, damit bestehende Installationen
  den früheren Cache loswerden.
- Im unteren Status steht sichtbar "v9", damit du prüfen kannst, ob die neue Version geladen wurde.

AUF GITHUB ERSETZEN:
Unbedingt diese drei Dateien ersetzen:
1. index.html
2. sw.js
3. manifest.webmanifest

Danach GitHub Pages kurz aktualisieren lassen und die Seite mit
https://yvonneheinzler.github.io/Bus/?v=9
öffnen. Das ?v=9 hilft zusätzlich, einen alten Browser-Cache zu umgehen.
