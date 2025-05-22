# Data and R scripts

This folder contains the data and R scripts used to generate soelected figures and analyses from our study.

To run the scripts, please ensure that both the `.R` script and the `Data.xlsx` file are placed in the same folder.



## Content

### Input Data

This Excel file serves as input for the scripts and includes all raw and processed data used in the study.

- [Data.xlsx](/data/scripts/Data.xlsx)



### RQ1

#### - Figure 3 -  The ICSE artifact sharing calling timeline

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/TL-ICSE.png" alt="ICSE timeline of events" style="width:60%;"/>

- [PDF version of Figure 3](/data/scripts/TL-ICSE.pdf)
- [R script to generate Figure 3](/data/scripts/ICSE-timeline.R) 



#### - Figure 4 -  The FSE artifact sharing calling timeline

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/TL-FSE.png" alt="FSE timeline of events" style="width:60%;"/>

- [PDF version of Figure 4](/data/scripts/TL-FSE.pdf)
- [R script to generate Figure 4](/data/scripts/FSE-timeline.R) 



### RQ6

#### - Figure 11 - Correlation between artifact sharing rate and artifact successfully evaluated rate for FSE

**FSE Spearman's Correlation**

<img src="https://github.com/anapvasconcelos/ResearchArtifacts/blob/main/data/scripts/FSE-Spearman.png" alt="FSE Spearman's Correlation" style="width:60%;"/>

- [PDF version of Figure 11](/data/scripts/FSE-Spearman.pdf)
- [R script to generate Figure 11](/data/scripts/FSE-spearman.R) 


<br><br>


## Instructions

### Requirements

To run the scripts, you need to have:

- [R](https://cran.r-project.org/) installed on your computer.

- [RStudio](https://www.rstudio.com/products/rstudio/download/) (optional, but recommended).

- The following files placed in the same folder:
    - The R script (`.R`)
    - The data file: `Data.xlsx`

### Required R packages

- The scripts automatically check and install the necessary packages:
    - `ggplot2`
    - `readxl`
    - `rstudioapi`

If any of them are missing, the script will install them for you.

### How to run the scripts
- Open RStudio.
- Use the **File > Open File...** menu to open one of the .R files listed below.
- Press **Ctrl + A** (or **⌘ + A** on Mac) to select all the code.
- Press **Ctrl + Enter** (or **⌘ + Enter**) to run the selected code.
- The script will read the data, generate a figure, and save it as a `.png` and `.pdf` in the same folder.