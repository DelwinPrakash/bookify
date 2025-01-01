import { ReactTyped } from 'react-typed';

export default function Message({ sender, text }) {
    const isUser = sender === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`p-2 sm:max-w-xl rounded-xl ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {isUser ? text : (
                    <ReactTyped
                        strings={[text]}
                        typeSpeed={17}
                        className="font-medium leading-relaxed"
                        showCursor={false}
                    />
                )}
            </div>
        </div>
    );
}