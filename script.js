// Scroll to top
document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Chatbot logic
const chat = document.getElementById("chat");
const input = document.getElementById("input");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let userText = input.value;
    chat.innerHTML += "<p><b>You:</b> " + userText + "</p>";

    let reply = "I am Suhani's portfolio bot 😊";

    if (userText.toLowerCase().includes("skills")) {
      reply = "She knows Java, Web Dev, SQL, and more!";
    }

    if (userText.toLowerCase().includes("project")) {
      reply = "She built E-commerce & Traffic systems.";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
    input.value = "";
  }
});
