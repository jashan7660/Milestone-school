import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

const CARTESIA_API_KEY = process.env["CARTESIA_API_KEY"] ?? "";
const VOICE_ID = "4877b818-c7fe-4c89-b1cf-eadf8e23da72";

router.post("/tts", async (req: Request, res: Response) => {
  const { text } = req.body as { text?: string };

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

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": audioBuffer.byteLength.toString(),
      "Cache-Control": "no-cache",
    });

    res.send(Buffer.from(audioBuffer));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: "TTS request failed", detail: msg });
  }
});

export default router;
