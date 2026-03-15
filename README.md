# Research Artifacts

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19024780.svg)](https://doi.org/10.5281/zenodo.19024780)

This repository contains materials, scripts, and data collected and analyzed for the paper in the context of a research project that investigates artifact sharing practices in the Software Engineering research community.

This repository accompanies the paper: **On the Research Artifact Calling and Sharing in Software Engineering: A Decade of ICSE and FSE through an Open Science Lens**.

Download the paper: [`VasconcelosEtAl-2026-paper.pdf`](VasconcelosEtAl-2026-paper.pdf)


## Repository structure

```
ResearchArtifacts/
├── README.md
├── LICENSE-CC-BY-4-0
├── LICENSE-MIT
├── VasconcelosEtAl-2026-paper.pdf
├── supplementary-material/
│   └── search-protocol.md
├── raw-data/
│   ├── collected-papers.md
│   ├── FSE-conference-website-data.md
│   ├── ICSE-conference-website-data.md
│   ├── FSE-websites/
│   │   ├── FSE2014-RT.pdf
│   │   ├── ...
│   │   └── FSE2023-RT.pdf
│   └── ICSE-websites/
│       ├── ICSE2017-TT.pdf
│       ├── ...
│       └── ICSE2023-TT.pdf
└── replication-package/
    ├── how-to-reproduce.md
    ├── processed-data/
    │   ├── dataset.xlsx
    │   ├── F05-artifact-sharing-evolution.tex
    │   ├── F06-disclosure-statements-evolution.tex
    │   ├── ...
    │   ├── T12-related-work.tex
    │   └── tex-all-figures-and-tables.zip
    ├── scripts/
    │   ├── run-all-scripts.R
    │   └── individual-scripts/
    │       ├── F02-FSE-timeline.R
    │       ├── F03-ICSE-timeline.R
    │       ├── F04-ICSE-FSE-timeline.R
    │       ├── F12-FSE-spearman.R
    │       └── tex-figures-and-tables.R
    └── outputs/
        └── expected-outputs/
            ├── F02-FSE-timeline.pdf
            ├── F03-ICSE-timeline.pdf
            ├── ...
            └── T12-related-work.pdf
```

- All content is available by the file [**`ResearchArtifacts.zip`**](ResearchArtifacts.zip)


### Description of the repository structure 

#### `README.md`
This file. Provides an overview of the artifact, how to reproduce, and citation instructions. The content of the README file is identical to the description on the artifact repository page.


#### `LICENSE-CC-BY-4-0` and `LICENSE-MIT`
Specify the licensing terms governing the use of the content and code in this repository.


#### `VasconcelosEtAl-2026-paper.pdf`
The full paper related to this artifact, describing the study's methodology, analysis, and findings.


#### `supplementary-material/`

This folder contains the supplementary material used during the study.

- [`search-protocol.md`](supplementary-material/search-protocol.md) - Documents the protocol used to systematically search papers for links to research artifacts and statements regarding their availability, partial disclosure, or non-disclosure.


#### `raw-data/`

This folder contains the raw materials collected during the study.

- [`collected-papers.md`](raw-data/collected-papers.md) – Provides an overview of the papers included in the study, allowing users to inspect the collected corpus without accessing the full [dataset](replication-package/processed-data/dataset.xlsx) (`replication-package/processed-data/dataset.xlsx`).

- [`FSE-conference-website-data.md`](raw-data/FSE-conference-website-data.md) – Contains the text excerpts extracted from FSE conference websites that were used to develop the timeline of artifact-related events identified across FSE editions.

- [`ICSE-conference-website-data.md`](raw-data/ICSE-conference-website-data.md) – Contains the text excerpts extracted from ICSE conference websites that were used to develop the timeline of artifact-related events identified across ICSE editions.

- `FSE-websites/` – Contains PDF snapshots of FSE conference webpages searched to extract the information documented in `FSE-conference-website-data.md`.

- `ICSE-websites/` – Contains PDF snapshots of ICSE conference webpages searched to extract the information documented in `ICSE-conference-website-data.md`.


#### `replication-package/`

This folder contains the materials required to reproduce the results reported in the paper, including the datasets used in the analysis, the scripts used to generate the figures and tables, and the expected outputs.

- [`how-to-reproduce.md`](replication-package/how-to-reproduce.md) – A step-by-step guide describing how to reproduce the results of the paper, including how to generate all figures and tables.

- [`processed-data/dataset.xlsx`](replication-package/processed-data/dataset.xlsx) – Contains the processed dataset used in the study, including the cleaned and organized data collected from the analyzed papers. The spreadsheet also provides derived variables, summary counts, and intermediate analysis results that underpin the figures and tables reported in the paper and serve as inputs to the reproduction scripts.

- `processed-data/` – Contains the processed data used in the analyses (`dataset.xlsx`) as well as the LaTeX source files used to generate the figures and tables presented in the paper. These `.tex` files are automatically processed by the scripts in the `scripts/` folder to generate the outputs. Alternatively, the `.tex` files can also be compiled individually using a LaTeX-compatible tool, or all together by downloading the provided `tex-all-figures-and-tables.zip` file.

- `scripts/` – Contains the scripts used to generate all figures and tables. The file `run-all-scripts.R` executes all scripts in sequence, while the folder `individual-scripts/` provides separate scripts for generating each figure or table individually.

- `outputs/` – Directory where the outputs generated by the scripts are stored. The subfolder `expected-outputs/` contains the outputs produced by the authors' execution of the scripts, allowing users to visualize the results without running the scripts or to compare them with their own generated outputs.




## Reproduction

The results reported in the paper can be reproduced automatically using the provided replication package ([`replication-package.zip`](replicatoin-package.zip)).

The general workflow is: **dataset → scripts → outputs**

The dataset is used as input for the R scripts, which generate all figures and tables reported in the paper.

### Quick reproduction

1. Install the R programming language and an environment capable of running R scripts (e.g., RStudio).
   - The artifact was tested using the following software versions: R version 4.4.3 and RStudio version 2024.12.1+563.
2. Download and extract the replication package: `replication-package.zip`
3. Navigate to: `replication-package/scripts/`
4. Open and run: `run-all-scripts.R`
   - The script will automatically install the required R packages and generate all figures and tables.
   - Execution time: less than 30 seconds.
   - Generated outputs are stored in: `replication-package/outputs/`

For complete step-by-step instructions, system requirements, execution modes, and optional LaTeX reproduction, please go to: **[How to reproduce](replication-package/how-to-reproduce.md)**



## Citation

### Research artifacts on Zenodo

```bibtex
@misc{VasconcelosEtAl2026,
  author    = {Ana Paula Vasconcelos and
               Fernanda Madeiral and
               Ivanildo Azevedo and
               Williby Ferreira and
               Vilmar Nepomuceno and
               Adauto Almeida Filho and
               Emanoel Barreiros and
               Sergio Soares},
  title     = {Research Artifacts for "On the Research Artifact 
               Calling and Sharing in Software Engineering: A
               Decade of ICSE and FSE through an Open Science Lens"},
  year      = {2025},
  publisher = {Zenodo},
  version   = {v1.0},
  doi       = {10.5281/zenodo.19024780},
  url       = {https://doi.org/10.5281/zenodo.19024780}
}
```

### Paper

```bibtex
@article{VasconcelosEtAl2026,
  author    = {Ana Paula Vasconcelos and
               Fernanda Madeiral and
               Ivanildo Azevedo and
               Williby Ferreira and
               Vilmar Nepomuceno and
               Adauto Trigueiro de Almeida Filho and
               Emanoel Barreiros and
               Sergio Soares},
  title     = {On the Research Artifact Calling and Sharing in Software
               Engineering: A Decade of ICSE and FSE through an Open
               Science Lens},
  journal   = {Empirical Software Engineering},
  year      = {2026},
  doi       = {},
  url       = {}
}
```




## License

- The **R scripts** in this repository are licensed under the [MIT License](LICENSE-MIT).
- The **research data and artifacts** are licensed under the [CC BY 4.0 License](LICENSE-CC-BY-4-0).
