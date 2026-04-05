# Detect the script path in a portable way (independent of the execution environment)
get_script_path <- function() {
  
  # Case 1: script executed via Rscript (command line)
  args <- commandArgs(trailingOnly = FALSE)
  file_arg <- "--file="
  script_path <- sub(file_arg, "", args[grep(file_arg, args)])
  
  if (length(script_path) > 0) {
    return(dirname(normalizePath(script_path)))
  }
  
  # Case 2: script executed within RStudio
  if (requireNamespace("rstudioapi", quietly = TRUE) &&
      rstudioapi::isAvailable()) {
    return(dirname(rstudioapi::getSourceEditorContext()$path))
  }
  
  # Fallback: use the current working directory
  return(getwd())
}

# Set the working directory to the script location
this_file <- get_script_path()
setwd(this_file)

# Execute all scripts required to reproduce the results
source("scripts/F02-FSE-timeline.R")
source("scripts/F03-ICSE-timeline.R")
source("scripts/F04-ICSEFSE-timeline.R")
source("scripts/tex-figures-and-tables.R")
source("scripts/F12-FSE-spearman.R")