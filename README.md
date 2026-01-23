# TrueSigner Landing Page

A premium, Cantina-style landing page for **TrueSigner**, featuring deterministic transaction signing workflows and a secure waitlist registration system.

## 🎨 Design Philosophy

The UI has been refactored to prioritize visual excellence and a minimal, deterministic feel:
- **Cantina-style Layout**: A single centered, outlined container with a subtle backdrop blur and 1px border.
- **Deep Dark Aesthetic**: A custom `deep-dark` color palette with high-contrast `vrc-cyan` accents.
- **Deterministic Motion**: Animated transaction flow demonstrating the zero-trust verification process with 1→2→3→4 diamond connectors.
- **Responsive Grid**: Two-column layout (Desktop) that collapses gracefully for mobile experiences.

## 🚀 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Poppins (Primary)
- **Icons**: Lucide React
- **Validation**: React Hook Form + Zod

---

## 🛠 Next Steps for Dev Team

As part of the integration into the Verichains ecosystem, the following tasks are required:

### 1. Integration & Database
- **Embed**: Transition this standalone repository into the main Verichains website codebase. Ensure consitent header and footer.
- **Database**: Integrate with the existing production database.
- **Storage**: Ensure all fields (First Name, Last Name, Work Email, Organization, Telegram) are correctly mapped and stored safely.

### 2. Notifications & Sales Ops
- **Email Trigger**: Implement an automated email notification system to alert the Sales Team similiar to current contact us lead capture when a new person joins the waitlist.

### 3. Validation Logic Enhancements
- **Work Email Enforcement**: Update the Zod validation schema and backend logic to **strictly accept work emails only**
- **Consistency**: Maintain parity with Verichains' current "Work Email Only" check patterns used across other products.

---

## 📦 Project Structure

```bash
├── app/                  # Next.js App Router (Layout & main Page)
├── components/           # UI Component Library
│   ├── information/      # Transaction Flow and Process steps
│   ├── layout/           # OutlinedContainer, Header, Footer
│   ├── ui/               # Primary Inputs, Buttons
│   └── waitlist/         # Enhanced Waitlist Form
├── lib/
│   ├── animations/       # Framer Motion variants
│   ├── api/              # API implementation (DB hooks)
│   └── validations/      # Schemas (Update Work Email logic here)
└── public/               # Static Assets
```

## 🛠 Getting Started

```bash
npm install
npm run dev
```
