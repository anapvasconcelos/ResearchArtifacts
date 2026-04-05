[README](../README.md) > scripts/ > How to reproduce

---

# How to reproduce

- **What is this?** This document provides step-by-step instructions to reproduce all figures and tables reported in the paper.

- **What is the purpose of this?** This artifact enables full reproduction with a single command, while also supporting the execution of individual scripts.

- **What does it do?** It uses the dataset as input to automatically generate all figures and tables reported in the paper.

- **Artifact workflow**: dataset → scripts → outputs

💡 The complete set of figures and tables can be reproduced automatically by executing the script `all-scripts-run.R` located in the root folder.


## System requirements

- No specific hardware requirements are necessary to execute the scripts.

- All analyses can be executed on a standard personal computer.

- An internet connection is required to install required software and R packages if they are not already available.


## Required software

To use the artifact, the following software is required:

### To run the scripts - `.R` files

- The **R programming language**
- *Optional*: An environment capable of running R scripts.
  - e.g., RStudio or another compatible IDE.

The scripts are IDE-independent and can be executed in any R environment, including RStudio and the terminal (via `Rscript`).


### To open the script outputs - `.pdf` files

- Any **PDF reader**

### To inspect the dataset - `.xlsx` file

- Any **spreadsheet software** compatible with `.xlsx` files.
  - e.g., Excel, LibreOffice, Google Sheets.

### *Optional*: to compile figures and tables directly from LaTeX - `.tex` files

- A **LaTeX-compatible tool**

This step is optional and **not required to reproduce the results**, since all figures and tables can be generated automatically by the provided R scripts.

---

### Software versions used in the study

The artifact was tested using the following software versions:

- R version 4.4.3
- RStudio version 2024.12.1+563

Other recent versions of R and compatible environments are also expected to work without modification.



## Required R packages

The scripts automatically check and install the required packages if they are not already available.

Required packages:
- `ggplot2`
- `readxl`
- `dplyr`
- `tinytex`




## Input Data

The dataset used in the analyses (`dataset.xlsx`) is located in: `processed-data/`.

This file contains the cleaned and organized data collected from the analyzed papers, including derived variables, summary counts, and intermediate results used in the study.

The dataset serves as input for the reproduction scripts that generate the figures and tables reported in the paper.




## Running the scripts with R

### 1. R

#### - Installing R programming language

