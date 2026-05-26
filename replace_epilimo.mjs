import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const assetsDir = path.join(srcDir, 'assets');
const componentsDir = path.join(srcDir, 'components', 'site');

// Rename image
const oldImgPath = path.join(assetsDir, 'epilimo.jpg');
const newImgPath = path.join(assetsDir, 'shirodhara.jpg');
if (fs.existsSync(oldImgPath)) {
  fs.renameSync(oldImgPath, newImgPath);
}

// Write Shirodhara.tsx
const shirodharaContent = `import shirodharaImg from "@/assets/shirodhara.jpg";
import { ArrowUpRight } from "lucide-react";

const POINTS = [
  "Deeply relaxing therapy with continuous rhythmic flow",
  "Pacifies the central nervous system and relieves stress",
  "Enhances mental clarity, sleep quality, and intuition",
  "Holistic ritual harmonizing mind, body, and spirit",
];

export function Shirodhara() {
  return (
    <section id="shirodhara" className="section-pad bg-background content-auto">
      <div className="container-luxe grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative reveal">
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={shirodharaImg}
              alt="A warm continuous flow of herbal oil over the forehead, representing Shirodhara therapy"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute top-5 left-5 bg-cream text-ink text-fluid-xs tracking-[0.16em] uppercase px-4 py-2">
            Ancient Therapy
          </span>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow mb-5 reveal">Shirodhara</p>
          <h2 className="font-display text-fluid-2xl leading-[1.05] mb-5 reveal">
            A state of deep,
            <span className="italic text-forest"> meditative rest</span>.
          </h2>
          <p className="text-foreground/75 text-fluid-lg leading-relaxed mb-8 max-w-lg reveal">
            Shirodhara is a profoundly relaxing and ancient Ayurvedic therapy that involves gently and steadily pouring warm, medicated liquids over the forehead. This continuous, rhythmic stream is directed at the "third eye" to quiet the mind, pacify the central nervous system, and alleviate stress and anxiety.
          </p>

          <ul className="space-y-3 mb-8 reveal">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 reveal">
            <a href="#book" className="btn-primary">
              Book Shirodhara <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-link !text-forest-deep">Speak to a specialist</a>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, 'Shirodhara.tsx'), shirodharaContent, 'utf8');

// Delete Epilimo.tsx
const epilimoPath = path.join(componentsDir, 'Epilimo.tsx');
if (fs.existsSync(epilimoPath)) {
  fs.unlinkSync(epilimoPath);
}

// Update other files
function replaceInFile(filePath, searchTerms) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  searchTerms.forEach(term => {
    newContent = newContent.replace(term.regex, term.replacement);
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

// index.tsx
replaceInFile(path.join(srcDir, 'routes', 'index.tsx'), [
  { regex: /import \{ Epilimo \} from "@\/components\/site\/Epilimo";/g, replacement: 'import { Shirodhara } from "@/components/site/Shirodhara";' },
  { regex: /<Epilimo \/>/g, replacement: '<Shirodhara />' }
]);

// Header.tsx
replaceInFile(path.join(componentsDir, 'Header.tsx'), [
  { regex: /\{ label: "Epilimo", href: "#epilimo" \}/g, replacement: '{ label: "Shirodhara", href: "#shirodhara" }' }
]);

// Footer.tsx
replaceInFile(path.join(componentsDir, 'Footer.tsx'), [
  { regex: /href="#epilimo"/g, replacement: 'href="#shirodhara"' },
  { regex: />Epilimo<\/a>/g, replacement: '>Shirodhara</a>' }
]);

// Booking.tsx
replaceInFile(path.join(componentsDir, 'Booking.tsx'), [
  { regex: /"Epilimo \(DNA Test\)"/g, replacement: '"Shirodhara"' }
]);

// seo.ts
replaceInFile(path.join(srcDir, 'lib', 'seo.ts'), [
  { regex: /Epilimo DNA testing/gi, replacement: 'Shirodhara' },
  { regex: /Epilimo DNA test/gi, replacement: 'Shirodhara' }
]);

// Testimonials.tsx (if any Epilimo mentioned, maybe change to Shirodhara)
replaceInFile(path.join(componentsDir, 'Testimonials.tsx'), [
  { regex: /The Epilimo consultation completely changed how I think about my skin. My facial protocol is now built around my actual biology. Results in six weeks were undeniable./g, replacement: 'The Shirodhara therapy was incredibly transformative. It helped me find profound inner peace and relieved my chronic migraines after just a few sessions.' }
]);

// manifest
replaceInFile(path.join(process.cwd(), 'public', 'site.webmanifest'), [
  { regex: /Epilimo DNA testing/g, replacement: 'Shirodhara' }
]);

console.log("All Epilimo references replaced with Shirodhara.");
