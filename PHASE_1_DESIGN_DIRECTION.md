# Phase 1: Design Direction

## Objective

Define a strong, modern visual direction for the portfolio before we begin the Tailwind migration and section redesign.

## What We Learned From the Current Site

The current portfolio already has a good content foundation:

- Clear personal introduction
- Strong About section content
- A useful skills/experience section
- Real project examples with live links
- Working contact pathways

What needs the biggest upgrade is presentation:

- The visual language feels inconsistent between sections
- The current colors are dated and not fully cohesive
- Typography hierarchy can be stronger
- Some sections feel template-like instead of custom
- Animation exists, but it is not yet part of a unified motion system
- The current CSS structure is harder to scale for a bigger redesign

## Chosen Design Direction

We will redesign the site as an:

## Editorial-Tech Portfolio

This means the site should feel like a hybrid of:

- a modern product landing page
- a premium personal brand site
- a polished frontend engineer portfolio

The tone should be:

- confident
- sharp
- modern
- clean
- slightly bold
- not noisy

## Audience Priority

The design should work well for:

1. Recruiters scanning quickly
2. Clients assessing credibility
3. Other developers viewing work quality

Because of that, the layout should prioritize:

- readability
- fast scanning
- strong first impression
- clear project credibility
- polished interaction detail

## Visual Mood

The site should feel:

- bright but not sterile
- premium without looking corporate
- technical without looking cold

The overall atmosphere will use:

- soft off-white backgrounds
- deep ink text and surfaces
- one strong green accent
- one warm highlight accent used sparingly

## Color Direction

We are moving away from the current purple-heavy dark theme.

### Proposed palette

- Base background: `#f5f1e8`
- Secondary background: `#ebe4d8`
- Surface: `#fffaf2`
- Ink: `#111827`
- Muted ink: `#475569`
- Primary accent: `#0f766e`
- Primary accent deep: `#115e59`
- Highlight accent: `#c2410c`
- Soft border: `#d6d3d1`

### How the palette should behave

- Backgrounds should feel layered, not flat
- Accent green should communicate polish and confidence
- Warm orange should be used for emphasis, not everywhere
- Cards should feel tactile with soft borders and controlled shadows

## Typography Direction

We want typography to feel more designed and less default.

### Proposed font pairing

- Headings: `Space Grotesk`
- Body: `Manrope`

### Typography principles

- Large, assertive hero headline
- Strong section titles with tighter spacing
- Cleaner body text for better reading
- Better contrast between labels, headings, metadata, and supporting copy

## Shape and Surface Language

The new UI should use:

- medium-large rounded corners
- soft layered cards
- subtle borders
- restrained shadows
- generous spacing

### Style rules

- Avoid glassmorphism-heavy design
- Avoid neon effects
- Avoid overly rounded “bubble UI”
- Avoid generic flat cards with no personality

## Motion Direction

Animation should feel intentional and premium, not flashy for its own sake.

### Motion style

- staggered reveals
- directional entrances
- soft fade and rise transitions
- card lift on hover
- subtle background motion where useful
- smooth active states in navigation

### Motion principles

- Motion should support hierarchy
- Motion should help scanning, not distract from content
- Repeated patterns should feel consistent across sections
- Mobile motion should be lighter than desktop motion when needed

## Layout Direction

The new layout will keep the current section order, but each section will be redesigned.

### Section strategy

#### Top Navigation

- Cleaner horizontal nav
- Stronger logo/wordmark treatment
- Better mobile menu
- More premium CTA treatment

#### Hero

- Bigger first impression
- More intentional split layout
- Better headline rhythm
- Better CTA grouping
- Background treatment that adds atmosphere

#### About

- More editorial layout
- Stronger visual balance between image, stats, and text
- Better card styling

#### Experience

- Skill display should feel more curated
- Replace plain boxes with cleaner grouped cards or categorized lists
- Improve scanability

#### Portfolio

- This should become the strongest section after the hero
- More premium project cards
- Better image presentation
- Better hierarchy between title, description, stack, and CTA

#### Contact

- Cleaner split layout
- Better form styling
- More trust and polish

#### Footer

- Simpler and more refined
- Strong close to the page

## Content Reuse Strategy

We are reusing the content, but not blindly.

### Keep

- Existing personal/about information
- Project titles and links
- Contact destinations
- Core skills and experience categories

### Refine

- Hero copy for stronger impact
- Portfolio descriptions for consistency
- Microcopy for CTAs and labels
- Section subtitles/headings where helpful

## Technical Direction for Phase 2

This design direction should translate into Tailwind theme tokens for:

- colors
- font families
- container widths
- border radii
- shadows
- spacing scale
- animation utilities

## Implementation Rules

As we move into redesign and migration, we should follow these rules:

- Keep the code maintainable
- Prefer reusable UI patterns over ad hoc styling
- Do not reintroduce large section-specific CSS files unless absolutely needed
- Preserve responsiveness from the start
- Make every section feel part of one system

## Success Criteria

We will know Phase 1 succeeded if the redesign later feels:

- visually distinct from the original
- more modern and premium
- easier to scan
- more credible for clients and recruiters
- consistent across all sections

## Recommendation for Phase 2

The next step should be:

1. Install Tailwind CSS
2. Add theme tokens based on this design direction
3. Create shared utility patterns
4. Redesign the navigation and hero first

## Assumptions Made

- We are optimizing the portfolio for both recruiters and clients, not just personal expression
- We want a bolder redesign rather than a subtle facelift
- We want to keep the existing content structure instead of rebuilding the whole information architecture
- We are comfortable moving away from the current purple-heavy styling
