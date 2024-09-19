document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const addMessage = (message, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    const getAIResponse = (userMessage) => {
        // Basic AI response logic
        const responses = {
            "salom": "Salom! Qanday yordam bera olishim mumkin?",
            "qanday yordam bera olasiz": "Men sizning savollaringizga javob bera olishim mumkin.",
            "rahmat": "Sizga yordam bera olishimdan xursandman!",
            "": "Iltimos, biror narsa yozing."
        };

        // Basic response based on user message
        return responses[userMessage.toLowerCase()] || "Kechirasiz, tushunmadim.";
    };

    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            const botResponse = getAIResponse(userMessage);
            addMessage(botResponse, 'bot');
            userInput.value = ''; // Clear the input field
        }
    });

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
