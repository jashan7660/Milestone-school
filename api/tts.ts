const CARTESIA_API_KEY = process.env.CARTESIA_API_KEY ?? "";
const VOICE_ID = "4877b818-c7fe-4c89-b1cf-eadf8e23da72";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { text } = req.body ?? {};

  if (!text || typeof text !== "string" || text.trim().length === 0) {
    res.status(400).json({ error: "text is required" });
    return;
  }

  if (!CARTESIA_API_KEY) {
    res.status(500).json({ error: "CARTESIA_API_KEY not configured" });
    return;
  }

  try {
    const cartesiaRes = await fetch("https://api.cartesia.ai/tts/bytes", {
      method: "POST",
      headers: {
        "Cartesia-Version": "2024-06-10",
        "X-API-Key": CARTESIA_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model_id: "sonic-2",
        transcript: text.trim(),
        voice: {
          mode: "id",
          id: VOICE_ID,
        },
        output_format: {
          container: "mp3",
          encoding: "mp3",
          sample_rate: 44100,
        },
      }),
    });

    if (!cartesiaRes.ok) {
      const errText = await cartesiaRes.text();
      res.status(cartesiaRes.status).json({ error: errText });
      return;
    }

    const audioBuffer = await cartesiaRes.arrayBuffer();

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", audioBuffer.byteLength.toString());
    res.setHeader("Cache-Control", "no-cache");
    res.status(200).send(Buffer.from(audioBuffer));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: "TTS request failed", detail: msg });
  }
}
