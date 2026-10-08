---
title: "Research"
heading: "Research"
eyebrow: "Polar atmospheric water cycle"
intro: "I study water isotopes as tracers of the Antarctic atmospheric water cycle, from boundary-layer processes at the snow surface to the large-scale dynamics that bring moisture to the ice sheet."
ref: research
---

<section class="panel" markdown="1">
<div class="facts facts-kw" markdown="1">
<div markdown="1">
### Keywords
<ul class="keywords"><li>Antarctica</li><li>Polar climate</li><li>Water isotopes</li><li>Blowing snow</li></ul>
</div>
<div markdown="1">
### Research interests
- Polar atmospheric water cycle
- Cloud processes
- Climate reconstruction
- Snow–atmosphere interactions
</div>
<div markdown="1">
### Tools & methods
- Global atmospheric model LMDZ
- Water stable isotope observations
- Reanalyses and climate model outputs
</div>
</div>
</section>

<section class="panel" markdown="1">
## Overview

My research focuses on the **atmospheric water cycle in Antarctica**, with a particular emphasis on **water isotopes**. During my PhD, I used the [**LMDZ6iso global atmospheric model**](https://lmdz.lmd.jussieu.fr/) to simulate isotope dynamics; from November 2026, I will work with the regional model **CRYOWRF** at SLF.

In Antarctica, the study of water isotopes in surface snow, precipitation, and vapour is conducted with a dual objective: **gaining a deeper understanding of isotopic signals archived in ice cores**, and **deciphering the contributions of different atmospheric processes in driving the water cycle, including boundary layer processes.**

**Atmospheric general circulation models (AGCMs) with water isotopes** provide a crucial tool for simulating fractionation and transport processes. They allow us to investigate **isotopic signatures across different timescales**, from meteorological events to seasonal and interannual variations, as well as past climate reconstructions within a physically coherent framework.

<figure>
  <img src="/images/antarctica_atmospheric_water_cycle.jpg" alt="Atmospheric water cycle in Antarctica">
  <figcaption>Sketch of the atmospheric water cycle in Antarctica</figcaption>
</figure>
</section>

<section class="panel" markdown="1">
<p class="eyebrow">Upcoming · SLF, from November 2026</p>
## Airborne snow metamorphism and polar snow isotopes

From November 2026, I will join the **Snow Physics group** of the [WSL Institute for Snow and Avalanche Research SLF](https://www.slf.ch/en/) in Davos for a two-year postdoc with Benjamin Walter, within a project funded by the **Swiss National Science Foundation (SNSF)**.

The project investigates the newly discovered process of **airborne snow metamorphism (ASM)**: the transformation of snow particles during wind-driven transport, and its impact on the **physical properties and isotopic composition of polar snow**. My work will consist in:
- developing **new model equations** for the evolution of snow microstructure and isotope signals during wind-driven snow transport, parameterized from **laboratory and Antarctic field data**;
- implementing them in the coupled atmosphere–snow model **CRYOWRF**;
- quantifying the impact of ASM on the **isotopic composition, energy and mass balance of polar regions**.

This work directly extends my PhD results, which suggested that **airborne sublimation of blowing snow** could leave a different isotopic signature than surface sublimation (see Study 3 below).
</section>

<section class="panel" markdown="1">
<p class="eyebrow">Current · LSCE, 2026</p>
## Atmospheric rivers, snow–vapour interactions and ice-core archives

Since January 2026, as a postdoctoral researcher at LSCE with [Mathieu Casado](https://mathieucasado.com/), I study **snow–vapour interactions during the March 2022 Antarctic atmospheric river**, and whether such **extreme events are archived in ice**. To do so, I combine the LMDZ model, a **proxy-system model** and **high-resolution East Antarctic ice cores**.
</section>

<section class="panel" markdown="1">
<p class="eyebrow">PhD work · 2022–2025</p>
## Water vapour isotopes in Antarctica

My PhD, supervised by [Cécile Agosta](https://cecileagosta.github.io/) at LSCE, was carried out within the **[AWACA](https://awaca.ipsl.fr/)** ERC Synergy project (Atmospheric WAter Cycle over Antarctica).

### Study 1 - Antarctic water stable isotopes in the global atmospheric model LMDZ6: from climatology to boundary layer processes

My first study focuses on **evaluating the LMDZ6iso global atmospheric model** by comparison with **surface snow isotopes across Antarctica**, as well as **daily precipitation and continuous water vapour isotopes** at two East Antarctic stations: **Dumont d'Urville** (coastal) and **Concordia** (inland). This evaluation examines **spatial, seasonal, and diurnal isotopic variations** in the model.

Next, I analysed the **contributions of individual processes to boundary layer water vapour isotopes**, aiming to identify the key drivers of **clear-sky isotopic daily cycles** and to explain discrepancies between model simulations and observations.

- **At Concordia**, daily isotope variations are mainly driven by **surface sublimation**.
- **At Dumont d'Urville**, they are influenced by **both surface sublimation and advection by the katabatic flow**.

These results suggest that **further improvements in LMDZ6iso** should prioritise **better representation of isotopic exchanges during sublimation and condensation under low temperatures**.

<div class="btn-row left"><a class="btn ghost" href="https://doi.org/10.1029/2024JD042073" target="_blank" rel="noopener">Read the article</a></div>

<hr>

### Study 2 - Water vapour isotope anomalies during an atmospheric river event at Dome C, East Antarctica

My second study focuses on **analysing the isotopic anomaly in water vapour** induced by the passage of an **atmospheric river over Concordia** in December 2018. The isotopic composition of water vapour observed during this event can be explained by two key processes:
- the isotopic signature of long-range water transport;
- local moisture uptake during the event.

Using the LMDZ6iso simulation previously evaluated, we show that **surface sublimation is the primary driver** of the positive isotopic anomaly in vapour, contributing **60% of the total signal**. This sublimation effect is significantly increased during the event compared to typical diurnal cycles. The **remaining 40%** of the anomaly is attributed to **large-scale moisture advection associated with the atmospheric river**.

These results highlight that the isotopic signal recorded in water vapour during atmospheric river events reflects a **combination of long-range moisture advection and interactions between the boundary layer and the snowpack**, reinforcing the importance of local surface processes in shaping Antarctic isotope variability.

<div class="btn-row left"><a class="btn ghost" href="https://doi.org/10.5194/tc-20-1025-2026" target="_blank" rel="noopener">Read the article</a></div>

<hr>

### Study 3 - Improving isotopic surface fluxes over snow in LMDZ6iso: evaluation at Dome C, East Antarctica (submitted)

Building on the first two studies, my third study targets the **representation of isotopic surface fluxes over snow** in LMDZ6iso. In most isotope-enabled models, **sublimation over iced surfaces is treated as non-fractionating**, and surface condensation is parametrized like cloud condensation.

Combining **continuous meteorological and water vapour isotope measurements at Concordia** with LMDZ6iso, we:
- implement **fractionation during sublimation**, which depletes the sublimation flux relative to the snow and drives the vapour toward isotopic equilibrium with the snow;
- adopt for **surface condensation** the same formulation as for water vapour, making the isotopic flux depend on the near-surface humidity and isotopic gradients.

Evaluated over summertime diurnal cycles in December 2018 and January 2024, these developments **significantly improve the simulated amplitude of the vapour isotope diurnal cycle**. The updated model, however, does not capture the strong anomaly observed during the atmospheric river event. We hypothesise that **blowing snow sublimating entirely in the atmosphere** produced vapour with an isotopic composition close to that of the snow, suggesting that **airborne sublimation could leave a different isotopic signature than surface sublimation**.

<div class="btn-row left"><a class="btn ghost" href="https://doi.org/10.22541/essoar.15002511/v1" target="_blank" rel="noopener">Read the preprint</a></div>
</section>

<section class="panel" markdown="1">
## Projects & collaborations

- **[Antarctica InSync](https://www.antarctica-insync.org/)** (since 2026): co-lead of the water stable isotope working group, with Sonja Wahl (University of Bern) and Amy Macfarlane (LSCE), coordinating a pan-Antarctic isotope observation network.
- **[AWACA](https://awaca.ipsl.fr/)** – Atmospheric WAter Cycle over Antarctica (ERC Synergy Grant, 2022–2026): LMDZ modelling component, evaluation against Antarctic isotope observations and development of a new isotopic surface scheme.
- **WisoMIP** – Water Isotope Model Intercomparison Project (since 2025): LMDZ contributor, reference 1979–2024 simulation.
</section>

<section class="panel" markdown="1">
## Fieldwork

<div class="media-split" markdown="1">
<div markdown="1">
**Vernadsky station, Antarctic Peninsula (January–February 2022).** During the [Antarctica 2.0°C](/outreach) expedition, I collected precipitation and surface snow samples for isotopic analysis, at daily resolution and at hourly resolution during atmospheric river events.
</div>
<img src="/images/niels_vernadsky.jpeg" alt="Niels at Vernadsky station">
</div>
</section>
