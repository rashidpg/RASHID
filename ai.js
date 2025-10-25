const OPENAI_API_KEY = "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"; // Replace this with your actual OpenAI API key

async function runAI() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("aiResponse");
  output.textContent = "AI: Thinking...";

  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: input }]
      })
    });
    const data = await result.json();
    output.textContent = "AI: " + data.choices[0].message.content;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}

