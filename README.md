# M. Daffa Raihan Akbar — Developer Portfolio

The personal portfolio of **M. Daffa Raihan Akbar**, a Full Stack Developer based in Jakarta, Indonesia. It shows my skills, professional experience and personal projects, a career timeline, my resume and a contact form.

Live site: [https://daffa-akbar.vercel.app](https://daffa-akbar.vercel.app)

## ✨ Pages

- **Home**: introduction, featured skills and featured experience
- **Skills**: every skill with a short description and a rating
- **Experience**: professional work and personal projects, each with a detail page
- **Career**: an interactive timeline of the companies I have worked for
- **Resume**: my resume
- **Contact**: a contact form

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: Google Analytics + Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com)

## 🔧 Running locally

1. Clone this repository:

   ```bash
   git clone https://github.com/daffakbar13/portfolio2.git
   cd portfolio2
   ```

2. Copy the contents of `.env.copy` to a new `.env` file and fill in the required information.

3. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 📝 Updating the content

- **Site info and links**: `config/site.ts`
- **Skills**: `config/skills.ts`
- **Experience and projects**: `config/experience.ts`
- **Career timeline**: `config/career.ts`
- **Navigation**: `config/routes.ts`
- **Colors and theme**: `tailwind.config.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE). It started from the open-source [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) template.
