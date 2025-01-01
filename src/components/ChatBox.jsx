import { useState } from 'react';
import Message from './Message';

export default function ChatBox() {
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
                setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: `Hello, ${input}.` }]);
            }, 1000);
        }
    };

    return (
        <div className="h-screen">
            <div className="custom-scrollbar flex flex-col h-full max-w-3xl mx-auto py-8 p-6 bg-slate-600 shadow-lg rounded-lg">
                <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                    {messages.map((msg, index) => (
                        <Message key={index} sender={msg.sender} text={msg.text} />
                    ))}
                </div>
                <div className="flex bg-red-600 mb-16 sm:mb-0">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
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