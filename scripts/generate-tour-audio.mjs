/**
 * Pre-generate Cartesia TTS audio for all tour steps.
 * Run: node scripts/generate-tour-audio.mjs
 * Saves to: artifacts/milestone-school/public/audio/tour-0.mp3 … tour-9.mp3
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../artifacts/milestone-school/public/audio");

const VOICE_ID = "4877b818-c7fe-4c89-b1cf-eadf8e23da72";

const TOUR_SCRIPTS = [
  /* 0 — Home */
  "Welcome to The Milestone Senior Secondary School, a CBSE-affiliated school in Kaithal, Haryana! The Home page shows our key highlights: 15 plus years of excellence, 100 percent board pass rate, smart classrooms, experienced faculty, and vibrant campus life. Scroll down to explore admissions, stats, and milestones!",

  /* 1 — Our Story */
  "Every great school starts with a vision! Founded with a deep commitment to quality education and character building, Milestone has grown into one of the most trusted CBSE schools in Kaithal district. Our story is one of dedication to our students, their families, and the community.",

  /* 2 — Directors */
  "Meet the visionary leaders behind The Milestone School! Our directors bring decades of experience in education. Under their leadership the school has achieved outstanding CBSE results, expanded infrastructure, and introduced smart classrooms and modern teaching methods.",

  /* 3 — Divisions */
  "The Milestone School has well-defined academic divisions. Pre-Primary and Primary wings nurture curiosity through play-based learning. Middle School bridges childhood and adolescence. Senior Secondary, Class 11 to 12, offers Science, Commerce, and Arts streams to prepare students for competitive exams and higher education.",

  /* 4 — Tie-Ups */
  "Education thrives through collaboration! Our Tie-Ups page showcases partnerships with leading organizations, coaching institutes, tech providers, and community bodies. Career counseling, sports academy partnerships, and CBSE resource center connections keep students and teachers updated.",

  /* 5 — Academics */
  "The Academics section is the core of what we do! CBSE curriculum from Nursery to Class 12, NCERT textbooks supplemented with digital resources and practical experiments. Our academic calendar balances rigorous study with co-curricular activities. Board exam preparation is our special strength!",

  /* 6 — Facilities */
  "Best-equipped school in Kaithal! Physics, Chemistry and Biology labs; Computer lab with the latest technology; Smart classrooms with interactive whiteboards; a well-stocked library; Sports ground, basketball and volleyball courts; Art room, music room, activity halls, and safe school bus transport.",

  /* 7 — Faculty */
  "Our incredible educators are selected for subject expertise and passion! Faculty undergoes continuous professional development as per CBSE guidelines. Specialist teachers for every subject, great faculty-to-student ratio, and personalized attention ensure no child falls behind. Our teachers are mentors, role models, and friends!",

  /* 8 — Achievements */
  "Students have won academic, sports, cultural, and community service awards! CBSE board results consistently see students scoring above 90 percent, with district and state toppers. Sports teams win inter-school competitions across Haryana. Science fairs, debates, quiz bowls — Milestone students shine everywhere!",

  /* 9 — Gallery */
  "A visual celebration of life at Milestone! See vibrant classrooms, science experiments, cultural programs, Sports Day, Annual Day, and everyday school magic. Joy on students' faces, concentration of young scientists in labs, and creativity in art rooms. Thank you for completing the tour — we hope to welcome you to The Milestone School!",
];

async function generateAudio(text, index) {
  const apiKey = process.env.CARTESIA_API_KEY;
  if (!apiKey) throw new Error("CARTESIA_API_KEY environment variable not set");

  const res = await fetch("https://api.cartesia.ai/tts/bytes", {
    method: "POST",
    headers: {
      "Cartesia-Version": "2024-06-10",
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_id: "sonic-2",
      transcript: text,
      voice: { mode: "id", id: VOICE_ID },
      output_format: { container: "mp3", encoding: "mp3", sample_rate: 44100 },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Cartesia API error for step ${index}: ${res.status} — ${err}`);
  }

  const buffer = await res.arrayBuffer();
  const outPath = join(OUT_DIR, `tour-${index}.mp3`);
  writeFileSync(outPath, Buffer.from(buffer));
  console.log(`  ✅ tour-${index}.mp3 saved (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  console.log(`\nGenerating ${TOUR_SCRIPTS.length} audio files → ${OUT_DIR}\n`);

  for (let i = 0; i < TOUR_SCRIPTS.length; i++) {
    process.stdout.write(`[${i + 1}/${TOUR_SCRIPTS.length}] Step ${i}: `);
    try {
      await generateAudio(TOUR_SCRIPTS[i], i);
    } catch (e) {
      console.error(`  ❌ FAILED: ${e.message}`);
      process.exit(1);
    }
  }

  console.log("\n🎉 All audio files generated successfully!\n");
}

main();
