<!-- markdown-toc-disable -->
# Research Artifacts

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19024780.svg)](https://doi.org/10.5281/zenodo.19024780)

This artifact contains materials, scripts, and data collected and analyzed for the paper in the context of a research project that investigates artifact sharing practices in the Software Engineering research community.

This artifact accompanies the paper: **On the Research Artifact Calling and Sharing in Software Engineering: A Decade of ICSE and FSE through an Open Science Lens**.

Download the paper: _`VasconcelosEtAl-2026-paper.pdf` (to be made available upon publication)_

---

## Quick navigation over the artifact


| **README**                                        | **Other pages**                                                    | **Location of important files and folders**                      |
|---------------------------------------------------|--------------------------------------------------------------------|---------------------------------------------------------|
| - [Repository structure](#repository-structure)   | - [Step-by-step reproduction instructions](/scripts/how-to-reproduce.md) | - Script to generate all figures and tables: `all-scripts-run.R`  |
| - [Data provenance](#data-provenance)             |  - [List of collected papers](/curated-raw-data/collected-papers.md)   | - The complete artifact package: `VasconcelosEtAl-2026-artifact.zip`              |
| - [Ethical and legal statements](#ethical-and-legal-statements) | - [Dataset description](/processed-data/dataset-description.md) | - Dataset: `processed-data/dataset.xlsx`  |
| - [Licenses](#licenses)                           | - [FSE Timeline](/curated-raw-data/FSE-conference-website-data.md) |  - Generated outputs of this artifact: `outputs/`  |
| - [Reproduction](#reproduction)                   | - [ICSE Timeline](/curated-raw-data/ICSE-conference-website-data.md) | - Expected outputs of this artifact: `outputs/expected-outputs/` |
| - [Citation](#citation)                           | - [Search protocol](/supplementary-material/search-protocol.md)  |                                       |

---

## Repository structure

```
VasconcelosEtAl-2026-artifact/
├── README.md
├── LICENSE-CC-BY-4-0
├── LICENSE-MIT
├── all-scripts-run.R
├── VasconcelosEtAl-2026-paper.pdf
├── VasconcelosEtAl-2026-artifact.zip
├── supplementary-material/
│   └── search-protocol.md
├── curated-raw-data/
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
├── processed-data/
│   ├── dataset-description.md
│   └── dataset.xlsx
├── tex-files/
│   ├── F05-artifact-sharing-evolution.tex
│   ├── ...
│   └── T12-related-work.tex
├── scripts/
│   ├── how-to-reproduce.md
│   ├── F02-FSE-timeline.R
│   ├── ...
│   └── tex-figures-and-tables.R
└── outputs/
    └── expected-outputs/
        ├── F02-FSE-timeline.pdf
        ├── ...
        └── T12-related-work.pdf
```

- All content is available by the file **`VasconcelosEtAl-2026-artifact.zip`**


### Description of the repository structure 

#### - `README.md`
This file. Provides an overview of the artifact, how to reproduce, and citation instructions. The content of the README file is identical to the description on the artifact repository page.


#### - `LICENSE-CC-BY-4-0` and `LICENSE-MIT`
Specify the licensing terms governing the use of the content and code in this repository.


#### - `all-scripts-run.R`
This script executes all scripts provided in `scripts/`. It generates all figures and tables of the paper.


#### - `VasconcelosEtAl-2026-paper.pdf`
The full paper related to this artifact, describing the study's methodology, analysis, and findings.


#### - `VasconcelosEtAl-2026-artifact.zip`
This file contains the complete artifact, including all data, scripts, and outputs required for reproduction.


#### - `supplementary-material/`

This folder contains the supplementary material used during the study.

- `search-protocol.md` - Documents the protocol used to systematically search papers for links to research artifacts and statements regarding their availability, partial disclosure, or non-disclosure.


#### - `curated-raw-data/`

- `collected-papers.md` – Provides an overview of the papers included in the study, allowing users to inspect the collected corpus without accessing the full dataset (`processed-data/dataset.xlsx`).

- `FSE-conference-website-data.md` – Contains the text excerpts extracted from FSE conference websites that were used to develop the timeline of artifact-related events identified across FSE editions.

- `ICSE-conference-website-data.md` – Contains the text excerpts extracted from ICSE conference websites that were used to develop the timeline of artifact-related events identified across ICSE editions.

- `FSE-websites/` – Contains PDF snapshots of FSE conference webpages searched to extract the information documented in `FSE-conference-website-data.md`.

- `ICSE-websites/` – Contains PDF snapshots of ICSE conference webpages searched to extract the information documented in `ICSE-conference-website-data.md`.


#### - `processed-data/`

- `dataset-description.md` – A brief description of each tab of the dataset (`dataset.xlsx`).

- `dataset.xlsx` – This file contains the processed dataset used in the study, including the cleaned and organized data collected from the analyzed papers. The spreadsheet also provides derived variables, serve as input to the reproduction scripts, and includes intermediate analysis results that underpin the figures and tables reported in the paper. For details about the content of this file, see the [dataset description](/processed-data/dataset-description.md).

#### - `tex-files/`

- `.tex` files - These files contain the LaTeX source used to generate the tables and figures reported in the paper. They are automatically compiled by the script `all-scripts-run.R`, which produces the final PDFs outputs in `outputs/`.
  
Alternatively, these `.tex` files can also be compiled individually using a LaTeX-compatible tool.


#### - `scripts/`

- `how-to-reproduce.md` – A step-by-step guide describing how to reproduce the results of the paper, including how to generate all figures and tables.

- `.R` files - Contains the scripts used to generate all figures and tables. The script `all-scripts-run.R` (located in the root folder) executes all these scripts.


#### - `outputs/`

This directory stores the outputs generated by the scripts.
  
- `expected-outputs/` - This folder contains the outputs produced by the authors' execution of the scripts, allowing users to visualize the results without running the scripts or to compare them with their own generated outputs.



## Data provenance

The data used in this study originate from two primary sources: (i) the official websites of the ICSE and FSE conferences and (ii) papers published at these conferences.

We analyzed the official conference websites of ten ICSE and FSE editions (2014–2023) to identify calls, encouragement, or requirements related to research artifact sharing. The relevant excerpts extracted from these websites are documented in the files `FSE-conference-website-data.md` and `ICSE-conference-website-data.md`. The corresponding webpages used as primary sources are archived as PDF snapshots in the folders `curated-raw-data/FSE-websites/` and `curated-raw-data/ICSE-websites/`.

We also collected the papers published at ICSE and FSE during the same period and analyzed them to identify links to research artifacts as well as statements regarding artifact disclosure, non-disclosure or partial disclosure. An overview of the collected corpus is provided in `curated-raw-data/collected-papers.md`.

The processed dataset used for the analyses is available in `processed-data/dataset.xlsx`. This dataset was derived from the raw materials through manual inspection and structured data extraction. It consolidates the information extracted from the conference websites and the analyzed papers, including artifact sharing indicators, disclosure statements, and metadata used to generate the figures and tables presented in the paper.

All scripts used to process the dataset and generate the results are available in `scripts/`.


## Ethical and legal statements

All data used in this study were obtained from publicly accessible conference websites and published conference papers. The dataset does not contain personal or sensitive information.

The collected materials consist of publicly available webpages and conference publications describing artifact calling, artifact availability, and related information. These materials are included in this repository solely for research transparency and reproducibility purposes.


## Licenses

- The **scripts** in this repository are licensed under the [MIT License](LICENSE-MIT).
- The **research data and artifacts** are licensed under the [CC BY 4.0 License](LICENSE-CC-BY-4-0).



## Reproduction

The results reported in the paper can be reproduced automatically using the provided artifact package (`VasconcelosEtAl-2026-artifact.zip`).

The general workflow of the reproduction is: **dataset → scripts → outputs**

The dataset is used as input for the R scripts, which generate all figures and tables reported in the paper.


### Quick reproduction

1. Install the **R programming language** and an **environment capable of running R scripts**.
   - The artifact was tested using the following software versions:
     - R version 4.4.3
     - RStudio version 2024.12.1+563.
2. Download and extract the artifact package: `VasconcelosEtAl-2026-artifact.zip`
3. Navigate to the root folder.
4. Run the script located at the root: `all-scripts-run.R`
   - The script will automatically install the required R packages and generate all figures and tables.
   - Execution time: less than 30 seconds.
   - Generated outputs are stored in: `outputs/`

For complete step-by-step instructions, system requirements, execution modes, and optional LaTeX reproduction, please go to: **[How to reproduce](/scripts/how-to-reproduce.md)**


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

<!--This folder contains the materials required to reproduce the results reported in the paper, including the datasets used in the analysis, the scripts used to generate the figures and tables, and the expected outputs.-->
<!-- - `processed-data/`  – This folder contains the processed data used in the analyses (`dataset.xlsx`) as well as the LaTeX source files used to generate the figures and tables presented in the paper. These `.tex` files are automatically processed by the scripts in the `scripts/` folder to generate the outputs. Alternatively, the `.tex` files can also be compiled individually using a LaTeX-compatible tool, or all together by downloading the provided `tex-all-figures-and-tables.zip` file.-->