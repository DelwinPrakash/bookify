import { useState } from 'react';
import Message from './Message';

export default function ChatBox() {
    const items = ["Yes", "No", "Maybe", "Sure", "Absolutely", "Definitely", "I don't know", "I'm not sure", "Of course", "Why not?", 
        "Maybe later", "Not yet", "Ask again", "Perhaps", "I think so", "I hope so", "I’ll try", "It’s possible", 
        "Definitely not", "I doubt it", "Probably", "Yes, please", "No thanks", "Sounds good", "I agree", "I disagree", 
        "I need to check", "Let's do it", "I'll pass", "Not today", "I’m busy", "I’m free", "It’s fine", "That’s okay", 
        "That works", "I’m ready", "I’m not ready", "Give me a moment", "Let’s wait", "I’m thinking", "I’m sure", "It depends", 
        "Sounds like a plan", "I’ll consider it", "Not right now", "Let's go", "Let me think", "Not a chance", 
        "I agree with you", "That’s strange", "Interesting", "How curious", "I’ll be there", "I’m on my way", "I can’t make it", 
        "Maybe another time", "Good idea", "Not a problem", "All good", "It’s okay", "I’m in", "I’ll handle it", 
        "I’ll figure it out", "I need help", "Can you help?", "Let's find out", "Let’s see", "I don’t mind", "That’s fine", 
        "No worries", "It’s up to you", "Sure thing", "Of course not", "Absolutely not", "I forgot", "I remember", 
        "You’re right", "I see", "Got it", "Understood", "That makes sense", "I believe so", "I don’t believe so", 
        "That’s amazing", "I like it", "I love it", "It’s great", "I’m excited", "I’m happy", "I’m sad", "I’m confused", 
        "It’s okay, really", "It’s urgent", "It’s not urgent", "I have no idea", "It’s a mystery", "I’m on it", 
        "Let’s do something else", "Time will tell", "We’ll see"
    ];

    const [messages, setMessages] = useState([
        { sender: 'user', text: 'Hello, AI!' },
        { sender: 'ai', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'user', text: input }]);
            setInput('');
            // Simulate AI response
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: `${items[Math.floor(Math.random() * 100)]}`}]);
            }, 1000);
        }
    };

    return (
        <div className="h-screen">
            <div className="custom-scrollbar flex flex-col h-full max-w-3xl mx-auto py-8 p-6 shadow-2xl shadow-sky-200 rounded-lg">
                <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                    {messages.map((msg, index) => (
                        <Message key={index} sender={msg.sender} text={msg.text} />
                    ))}
                </div>
                <div className="flex mb-16 sm:mb-0">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Type your message..."
                    autoFocus
                    />
                    <button
                        className="px-5 bg-blue-500 text-white rounded-r-lg hover:bg-blue-400"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}