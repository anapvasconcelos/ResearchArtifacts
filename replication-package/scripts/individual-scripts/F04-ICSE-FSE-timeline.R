# FSE and ICSE Timeline

required_packages <- c("ggplot2", "readxl", "rstudioapi", "dplyr")

installed_packages <- rownames(installed.packages())
for (pkg in required_packages) {
  if (!(pkg %in% installed_packages)) {
    install.packages(pkg)
  }
}

library(ggplot2)
library(readxl)
library(dplyr)
library(rstudioapi)

if (!dir.exists("processed-data")) {
  this_file <- dirname(rstudioapi::getSourceEditorContext()$path)
  setwd(file.path(this_file, "..", ".."))
}

df <- read_excel("processed-data/dataset.xlsx", sheet = "ICSEFSETimelineData")

df_expanded <- df %>%
  rowwise() %>%
  mutate(Year = strsplit(as.character(Year), ",")) %>%
  tidyr::unnest(cols = c(Year)) %>%
  mutate(Year = as.numeric(Year))

df_expanded$EventFactor <- factor(df_expanded$Event, levels = rev(unique(df_expanded$Event)))
df_expanded$EventNumeric <- as.numeric(df_expanded$EventFactor)


min_year <- min(df_expanded$Year)
max_year <- max(df_expanded$Year)

year_breaks <- seq(min_year, max_year, 1)

bg_data <- data.frame(
  xmin = year_breaks - 0.5,
  xmax = year_breaks + 0.5,
  fill = factor((year_breaks - min_year) %% 2)
)

p <- ggplot(df_expanded, aes(x = Year, y = EventNumeric, shape = Conference)) +
  
  geom_rect(
    data = bg_data,
    aes(xmin = xmin, xmax = xmax, ymin = -Inf, ymax = Inf, fill = fill),
    inherit.aes = FALSE,
    alpha = 0.15,
    color = NA
  ) +
  scale_fill_manual(values = c("gray80", "white")) +
  guides(fill = "none") +
  

geom_point(
  aes(y = EventNumeric + ifelse(Conference == "FSE", 0.2, -0.2)),
  size = 3.6,
  color = "black"
) +
  
  scale_shape_manual(values = c(16, 15)) +
  
  scale_y_continuous(
    breaks = sort(unique(df_expanded$EventNumeric)),
    labels = levels(df_expanded$EventFactor),
    expand = c(0.02, 0.02)
  ) +
  
  scale_x_continuous(
    breaks = year_breaks,
    limits = c(min_year - 0.5, max_year + 0.5),
    expand = c(0, 0),
    sec.axis = dup_axis(name = "")
  ) +
  
  theme_minimal() +
  theme(
    axis.text.x.bottom = element_text(angle = 90, hjust = 1,
                                      margin = margin(t = 0), vjust = 0.5),
    axis.text.x.top    = element_text(angle = 90, hjust = 0,
                                      margin = margin(b = 0), vjust = 0.5),
    panel.grid.major.x = element_blank(),
    panel.grid.major.y = element_blank(),
    legend.position = c(-1.10, -0.068),
    legend.justification = c("left", "bottom"),
    legend.direction = "horizontal",
    plot.background = element_rect(fill = "white", color = "white")
  ) +
  labs(
    x = "",
    y = "Similar events in FSE and ICSE",
    shape = "Conference:"
  )


if (!dir.exists("outputs")) {
  dir.create("outputs")
}


#ggsave("outputs/F04-ICSEFSE-timeline.jpg", plot = p, width = 6.6, height = 7.7, dpi = 300)
ggsave("outputs/F04-ICSEFSE-timeline.pdf", plot = p, width = 6.6, height = 7.7)

getwd()
