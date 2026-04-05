required_packages <- c("tinytex", "rstudioapi")

installed_packages <- rownames(installed.packages())
for (pkg in required_packages) {
  if (!(pkg %in% installed_packages)) {
    install.packages(pkg, repos = "https://cloud.r-project.org")
  }
}

library(tinytex)
library(rstudioapi)

if (!tinytex::is_tinytex()) {
  tinytex::install_tinytex()
}

if (!dir.exists("tex-files")) {
  this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
  setwd(file.path(this_file, "..", ".."))
}


if (!dir.exists("outputs")) {
  dir.create("outputs")
}
getwd()

tex_files <- list.files("tex-files", pattern="\\.tex$", full.names = TRUE)

for (tex in tex_files) {
  
  tinytex::latexmk(tex, install_packages = TRUE)
  
  base_name <- sub("\\.tex$", "", basename(tex))
  
  pdf_file <- paste0(base_name, ".pdf")
  log_file <- paste0(base_name, ".log")
  bib_file <- paste0(base_name, ".bib")
  
  pdf_path <- file.path("tex-files", pdf_file)
  
  if (file.exists(pdf_path)) {
    file.rename(pdf_path, file.path("outputs", pdf_file))
  }
  
  if (file.exists(log_file)) {
    file.rename(log_file, file.path("outputs", log_file))
  }
  
  if (file.exists(bib_file)) {
    file.remove(bib_file)
  }
  
}