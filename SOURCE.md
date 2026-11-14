# Sources and attribution

This repository contains bilingual documentation for TOHEE and TOHEE Cloud. Article IDs, translations, and article source links are maintained with the pages. The following notes record the source revisions used for this content.

## TOHEE role information

The role roster follows implemented TOHEE roles at commit [1dcecb4481a07eeeb61df99415318ed5355339c7](https://github.com/Niko-s-Impostor-Server/TownofHost-Enhanced-Enhanced/tree/1dcecb4481a07eeeb61df99415318ed5355339c7). It contains 314 entries: 81 Crewmates, 80 Impostors, 75 Neutrals, and 78 Add-ons. The roster records each role's category and implementation path; the compiler checks role articles against it.

Role descriptions are based on source review, not individual in-game verification. TOHEE gameplay, settings, and role coverage can change. Review the relevant implementation and update the roster, article, and fixed source links together when documenting a new revision.

## TOHE-Docs reference material

Some role descriptions and gameplay references were adapted from [EnhancedNetwork/TOHE-Docs](https://github.com/EnhancedNetwork/TOHE-Docs), using commit [e89aa9a00a214759d8c2d356895cd145ede5c2be](https://github.com/EnhancedNetwork/TOHE-Docs/tree/e89aa9a00a214759d8c2d356895cd145ede5c2be). The source repository credits The Enhanced Network; that attribution is retained here. The articles were reorganized into bilingual Markdown and checked against the TOHEE role list. TOHE-Docs is a reference source, not the authority for which roles TOHEE implements.

At the pinned revision, the TOHE-Docs repository has no root LICENSE file (the corresponding raw GitHub path returns 404). This record preserves attribution but makes no license claim for adapted passages.

The TOHEE mod repository provides a GPL-3.0 license for its code. That code license is not treated here as a license for TOHE-Docs text.

## TOHEE Cloud guidance

Cloud articles were written from maintainer review of TOHEE Cloud product behavior. Their source metadata identifies this authorship without exposing internal repository paths. Cloud text describes product flows and does not assert that a deployment or external integration has passed live testing.

## Maintenance

For role changes, update the roster to a specific TOHEE source commit, verify the implementation and translated game-language resources, then update affected article sources and run `npm run build`. Keep the upstream reference attribution when revising text adapted from TOHE-Docs. Do not overwrite current translations or Cloud guidance automatically from the upstream archive.
