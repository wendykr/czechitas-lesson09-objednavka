# Složitější formuláře - Lekce 9

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Objednávka

Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/udalosti-formulare/cv-slozitejsi-formulare/cvlekce%3Eobjednavka/objednavka.gif)

- Vytvořte HTML stránku s JavaScriptem. Vložte do stránky [styly pro formuláře](https://raw.githubusercontent.com/Czechitas-podklady-WEB/formulare/main/style.css) ať se nemusíte trápit se stylováním.

- Vytvořte formulář s textovým políčkem pro číslo platební karty. Dejte mu štítek „Platební karta“ a atribut `type` nastavte na `text`.

- Přidejte do formuláře rozbalovací nabídku se štítkem „Doprava“. Jako jednotlivé možnosti použijte prvky option s následujícím obsahem:

  - vyzvednout na pobočce, atribut `value="pobocka"`,
  - Zásilkovna, atribut `value="zasilkovna"`,
  - Česká pošta, atribut `value="posta"`,
  - PPL, atribut `value="ppl"`.

- Přidejte tlačítko „Odeslat objednávku“.

- Přidejte posluchače na událost `submit`. Jakmile uživatel formulář odešle, nahraďte celý formulář zprávou „Objednávka odeslána ke zpracování.“