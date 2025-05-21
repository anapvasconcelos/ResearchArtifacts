# R scripts

This folder contains the data and R scripts used to generate some figures and analyses from our study.

To run the scripts below, please ensure that both the .R script and the Data.xlsx file are placed in the same folder.

## Content

### Data to run the scripts

This file is used by the scripts and contains all the data used in our study.

- [Data.xlsx](/data/scripts/Data.xlsx)

### RQ1

#### - Figure 3 -  The ICSE artifact sharing calling timeline

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/TL-ICSE.png" alt="ICSE timeline of events" style="width:60%;"/>

- [R script](/data/scripts/ICSE-timeline.R) - [PDF](/data/scripts/TL-ICSE.pdf)


#### - Figure 4 -  The FSE artifact sharing calling timeline

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/TL-FSE.png" alt="FSE timeline of events" style="width:60%;"/>

- [R script](/data/scripts/FSE-timeline.R) - [PDF](/data/scripts/TL-FSE.pdf)

### RQ6

#### - FSE Spearman's Correlation

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/FSE-Spearman.png" alt="FSE Spearman's Correlation" style="width:60%;"/>

- [R script](/data/scripts/FSE-spearman.R) - [PDF](/data/scripts/FSE-Spearman.pdf)

<br><br>


## Instructions

### What you need

To run the scripts, you need to have:

- [R](https://cran.r-project.org/) installed on your computer.

- [RStudio](https://www.rstudio.com/products/rstudio/download/) (optional, but recommended).

- The following files placed in the same folder:
    - The R script (.R)
    - The data file: Data.xlsx

### Required R Packages

- The scripts automatically check and install the necessary packages:
    - ggplot2
    - readxl
    - rstudioapi

If any of them are missing, the script will install them for you.

### How to Run the Scripts
- Open RStudio.
- Use the File > Open File... menu to open one of the .R files listed below.
- Press Ctrl + A (or ⌘ + A on Mac) to select all the code.
- Press Ctrl + Enter (or ⌘ + Enter) to run the selected code.
- The script will read the data, generate a figure, and save it as a .png and .pdf in the same folder.