# HackerMooseAI

A responsive static website showcasing HackerMooseAI projects, with English and Traditional Chinese content, a dedicated contact page, and Idaho-based Terms of Service.

## Local preview

No dependencies, build tools, or database are required. From the project directory, run:

```sh
python -m http.server 8017 --bind 127.0.0.1
```

Open [the homepage](http://127.0.0.1:8017/index.html), [Contact Us](http://127.0.0.1:8017/contact.html), or [Terms of Service](http://127.0.0.1:8017/terms.html).

You can also open `index.html` directly to preview the design. Contact form submission requires an HTTP or HTTPS page; it is blocked when opened through `file://`.

## Projects

- **[Picking Geek AI](https://pickinggeek002.onrender.com/)**: AI-assisted research for US and Taiwan stocks, including technical indicators, interactive charts, and generated market insights.
- **[US Visa Photo](https://usphotoapp-codex.onrender.com/)**: Portrait preparation with background processing, cropping, previews, and digital or print layouts as described by the product.

Both project cards use owner-provided images and link directly to their respective applications.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage, project showcase, brand introduction, and vision. |
| `contact.html` | Standalone contact form with bilingual labels. |
| `terms.html` | Standalone Terms of Service with 16 bilingual sections. |
| `styles.css` | Shared responsive layout, colors, typography, and page styles. |
| `script.js` | Language switching, mobile navigation, and local-file form handling. |
| `assets/` | Project images, space background, and unused legacy demonstration images. |
| `picture/` | Owner-provided brand assets, including retained original illustrations. |
| `AGENTS.md` | Project instructions, including the English-first README preference. |

## Contact form

The form submits through FormSubmit to **hackermooseaitech@gmail.com**. It includes name, company, email, phone, inquiry topic, and message fields. Name, email, and message are required. The service's default verification remains enabled, and a direct email link is available as an alternative.

To activate and verify delivery:

1. Open the contact page through the local server or an HTTPS deployment.
2. Submit a test message and complete any verification requested by FormSubmit.
3. Check the recipient inbox and spam folder for the initial confirmation email, then activate the address.
4. Submit another test message and confirm that it arrives.

The integration has been configured, but actual delivery and recipient activation have not been independently verified. Do not store Gmail passwords or other credentials in the frontend.

See the [FormSubmit documentation](https://formsubmit.co/) for service details.

## Terms of Service

The terms use Idaho law and applicable US federal law, with an effective date of **October 20, 2026**. They address AI output, investment research, visa photo preparation, payments, user content, external services, and consumer rights.

- HackerMooseAI is identified as a brand; the operator's legal name or registered entity name still needs to be supplied.
- The terms preserve mandatory consumer protections and do not impose exclusive venue, mandatory arbitration, or a class-action waiver.
- The terms do not replace a privacy policy. A separate privacy notice reflecting actual data handling still needs to be prepared.
- A footer link alone does not establish express acceptance. Relevant product registration or checkout flows need appropriate notice and acceptance mechanisms; those external applications are outside this repository.
- Before production use, have Idaho counsel review the operator identity, product terms, payment and refund practices, and final wording.

Research references include the [FTC COPPA FAQ](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions), [FTC subscription guidance](https://www.ftc.gov/business-guidance/blog/2019/03/recipe-rosca-violation), [Investor.gov AI investor alert](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/artificial-intelligence-fraud), and [US Department of State photo requirements](https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html).

## Design and assets

The initial visual direction was inspired by [DeepWave](https://dwave.cc/en-US): dark colors, luminous accents, centered hero content, a two-column showcase, and a structured footer. The implementation uses HackerMooseAI branding without importing the reference company's awards, endorsements, trademarks, or tracking code.

Current project cards use owner-provided artwork. Legacy demonstration photographs remain in `assets/` but are not referenced by the current pages; review their licensing before any reuse. Original moose illustrations remain in `picture/` and are not displayed on the current pages.

## Source and documentation

Source repository: [JamesChenPoChih/hackermooseai](https://github.com/JamesChenPoChih/hackermooseai), branch `main`. Pushing source code does not itself configure website hosting.

**Maintain this README and future README files primarily in English.** Translations may be provided as supplementary documentation when requested. This documentation preference does not change the website's bilingual interface.
