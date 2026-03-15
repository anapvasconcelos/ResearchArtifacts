# ICSE Timeline

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

getwd()

if (!dir.exists("processed-data")) {
  this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
  setwd(file.path(this_file, ".."))
  if (!dir.exists("processed-data")) {
    this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
    setwd(file.path(this_file, ".."))
  }
}

getwd()

events <- read_excel("processed-data/dataset.xlsx", sheet = "ICSETimelineData")
events$Years <- strsplit(as.character(events$Years), ",")

timeline_data <- do.call(rbind, lapply(1:nrow(events), function(i) {
  data.frame(Event = events$Event[i],
             Year = as.numeric(events$Years[[i]]),
             stringsAsFactors = FALSE)
}))

timeline_data$Event <- factor(timeline_data$Event,
                              levels = rev(unique(timeline_data$Event)))

min_year <- 2014
max_year <- 2023
year_breaks <- seq(min_year, max_year, by = 1)

bg_data <- data.frame(
  xmin = year_breaks - 0.5,
  xmax = year_breaks + 0.5,
  fill = factor((year_breaks - min_year) %% 2)
)


p <- ggplot(timeline_data, aes(x = Year, y = Event)) +
  

  geom_rect(
    data = bg_data,
    aes(xmin = xmin, xmax = xmax, ymin = -Inf, ymax = Inf, fill = fill),
    inherit.aes = FALSE,
    alpha = 0.15,
    color = NA
  ) +
  scale_fill_manual(values = c("gray80", "white")) +
  guides(fill = "none") +
  

  geom_point(size = 3, color = "black", shape = 15) +
  
  geom_hline(
    yintercept = seq_along(levels(timeline_data$Event)) - 0.5,
    color = "gray90",
    linewidth = 0.3
  ) +
  
  scale_x_continuous(
    breaks = year_breaks,
    limits = c(min_year - 0.5, max_year + 0.5),
    expand = c(0,0),
    sec.axis = dup_axis(name = "")
  ) +
  
  coord_cartesian(clip = "off") +
  
  theme_minimal() +
  theme(
    axis.text.x.bottom = element_text(angle = 90, hjust = 1,
                                      margin = margin(t = 0), vjust = 0.5),
    axis.text.x.top    = element_text(angle = 90, hjust = 0,
                                      margin = margin(b = 0), vjust = 0.5),
    legend.position = "none",
    panel.grid.major.x = element_blank(),
    panel.grid.major.y = element_blank(),
    panel.grid.minor.x = element_line(color = "gray90"),
    plot.background = element_rect(fill = "white", color = "white")
  ) +
  labs(x = "", y = "ICSE Event")


if (!dir.exists("outputs")) {
  dir.create("outputs")
}


#ggsave("outputs/F03-ICSE-timeline.jpg", plot = p, width = 6.9, height = 11, dpi = 300)
ggsave("outputs/F03-ICSE-timeline.pdf", plot = p, width = 6.9, height = 11)
getwd()
