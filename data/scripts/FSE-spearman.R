# Spearman's Correlation

required_packages <- c("ggplot2", "readxl", "rstudioapi")

installed_packages <- rownames(installed.packages())
for (pkg in required_packages) {
  if (!(pkg %in% installed_packages)) {
    install.packages(pkg)
  }
}

library(ggplot2)
library(readxl)
library(rstudioapi)

this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this_file)

if (!file.exists("Data.xlsx")) {
  stop("File 'Data.xlsx' not found in the current directory: ", getwd())
}

df <- read_excel("Data.xlsx", sheet = "SpearmanData")

names(df) <- c("Year", "Conference", "Sharing", "Success")

str(df)

df$Sharing <- as.numeric(df$Sharing)
df$Success <- as.numeric(df$Success)


spearman <- tryCatch(
  cor.test(df$Sharing, df$Success, method = "spearman"),
  warning = function(w) {
    message("Spearman test used an approximate p-value due to ties in the data.")
    suppressWarnings(cor.test(df$Sharing, df$Success, method = "spearman"))
  }
)

rho <- round(spearman$estimate, 3)
p <- signif(spearman$p.value, 3)
stars <- if (p < 0.001) "***" else if (p < 0.01) "**" else if (p < 0.05) "*" else ""

label_text <- paste0("Spearman's rho = ", rho, stars, "\n", "p = ", p)

myplot <- ggplot(df, aes(x = Sharing, y = Success)) +
  geom_point(size = 3, color = "steelblue") +
  geom_smooth(method = "lm", se = FALSE, color = "darkred", linetype = "dashed") +
  geom_text(aes(label = Year), vjust = 0.5, hjust = 1.2, size = 4.5) +
  annotate("text", x = 55.2, y = 51.5, label = label_text, hjust = 0, size = 5) +
  labs(
    x = "Artifact Sharing Rate (%)",
    y = "Evaluation Success Rate (%)"
  ) +
  theme_minimal()

ggsave("FSE-Spearman.png", plot = myplot, width = 6.9, height = 3.5)
ggsave("FSE-Spearman.pdf", plot = myplot, width = 6.9, height = 3.5)

getwd()
