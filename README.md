# ✨ Pounchik Beauty Salon

A responsive, single-page marketing website for **Pounchik Beauty Salon and Cosmetics Fancy Lingeries** — a beauty salon, cosmetics boutique, and bridal studio based in Thiruvananthapuram, Kerala.

Built with plain HTML, CSS, and JavaScript, the site showcases the salon's services and gallery, and lets visitors request an appointment directly through an on-page booking form.

---

## ✨ Features

- 🖥️ **Fully Responsive Design** — Mobile-friendly layout with a collapsible nav menu and a sticky mobile call-to-action bar.
- 💇 **Services Showcase** — Filterable service cards (Bridal Makeup, Event Makeup, Saree Draping, Hair Styling & Spa, Facials, Threading & Grooming, Microblading, Cosmetics Store, Fancy Lingerie) organized by category tabs.
- 🖼️ **Filterable Gallery** — A "Moments of Transformation" gallery with category-based filtering.
- 📅 **Appointment Booking Form** — Visitors can select a service, date, and enter their details to request a booking, with a confirmation modal summarizing their request.
- 🕐 **Live "Today" Highlight** — The opening hours table automatically highlights the current day.
- ❓ **FAQ Accordion** — Expandable frequently-asked-questions section.
- ⭐ **Testimonials & Social Feed** — Sections for client reviews and social highlights.
- 📍 **Location & Business Info** — Address, contact details, and an embedded local business schema for search engines.
- 🔍 **SEO-Ready** — Open Graph, Twitter Card, and JSON-LD `BeautySalon` structured data baked into the `<head>` for better discoverability and rich search results.

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Behavior | Vanilla JavaScript (`app.js`) |
| Assets | Static images (`assets/images/`) |

No build tools, frameworks, or backend — it's a static site that runs in any browser.

---

## 📁 Project Structure

```
PounchikBeautySalon/
├── index.html              # Main page: hero, services, gallery, booking, FAQ, location
├── style.css                # All styling
├── app.js                   # Interactivity: nav, tabs, filtering, FAQ, booking modal, etc.
└── assets/
    └── images/               # Salon photos (interior, services, gallery)
```

---

## 🚀 Getting Started

Since this is a static site, no installation is required.

```bash
git clone https://github.com/akhithasvijayan/PounchikBeautySalon.git
cd PounchikBeautySalon
```

Open `index.html` directly in a browser, or serve it locally:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 📌 Notes

- The booking form currently shows an on-page **confirmation modal** rather than sending the request anywhere — it's a front-end mockup of the booking flow. Wiring it up to an email service, WhatsApp API, or backend endpoint would be needed to make bookings actually reach the salon.
- Business details (address, phone number, hours) are hardcoded in `index.html` — update these directly if they change.

---

## 📄 License

This project is open source. Add a `LICENSE` file (e.g., MIT) to clarify usage terms for contributors and users.
