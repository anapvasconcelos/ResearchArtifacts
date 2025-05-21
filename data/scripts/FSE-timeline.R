# FSE Timeline

required_packages <- c("ggplot2", "readxl", "rstudioapi")

installed_packages <- rownames(installed.packages())
for (pkg in required_packages) {
  if (!(pkg %in% installed_packages)) {
    install.packages(pkg)
  }
}

library(ggplot2)
library(rstudioapi)
library(readxl)

this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
setwd(this_file)

events <- read_excel("Data.xlsx", sheet = "FSETimelineData")

events$Years <- strsplit(as.character(events$Years), ",")

timeline_data <- do.call(rbind, lapply(1:nrow(events), function(i) {
  data.frame(Event = events$Event[i], Year = as.numeric(events$Years[[i]]), stringsAsFactors = FALSE)
}))

timeline_data$Event <- factor(timeline_data$Event, levels = rev(unique(timeline_data$Event)))

p <- ggplot(timeline_data, aes(x = Year, y = Event)) +
  geom_point(size = 5, color = "black") +
  scale_x_continuous(breaks = seq(min(timeline_data$Year), max(timeline_data$Year), by = 1)) +
  theme_minimal() +
  theme(
    axis.text.x = element_text(angle = 90, hjust = 1),
    panel.grid.minor.x = element_blank(),
    plot.background = element_rect(fill = "white", color = "white")
  ) +
  labs(x = "Year")


ggsave("TL-FSE.png", plot = p, width = 6.7, height = 11)

ggsave("TL-FSE.pdf", plot = p, width = 6.7, height = 11)

getwd()