Download and install the R programming language:
- [R programming language](https://cran.r-project.org/)

- Make sure that `Rscript` is available in your system PATH.
  - To verify, run: `Rscript --version`.
  - If the version is displayed, the configuration is correct.
    - If the command is not recognized, ensure that R is correctly installed and manually add it to your system PATH.
 
#### - *Optional*: Installing an R environment

Download and install an environment capable of running R scripts, such as RStudio.
- [RStudio](https://www.rstudio.com/products/rstudio/download/)

Other compatible environments may also be used, but for the purposes of this tutorial, we assume the use of RStudio.

---

### 2. The artifact package

1. Download the artifact `VasconcelosEtAl-2026-artifact.zip`, available in [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19024780.svg)](https://doi.org/10.5281/zenodo.19024780)

2. Unzip the downloaded file.

- ***Important***: The folder structure must be preserved to ensure the scripts to work correctly.

---


### 3. Script execution

- The scripts are IDE-independent and can be executed using RStudio, terminal (Rscript), or other R environments.

- The execution time is typically less than 30 seconds on a standard personal computer.

- ***Important***: The scripts automatically resolve paths and can be executed from different environments. However, running them from the root directory of the artifact (i.e., the folder containing `all-scripts-run.R`) is recommended to avoid path-related issues.


- Two execution modes are available: run all scripts at once or run individual scripts.

#### **3A. Run all scripts at once**

If you want to generate **all figures and tables**:

##### Via RStudio

1. Navigate to the root folder.
2. Open the script located at the root: `all-scripts-run.R`.
3. Run the script using the following shortcuts:
  - **Mac**: `Cmd` + `Shift` + `Enter`
  - **Windows/Linux**: `Ctrl` + `Shift` + `Enter`


##### Via terminal

1. Open a terminal (e.g., Terminal on macOS/Linux, Command Prompt or PowerShell on Windows).
2. Navigate to the root folder of the artifact.
3. Execute: `Rscript all-scripts-run.R`


#### **3B. Run individual scripts**

If you want to generate specific figures or tables:

- `F02-FSE-timeline.R` → generates **Figure 2**
- `F03-ICSE-timeline.R` → generates **Figure 3**
- `F04-ICSE-FSE-timeline.R` → generates **Figure 4**
- `F12-FSE-spearman.R` → generates **Figure 12**
- `tex-figures-and-tables.R` → generates **Figures 5–11 and Tables 1–12**

##### Via RStudio

1. Navigate to `scripts/`
2. Open and run the desired script in RStudio.


##### Via terminal

1. Open a terminal (e.g., Terminal on macOS/Linux, Command Prompt or PowerShell on Windows)
2. Navigate to the root folder of the artifact.
3. Execute one of the following commands:
   - `Rscript scripts/F02-FSE-timeline.R`
   - `Rscript scripts/F03-ICSE-timeline.R`
   - `Rscript scripts/F04-ICSE-FSE-timeline.R`
   - `Rscript scripts/F12-FSE-spearman.R`
   - `Rscript scripts/tex-figures-and-tables.R`

---


## Generated outputs

### Outputs

All generated PDF files are stored in `outputs/`.

---

### Expected outputs

The expected outputs generated by the authors are available in `outputs/expected-outputs/`

Expected outputs allow researchers to:
- Inspect the expected results without running the scripts
- Compare them with their own generated outputs

---

## *Optional*: Generating Figures and Tables using LaTeX

All figures and tables are generated automatically by the R scripts. Some outputs are generated by compiling the corresponding LaTeX files as part of the R scripts.

Alternatively, Figures 5–11 and Tables 1–12 can be compiled individually directly from the `.tex` files located in `tex-files/` using a LaTeX-compatible tool.

Each `.tex` file generates a single figure or table:
- `F05-artifact-sharing-evolution.tex` - generates **Figure 5**
- `F06-disclosure-statements-evolution.tex` - generates **Figure 6**
- `F07-papers-with-link-data-availability.tex` - generates **Figure 7**
- `F08-artifact-links-by-unique-identifier.tex` - generates **Figure 8**
- `F09-artifact-location-over-years.tex` - generates **Figure 9**
- `F10-artifacts-no-longer-available-per-paper.tex` - generates **Figure 10**
- `F11-artifact-sharing-and-evaluation-rates.tex` - generates **Figure 11**
- `T01-collected-papers.tex` - generates **Table 1**
- `T02-keywords.tex` - generates **Table 2**
- `T03-artifact-sharing-frequency.tex` - generates **Table 3**
- `T04-different-links-in-papers.tex` - generates **Table 4**
- `T05-artifact-link-location-distribution.tex` - generates **Table 5**
- `T06-artifact-link-statuses.tex` - generates **Table 6**
- `T07-artifact-storage-platforms.tex` - generates **Table 7**
- `T08-non-public-disclosure-statements.tex` - generates **Table 8**
- `T09-links-and-non-disclosure-frequency.tex` - generates **Table 9**
- `T10-artifacts-available-unique-identifier.tex` - generates **Table 10**
- `T11-examples-non-clickable-links.tex` - generates **Table 11**
- `T12-related-work.tex` - generates **Table 12**


Examples of LaTeX-compatible tools:

- Online tools: Overleaf and TeX Viewer and Editor.
- Offline tools: TeXstudio and Visual Studio Code.

- ***Note***: Figures 2, 3, 4, and 12 cannot be generated using LaTeX because they were entirely produced using R.