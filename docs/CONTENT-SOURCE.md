# Powertech Engineers — Content Source of Truth

## 1. Primary Source of Truth

The **Powertech Engineers Official Company Profile Document / PDF** serves as the sole authoritative baseline for all company-specific factual assertions, historical information, technical capabilities, certifications, and project records.

Every assertion displayed on the website must be traceably grounded in this source document or in explicit, written client-provided addenda.

---

## 2. Inviolable Content Rules

> **Core Governance Rule**:
> _"Source content must not be fabricated. Any missing, unclear, contradictory, or unverified information must be flagged for review."_

1. **Preservation of Terminology**:
   Preserve official company terminology, technical designations (e.g. voltage ratings, equipment names, licensing classifications), and scope definitions as stated in the source profile unless explicitly instructed to adjust phrasing for clarity.

2. **Absolute Prohibition of Synthetic Information**:
   Under no circumstances may the engineering or editorial team generate:
   - Placeholder client names (e.g., "ABC Corp", "Global Infra Inc.")
   - Invented project scopes, dates, or locations
   - Synthetic metrics or statistics (e.g., "500+ satisfied clients", "1000km of line laid")
   - Artificial leadership biographies or fictitious directors
   - Unlicensed stock badges presented as official certifications
   - Fabricated client testimonials or quotations

3. **Explicit Handling of Incomplete or Missing Data**:
   - If a data point is missing from the company profile, the corresponding data schema field must remain `null` or an empty array `[]`.
   - In code and documentation, mark pending items with `[TODO: Verify ...]` markers.
   - Do NOT fill missing attributes with estimates or assumptions.

4. **Inconsistency Resolution Protocol**:
   - Where the source profile contains internal discrepancies (e.g., conflicting dates, differing addresses across pages, or legacy contact details), **do not resolve the inconsistency unilaterally**.
   - Flag the specific contradiction in `docs/CONTENT-VERIFICATION.md` for client clarification.

---

## 3. Approved Content Ingestion Pipeline

```
[Official Company Profile PDF]
            │
            ▼
[Data Extraction & Validation]
            │
            ▼
[Audit against CONTENT-VERIFICATION.md]
            │
            ├── If Ambiguous / Missing ──► Flag in Verification Checklist
            │
            └── If Verified
                    │
                    ▼
          [Populate src/data/]
          - company.ts
          - services.ts
          - projects.ts
          - leadership.ts
          - certifications.ts
                    │
                    ▼
          [Render in Production UI]
```
