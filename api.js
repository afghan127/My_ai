export default async function handler(req, res) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_HF_TOKEN",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: req.body.message })
    }
  );

  const result = await response.json();
  res.status(200).json({ reply: result[0].generated_text });
}