[README](../README.md) > processed-data/ > Dataset description

---

# Dataset description

This section describes each tab of the dataset sheet (`dataset.xlsx`).

The dataset contains the following tabs:

  - [Tabs `ICSE` and `FSE` (source tabs)](#tabs-icse-and-fse-source-tabs)
  - [Tab `PapersOverview`](#tab-papersoverview)
  - [Tab `Links`](#tab-links)
  - [Tab `Platforms`](#tab-platforms)
  - [Tab `ArtifactAvailabilityStatus`](#tab-artifactavailabilitystatus)
  - [Tab `LinkSectionLocation`](#tab-linksectionlocation)
  - [Tab `Statements`](#tab-statements)
  - [Tab `LinkAndStatementEvolution`](#tab-linkandstatementevolution)
  - [Tab `Badges`](#tab-badges)
  - [Timeline tabs](#timeline-tabs)
    - [Tabs `FSETimelineData` and `ICSETimelineData`](#tabs-fsetimelinedata-and-icsetimelinedata)
    - [Tab `ICSEFSETimelineData`](#tab-icsefsetimelinedata)
  - [Tab `ICSEFSETimelineComparison`](#tab-icsefsetimelinecomparison)
  - [Tab `SpearmanCorrelationData`](#tab-spearmancorrelationdata)
  - [Tab `LaTeXVariables`](#tab-latexvariables)
  - [Tab `VariablesByTableAndFigure`](#tab-variablesbytableandfigure)


All values in the dataset are automatically computed; no manual interaction is required when updates are made.

Users can explore the dataset either at the paper level (`ICSE` and `FSE` tabs), the link level (`Links` tab), or through aggregated summaries (remaining tabs).


## Tabs `ICSE` and `FSE` (source tabs)

These tabs contain paper-level data for each conference.

`ICSE`: International Conference on Software Engineering.

`FSE`: International Conference on the Foundations of Software Engineering.

Each row represents a single paper and includes:

- Basic metadata.
  - Paper ID, title, year of publication, and track where the paper was published.

- Artifact evaluation information.
  - Whether the paper successfully passed Artifact Evaluation (AE).
  - Awarded badges (e.g., Artifacts Available, Artifacts Evaluated, and others).

- Artifact links.
  - Presence of artifact links.
  - Extracted links (raw and deduplicated per storage location).
  - Link availability classification (e.g., publicly available, restricted, not available, no links).
    - ICSE: links verified on 24 Feb. 2024.
    - FSE: links verified on 18 Sep. 2024.

- Link location in the paper.
  - Sections or parts where links appear.

- Link counts.
  - Number of distinct links per paper.

- Persistent identifiers.
  - Presence of persistent identifiers (e.g., DOI).
  
- Artifact disclosure statements about artifact availability or non-disclosure.
  - Presence of statements.
  - Extracted text and categorized labels.

These tabs are the primary data source for all ICSE and FSE paper analyses.


## Tab `PapersOverview`

This tab provides a yearly aggregated overview of papers from ICSE and FSE.

For each year and conference (and their combination), it reports:

- Total number of papers.
- Number and percentage of papers with at least one artifact link.
- Number and percentage of papers with artifact evaluation badges.
- Number and percentage of papers with not available (broken) links.

Additional summaries include:

- Totals across all years.
- Subsets of papers in years with an Artifact Evaluation track.
  - ICSE: From 2019 to 2023.
  - FSE: From 2014 to 2023.

This tab provides a high-level view of dataset coverage and trends.


## Tab `Links`

This tab contains link-level data, where each row corresponds to a single artifact link.

It includes:

- Identification fields.
  - Year, conference, and paper ID (of the paper associated with the link).

- Link information.
  - Original URL.
  - Availability status (per link and per paper).
  - Hosting platform (e.g., Zenodo, GitHub, Figshare, arXiv, OSF, institutional repositories, cloud storage, university domain).

- Platform categories (such as Code, Archival, General-purpose, Institutional, or Other).

- Link characteristics.
  - Whether it is a short link (e.g., bit.ly, goo.gl).
  - Whether it resolves to a different link than the platform storage link.
  - Presence of persistent identifiers (e.g., DOI).

This tab supports the analysis on where and how artifacts are hosted, shared, and maintained at the individual link level.



## Tab `Platforms`

This tab provides a structured aggregation of platforms used to host artifact links.

The tab organizes platforms into categories (Archival, Code, General-purpose, Institutional, and Others).

For each platform and category, it reports:

- Number of links.
- Percentage relative to the total number of links.
- Values for ICSE, FSE, and combined.

Additionally, it includes:
- Breakdown of individual platforms within each category.
- Aggregated totals per category.
- Counts of links with unique identifiers and short links.

Additionally, the tab presents a year-by-year view, including:
- Percentage of links per platform category over time.
- Separate breakdowns for ICSE and FSE.

All values are reported both as absolute counts and percentages, enabling direct inspection of the dataset contents.


## Tab `ArtifactAvailabilityStatus`

This tab summarizes the availability status of artifacts through their links, considering different units of analysis.

It includes:

- Global counts
  - The total number of links (ICSE, FSE, and both combined).

- Availability per paper.
  - Classification of papers based on the status of their links (publicly available, not available, restricted access, or no links).

- Availability per link.
  - Status of individual links across all papers.
  
- Availability of unique links
  - Status considering unique links per storage location.

- Paper-level distributions
  - Number of papers per availability status category.
  - Overlap between categories (papers appearing in multiple categories).

- Link usage per paper.
  - Number of distinct links shared per paper.

- Persistent identifier analysis.
  - Number of links shared using unique identifiers.
  - Proportion of broken links among them

This tab enables analysis of artifact accessibility from multiple perspectives (paper-level and link-level).



## Tab `LinkSectionLocation`

This tab describes where artifact links appear within papers.

It includes:

- Distribution of links across sections (e.g., Introduction, Conclusion, specific sections, and other sections).
  
- Counts of papers with.
  - Links in a single section.
  - Links in multiple sections.

- The overall distribution considering any section.

- Presentation formats.
  - How links are reported (e.g., footnotes and references).

- Temporal analysis.
  - Yearly distribution of links in key sections.
  - Papers containing Data Availability sections across years.

This tab supports analysis of how authors communicate artifact availability within papers.

## Tab `Statements`

This tab contains information about artifact-related statements in papers.

It includes:

- Number of papers with and without statements.
  
- Statement classification.
  - Categories and subcategories


- Counts
  - Number of statements per into subcategories.
  - Aggregated totals per category.

- Joint analysis with links.
  - Combinations of link presence and statement presence.
  - Total number of papers per combination.

This tab enables analysis of transparency and disclosure practices.


## Tab `LinkAndStatementEvolution`

This tab presents the yearly evolution of papers based on the combination of links and statements.

For each year, it reports:

- Counts and percentages of:
  - Papers with both links and statements.
  - Papers without links but with statements.
  - Papers with links but without statements.
  - Papers without links and without statements.

- Additional indicators:
  - Number of papers without links.
  - Number of papers with statements.
  - Percentage of papers without links but with statements.

This tab supports longitudinal analysis of sharing and disclosure practices.



## Tab `Badges`

This tab contains information about artifact evaluation badges assigned to papers. 

It includes:

- Number of papers per year with artifact availability badges.

- Number of papers with links using unique identifiers.

- Distribution of papers with:
  - Both badges and unique identifier links.
  - Badges without unique identifier links.
  - Badges without links.

- Aggregated totals (for ICSE, FSE, and combined).

- Number of badge types per conference.

This tab supports analysis of artifact evaluation adoption and its relation to sharing practices.

## Timeline tabs

### Tabs `FSETimelineData` and `ICSETimelineData`

These tabs present the timelines of artifact calling (artifact-related policies, calls, and initiatives) for each conference (FSE and ICSE).

The data of these tabs were not from the source tabs (`ICSE` and `FSE`). As presented in our methodology, it was collected from the websites of ten editions of ICSE and FSE (2014–2023) to find any mention of artifact calling.

It includes:

- A list of events related to artifact submission, evaluation, and sharing.

- The years in which each event occurred.

- A matrix indicating the presence or absence of each event per year.
  

These tabs serve as data source for generating the visualization of some figures presented in the paper. These tab contain the input data used by the R script that generates the figures.

- `FSETimelineData`: Figure 2.

- `ICSETimelineData`: Figure 3.


### Tab `ICSEFSETimelineData`

This tab combines both conferences into a unified timeline of events.

It:

- Merges equivalent or similar events across ICSE and FSE.
- Maintains the same structure as the individual timeline tabs.

This tab combines information from ICSE and FSE into a unified timeline, following the same structure as the individual timeline tabs.

It is used as input for Figure 4.
  


## Tab `ICSEFSETimelineComparison`

This tab provides a side-by-side comparison of ICSE and FSE events.

It includes:

- Conference-specific events.
- Mapped correspondences between similar events

Each row represents:

- A single conference event, or
- A mapping between FSE and ICSE events.

Event identifiers (e.g., F01–F25 and I01–I26) ensure consistency.

This tab supports cross-conference comparison of artifact policies.



## Tab `SpearmanCorrelationData`

This tab contains data used for statistical analysis. It is used as input for the R script to generate Figure 12.

Columns:
- Year.
- Conference.
- ArtifactSharing (% of papers sharing artifacts).
- EvaluationSuccess (% of successfully evaluated artifacts)

All values are precomputed.



## Tab `LaTeXVariables`

This tab centralizes all LaTeX variables used in the paper.

For each variable, it provides:

- File(s) where the variable is used.
- Variable name.
- LaTeX command to be copied into the source file.
- Computed value.

Verification column (to track updates)
- The name of the LaTeX file(s) where the variable is used.
- The variable name.
- The LaTeX command to be copied into the source file.
- The computed value.
- Additional columns for verification (to check changes in the values when data was updated).

This tab ensures consistency and traceability of reported values.


## Tab `VariablesByTableAndFigure`

This tab maps variables to their corresponding tables and figures.

It includes:

- Variables defined as LaTeX commands.
- Associated tables or figures.

This tab supports automated and consistent population of tables and figures in the paper.