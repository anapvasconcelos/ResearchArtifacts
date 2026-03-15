library(rstudioapi)

this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this_file)
setwd(file.path(this_file, ".."))

source("scripts/individual-scripts/F02-FSE-timeline.R")
source("scripts/individual-scripts/F03-ICSE-timeline.R")
source("scripts/individual-scripts/F04-ICSE-FSE-timeline.R")
source("scripts/individual-scripts/F12-FSE-spearman.R")
source("scripts/individual-scripts/tex-figures-and-tables.R")