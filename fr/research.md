---
layout: default
title: Niels Dutrievoz
description: "Chercheur postdoctoral en modélisation du climat polaire"
lang: fr
ref: research
---

{% include nav.html %}

# Recherche

### 🔬 Mots-clés
Antarctique ⦁ Climat polaire ⦁ Isotopes de l'eau ⦁ Neige soufflée

### 📌 Thèmes de recherche
- Cycle atmosphérique de l'eau dans les régions polaires
- Processus nuageux
- Reconstitution des climats passés
- Interactions neige–atmosphère et neige soufflée

### 🛠 Outils et méthodes
Modèle atmosphérique global LMDZ ⦁ Modèle régional CRYOWRF ⦁ Observations ⦁ Isotopes stables de l'eau ⦁ Réanalyses ⦁ Sorties de modèles de climat globaux

---

Mes recherches portent sur le **cycle atmosphérique de l'eau en Antarctique**, en particulier à travers les **isotopes de l'eau**. Pendant ma thèse, j'ai utilisé le [**modèle atmosphérique global LMDZ6iso**](https://lmdz.lmd.jussieu.fr/) pour simuler la dynamique des isotopes ; à partir de novembre 2026, je travaillerai avec le modèle régional **CRYOWRF** au SLF.

En Antarctique, l'étude des isotopes de l'eau dans la neige de surface, les précipitations et la vapeur poursuit un double objectif : **mieux comprendre les signaux isotopiques enregistrés dans les carottes de glace**, et **démêler la contribution des différents processus atmosphériques au cycle de l'eau, y compris ceux de la couche limite.**

Les **modèles de circulation générale atmosphérique (MCGA) équipés des isotopes de l'eau** sont un outil essentiel pour simuler les processus de fractionnement et de transport. Ils permettent d'étudier les **signatures isotopiques à différentes échelles de temps**, des événements météorologiques aux variations saisonnières et interannuelles, ainsi que les reconstitutions des climats passés, dans un cadre physique cohérent.


<figure style="text-align: center; margin: 2em auto; max-width: 100%;">
  <img src="/images/antarctica_atmospheric_water_cycle.jpg"
       alt="Cycle atmosphérique de l'eau en Antarctique"
       style="display: block; margin: auto; width: 100%; height: auto;">
  <figcaption style="font-size: 0.9em; color: #555; margin-top: 0.5em;">
    Schéma du cycle atmosphérique de l'eau en Antarctique
  </figcaption>
</figure>


---

### Actuellement : rivières atmosphériques, échanges neige–vapeur et archives glaciaires (LSCE, 2026)

Depuis janvier 2026, en postdoc au LSCE avec [Mathieu Casado](https://mathieucasado.com/), j'étudie les **échanges entre la neige et la vapeur pendant la rivière atmosphérique de mars 2022 en Antarctique**, et je cherche à savoir si de tels **événements extrêmes sont enregistrés dans la glace**. Pour cela, je combine le modèle LMDZ, un **modèle de système proxy** et des **carottes de glace à haute résolution d'Antarctique de l'Est**.

---

### Prochainement : métamorphisme de la neige soufflée et isotopes de la neige polaire (SLF, à partir de novembre 2026)

À partir de novembre 2026, je rejoins le **groupe de physique de la neige** de l'[Institut WSL pour l'étude de la neige et des avalanches SLF](https://www.slf.ch/fr/) à Davos pour un postdoc de deux ans avec Benjamin Walter, dans le cadre d'un projet financé par le **Fonds national suisse (FNS)**.

Le projet étudie un processus récemment découvert, le **métamorphisme de la neige pendant son transport par le vent** (*airborne snow metamorphism*, ASM) : la transformation des grains de neige lorsqu'ils sont soufflés par le vent, et son effet sur les **propriétés physiques et la composition isotopique de la neige polaire**. Mon travail consistera à :
- développer de **nouvelles équations** décrivant l'évolution de la microstructure de la neige et des signaux isotopiques pendant le transport par le vent, paramétrées à partir de **données de laboratoire et de terrain en Antarctique** ;
- les implémenter dans le modèle couplé atmosphère–neige **CRYOWRF** ;
- quantifier l'effet de l'ASM sur la **composition isotopique et les bilans d'énergie et de masse des régions polaires**.

Ce travail prolonge directement les résultats de ma thèse, qui suggéraient que la **sublimation de la neige soufflée dans l'atmosphère** pourrait laisser une signature isotopique différente de celle de la sublimation en surface (voir l'étude 3 ci-dessous).

---

## Travaux de thèse (2022–2025)

Ma thèse, dirigée par [Cécile Agosta](https://cecileagosta.github.io/) au LSCE, s'est inscrite dans le projet ERC Synergy **[AWACA](https://awaca.ipsl.fr/)** (*Atmospheric WAter Cycle over Antarctica*).

### Étude 1 : les isotopes stables de l'eau en Antarctique dans le modèle atmosphérique global LMDZ6, de la climatologie aux processus de couche limite

Ma première étude a consisté à **évaluer le modèle atmosphérique global LMDZ6iso** en le comparant aux **isotopes de la neige de surface sur l'ensemble de l'Antarctique**, ainsi qu'aux **isotopes des précipitations journalières et de la vapeur d'eau mesurés en continu** dans deux stations d'Antarctique de l'Est : **Dumont d'Urville** (sur la côte) et **Concordia** (à l'intérieur du continent). Cette évaluation porte sur les **variations spatiales, saisonnières et diurnes des isotopes** dans le modèle.

