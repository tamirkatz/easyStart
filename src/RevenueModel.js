// import React, { useState } from 'react';
// import Chatbot from 'react-chatbot-kit';

// const RevenueModelChatbot = () => {
//     const [messageList, setMessageList] = useState([]);

//     const handleUserMessage = (message) => {
//         const lowerMessage = message.toLowerCase();

//         // Dynamic responses based on the message
//         if (lowerMessage.includes("subscription")) {
//             setMessageList([...messageList, "Subscriptions are great for steady income. Could you tell me more about your services?"]);
//         } else if (lowerMessage.includes("direct sales")) {
//             setMessageList([...messageList, "Direct sales can be very profitable. What types of products are you thinking about?"]);
//         } else {
//             setMessageList([...messageList, "Could you clarify your preferred revenue model?"]);
//         }
//     };

//     return (
//         <Chatbot
//             config={/* Chatbot configuration object */}
//             messageParser={/* Message parsing logic */}
//             actionProvider={/* Defines what the bot does with the parsed messages */}
//             messageList={messageList}
//             handleUserMessage={handleUserMessage}
//         />
//     );
// };

// export default RevenueModelChatbot;
