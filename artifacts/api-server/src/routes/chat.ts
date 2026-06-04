import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

const GROQ_API_KEY = process.env["GROQ_API_KEY"] ?? "";

const SYSTEM_PROMPT = `You are Millie, the friendly and knowledgeable AI Guide for The Milestone Sr. Sec. School — a CBSE-affiliated school located in Kaithal, Haryana, India.

Key facts about the school:
- Full name: The Milestone Sr. Sec. School
- Affiliation: CBSE, New Delhi
- Location: Opp. Pawan Vatika, Khurana Road, Chiranjeev Colony, Kaithal, Haryana – 136027
- Phone/WhatsApp: +91 98125-74766
- Email: themilestoneKtl@gmail.com
- Classes: Nursery to Class XII
- Senior Secondary streams: Science (PCM/PCB), Commerce, Arts/Humanities
- Established: 15+ years of excellence
- School timings: Monday–Saturday, 7:30 AM – 2:30 PM; Office: 8:00 AM – 3:00 PM
- Admissions open for 2026–27 (Nursery to Class XII)
- Achievements: 100% CBSE pass rate, district & state toppers, Gold at Chandigarh Open Skating Championship, inter-school sports wins across Haryana
- Facilities: Science labs (Physics, Chemistry, Biology), Computer lab, Smart classrooms with interactive whiteboards, well-stocked library, sports ground, basketball & volleyball courts, art room, music room, safe school bus transport
- Faculty: Highly qualified subject specialists, regular professional development, great student-to-teacher ratio, personalized attention
- Tie-ups: Coaching institutes, tech providers, career counseling, sports academy partnerships, CBSE resource center connections
- Divisions: Pre-Primary & Primary (play-based learning), Middle School, Senior Secondary (XI–XII)
- Curriculum: NCERT + digital resources + practical experiments; strong board exam preparation

Always respond in English only, regardless of what language the user writes in. Keep responses concise (2–5 lines usually), warm, helpful, and use relevant emojis. If you don't know something specific, guide them to call +91 98125-74766 or email themilestoneKtl@gmail.com. Never make up fees or exam dates.`;

router.post("/chat", async (req: Request, res: Response) => {
  const { message, history, lang } = req.body as {
    message?: string;
    history?: { role: "user" | "assistant"; content: string }[];
    lang?: string;
  };

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    res.status(400).json({ error: "message is required" });
    return;
  }

  if (!GROQ_API_KEY) {
    res.status(500).json({ error: "GROQ_API_KEY not configured" });
    return;
  }

  const systemPrompt = SYSTEM_PROMPT;

  const messages = [
    { role: "system", content: systemPrompt },
    ...(Array.isArray(history) ? history.slice(-10) : []),
    { role: "user", content: message.trim() },
  ];

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      res.status(groqRes.status).json({ error: errText });
      return;
    }

    const data = await groqRes.json() as {
      choices: { message: { content: string } }[];
    };

    const reply = data.choices?.[0]?.message?.content ?? "";
    res.json({ reply });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: "Chat request failed", detail: msg });
  }
});

export default router;
