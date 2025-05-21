# Protocol for searching for links and statements about partial disclosure or non-disclosure of research artifacts.

Due to the large number of papers included in our study, it was not feasible to read each paper in its entirety. Therefore, similar to the approach taken by Heumuller et al. [^1], we will conduct a heuristic search that consisted of three steps to identify any indications of available artifacts or statements regarding artifact disclosure.

## Instructions

If statements or data availability information could not be found with the **mandatory phase** (steps 1 and 2), you must do the **extra phase** (steps 3 and 4).

All the **primary keywords** are always searched in the **regex-based search process** (step 2), independently if relevant information was already found through the **reading-based search process** (step 1).

The **secondary keywords** (step 3) and **specific keywords** (step 4) are only used in case no link to external material or justification for non-disclosure (or partial disclosure) was found with the **reading-based search process** (step 1) and the **regex-based search process** with the **primary keywords** (step 2). So, if you need to start the **extra phase**, you must do the **regex-based search process** with all the **secondary** (step 3) and **specifics keywords** (step 4), to ensure consistency in executing the same procedures for all papers.

<br>

### Mandatory phase
---

#### Step 1 - Read paper's relevant sections

- **Abstract**.
- Final paragraphs of the **Introduction**.
- **Conclusion**.
- **Data Availability section** or similar (if provided), such as Artifacts, Replication Package, Replication, Reproducibility, Verifiability and Replicability.

<br>

#### Step 2 - Regex-based search using primary keywords

| Primaty keywords  | Examples                      |
| ----------------- | ----------------------------- |
| http              | http, https                   |
| availab           | available, availability       |
| releas            | release, released, releasing  |
| publi             | public, publicly, published   |
| appendix          | appendix                      |
| material          | material, materials           |
| suppl             | supplemental, supplementary   |
| replic            | replication, replicability    |
| reprod            | reproduction, reproducibility |
| repo              | repository, report, reported  |
| reason            | reason, reasons               |
| due to            | due to                        |

<br>

### Extra phase

---

#### Step 3 - Regex-based search using secondary keywords


| Secondary keywords    | Examples                              |
| --------------------- | ------------------------------------- |
| disclos               | disclosed, non-disclosure, disclose   |
| detail                | detail, detailed, details             |
| priva                 | privacy, private                      |
| confident             | confidential, confidentiality         |
| request               | request, requested                    |
| artif                 | artifact, artifacts                   | 
| artef                 | artefact, artefacts                   |
| web                   | website, web site, webpage, web page  |
| site                  | website, web site                     |
| home                  | homepage, home page                   |
| page                  | page, homepage, home page             |
| online                | online                                |
| git                   | github, gitlab, git.io                |
| bitbucket             | bitbucket                             |
| figshare              | figshare                              |
| zenodo                | zenodo                                |
| arxiv                 | arxiv                                 |
| goo                   | google, goo.gl                        |
| doi                   | doi                                   |

<br>

#### Step 4 - Regex-based search using specific keywords

**Specific keywords**
- Authors’ last names
- Paper title
- Names of any developed approaches, tools, or similar (presented in the paper)

<br>

## Extraction sheet

### Fields

---
#### - Artifact link



Is there an artifact link in the paper?

Answer: Yes or No.

Some papers have more than one research repository, copy all repositories links on the paper. But remember that we are looking for the artifacts of this research.

---

#### - Statements for non-disclosure or partial disclosure of the research artifacts

What is the argument to justify the non-disclosure of the research artifacts?

If the artifacts are not available or partially available, are there arguments to justify the non-disclosure of artifacts?

If the artifacts are available, but they have any kind of restriction (cited by the author), you must describe their justifications here.

---

#### - Artifacts link(s)

How can we access the research artifacts?
 
Fill out all available links to access the research artifact repository. 

Sometimes the research has more than one repository link available in the paper (each with different artifacts, for example).

To make sure this link is correct, you must check the repository for: mentions of the title of the paper or the year and venue of publication. In general, the name, venue, or reference of the paper is usually clearly cited in the repository.

Sometimes the same repository link is available in different places of the paper, so once you find the link(s), use the search (CTRL + F) to see if the link is available in another place in the paper, in order to answer the next fields

---

#### - Footnote

Is the paper talking about the artifacts link in the footnote?

Answer: Yes or No.

---

#### - References

Is the paper talking about the artifacts link in the References section?

Answer: Yes or No.

---

#### - Introduction

Is the paper talking about the artifacts link in the Introduction section?

Answer: Yes or No.

---

#### - Conclusion

Is the paper talking about the artifacts link in the Conclusion section?

Answer: Yes or No.

---

#### - Highlight

Is the paper talking about the artifacts link in a highlight?

Answer: Yes or No.

---

#### - Specific section or subsection

Is the paper talking about the artifacts link in a specific section (e.g. Data Availability, Artifacts, Replication Package, Replication, Reproducibility, Verifiability and Replicability)?

Answer: Yes or No.

---

#### - Other place

Is the paper talking about the artifacts link in another uncited section?

Answer: Yes or No.

---

#### - Where is talking about the link?

Detail where the article is talking about the artifacts link.

If there are one or more artifacts links available elsewhere than those mentioned in the previous fields, describe them here.

If there are artifacts link is in a highlight, in a specific section or in another uncited section, described them here.

---

<br>

## References

[^1]: Heumüller R, Nielebock S, Krüger J, Ortmeier F (2020) Publish or perish, but do not forget your software artifacts. Empirical Softw Engg 25(6):4585–4616, DOI 10.1007/s10664-020-09851-6.