J'ai ensuite analysé la **contribution de chaque processus aux isotopes de la vapeur d'eau dans la couche limite**, afin d'identifier les principaux moteurs des **cycles diurnes isotopiques par ciel clair** et d'expliquer les écarts entre simulations et observations.

- **À Concordia**, les variations journalières des isotopes sont principalement pilotées par la **sublimation en surface**.
- **À Dumont d'Urville**, elles dépendent à la fois de la **sublimation en surface et de l'advection par le vent catabatique**.

Ces résultats indiquent que les **prochaines améliorations de LMDZ6iso** doivent viser en priorité une **meilleure représentation des échanges isotopiques pendant la sublimation et la condensation à basse température**.

<div class="btn-row">
  <a class="btn" href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024JD042073" target="_blank">Lire l'article</a>
</div>

---

### Étude 2 : anomalies isotopiques de la vapeur d'eau pendant une rivière atmosphérique au Dôme C, en Antarctique de l'Est

Ma deuxième étude **analyse l'anomalie isotopique de la vapeur d'eau** provoquée par le passage d'une **rivière atmosphérique au-dessus de Concordia** en décembre 2018. La composition isotopique de la vapeur observée pendant cet événement s'explique par deux processus principaux :
- la signature isotopique du transport d'humidité sur de longues distances ;
- l'apport local d'humidité pendant l'événement.

À l'aide de la simulation LMDZ6iso évaluée précédemment, nous montrons que la **sublimation en surface est le principal moteur** de l'anomalie isotopique positive de la vapeur, avec **60 % du signal total**. Cet effet de la sublimation est nettement renforcé pendant l'événement par rapport aux cycles diurnes habituels. Les **40 % restants** de l'anomalie sont attribués à l'**advection d'humidité à grande échelle associée à la rivière atmosphérique**.
Ces résultats montrent que le signal isotopique enregistré dans la vapeur d'eau pendant les rivières atmosphériques reflète une **combinaison de l'advection d'humidité lointaine et des interactions entre la couche limite et le manteau neigeux**, ce qui souligne le rôle des processus de surface locaux dans la variabilité isotopique en Antarctique.

<div class="btn-row">
  <a class="btn" href="https://doi.org/10.5194/tc-20-1025-2026" target="_blank">Lire l'article</a>
</div>

---

### Étude 3 : améliorer les flux isotopiques au-dessus de la neige dans LMDZ6iso, évaluation au Dôme C, en Antarctique de l'Est (soumis)

Dans la continuité des deux premières études, ma troisième étude porte sur la **représentation des flux isotopiques de surface au-dessus de la neige** dans LMDZ6iso. Dans la plupart des modèles isotopiques, **la sublimation au-dessus des surfaces glacées est considérée comme non fractionnante**, et la condensation en surface est paramétrée comme la condensation nuageuse.

En combinant les **mesures continues de météorologie et d'isotopes de la vapeur à Concordia** avec LMDZ6iso, nous :
- introduisons le **fractionnement pendant la sublimation**, qui appauvrit le flux de sublimation par rapport à la neige et ramène la vapeur vers l'équilibre isotopique avec la neige ;
- appliquons à la **condensation en surface** la même formulation que pour la vapeur d'eau, de sorte que le flux isotopique dépend des gradients d'humidité et d'isotopes près de la surface.

Évalués sur les cycles diurnes d'été de décembre 2018 et janvier 2024, ces développements **améliorent nettement l'amplitude simulée du cycle diurne des isotopes de la vapeur**. Le modèle mis à jour ne reproduit cependant pas la forte anomalie observée pendant la rivière atmosphérique. Nous faisons l'hypothèse que de la **neige soufflée, entièrement sublimée dans l'atmosphère**, a produit une vapeur de composition isotopique proche de celle de la neige : la **sublimation dans l'air pourrait donc laisser une signature isotopique différente de celle de la sublimation en surface**.

<div class="btn-row">
  <a class="btn" href="https://doi.org/10.22541/essoar.15002511/v1" target="_blank">Préprint</a>
</div>

---

## Projets et collaborations

- **[Antarctica InSync](https://www.antarctica-insync.org/)** (depuis 2026) : co-animation du groupe de travail sur les isotopes stables de l'eau, avec Sonja Wahl (Université de Berne) et Amy Macfarlane (LSCE), pour coordonner un réseau d'observation des isotopes à l'échelle de l'Antarctique.
- **[AWACA](https://awaca.ipsl.fr/)** – *Atmospheric WAter Cycle over Antarctica* (ERC Synergy, 2022–2026) : volet modélisation avec LMDZ, évaluation à partir des observations isotopiques en Antarctique et développement d'un nouveau schéma isotopique de surface.
- **WisoMIP** – *Water Isotope Model Intercomparison Project* (depuis 2025) : contributeur pour LMDZ, simulation de référence 1979–2024.

## Terrain

- **Station Vernadsky, péninsule Antarctique (janvier–février 2022)** : pendant l'expédition [Antarctique 2.0°C](/fr/outreach), j'ai prélevé des échantillons de précipitations et de neige de surface pour des analyses isotopiques, à un pas de temps journalier, et horaire pendant les rivières atmosphériques.

{% include footer.html %}
