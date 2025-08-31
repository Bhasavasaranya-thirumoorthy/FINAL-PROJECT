import React from 'react'
import { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext'

const MessageContainer = () => {
   
    const {selectedConversation, setSelectedConversation} = useConversation();

 useEffect(() => {

   return () => setSelectedConversation(null)

 },[setSelectedConversation])
   
  return (
    <div className='md:min-w-[450px] flex flex-col'>  
    {!selectedConversation ? (
        <NoChatSelected />
    ) : (

         <>
         <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
         </div>
         <Messages />
         <MessageInput />
        </>

 )}

    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col 
            items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName} ❄️</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />

            </div>

        </div>
    )
}

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import { TiMessages } from "react-icons/ti"
// import useConversation from '../../zustand/useConversation'

// const MessageContainer = () => {
//   const { selectedConversation } = useConversation();

//   return (
//     <div className='md:min-w-[450px] flex flex-col'>  
//       {!selectedConversation ? (
//         <NoChatSelected />
//       ) : (
//         <>
//           <div className='bg-slate-500 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span>{" "}
//             <span className='text-gray-900 font-bold'>
//               {selectedConversation?.fullName || "Unknown User"}
//             </span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       )}
//     </div>
//   )
// }

// export default MessageContainer

// const NoChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋 Select a chat to start messaging ❄️</p>
//         <TiMessages className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   )
// }

// import React, { useEffect, useState } from "react";
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";
// import { TiMessages } from "react-icons/ti";
// import useConversation from "../../zustand/useConversation";
// import { useAuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import { socket } from "../../socket"; // make sure you export your socket from a single file

// const MessageContainer = () => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const { authUser } = useAuthContext();
//   const [messages, setMessages] = useState([]);

//   // 🔹 Fetch old messages when selecting a chat
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!selectedConversation) return;
//       try {
//         const res = await axios.get(`/api/messages/${selectedConversation._id}`);
//         setMessages(res.data); // store in state
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };

//     fetchMessages();

//     // cleanup when switching conversation
//     return () => setMessages([]);
//   }, [selectedConversation]);

//   // 🔹 Listen for incoming socket messages
//   useEffect(() => {
//     socket.on("newMessage", (newMsg) => {
//       // check if the message belongs to the currently opened chat
//       if (
//         selectedConversation &&
//         (newMsg.senderId === selectedConversation._id ||
//           newMsg.receiverId === selectedConversation._id)
//       ) {
//         setMessages((prev) => [...prev, newMsg]);
//       }
//     });

//     return () => {
//       socket.off("newMessage");
//     };
//   }, [selectedConversation]);

//   if (!selectedConversation) return <NoChatSelected />;

//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       {/* Chat Header */}
//       <div className="bg-slate-500 px-4 py-2 mb-2">
//         <span className="label-text">To:</span>{" "}
//         <span className="text-gray-900 font-bold">
//           {selectedConversation.fullName}
//         </span>
//       </div>

//       {/* Messages List */}
//       <Messages messages={messages} />

//       {/* Input Box */}
//       <MessageInput
//         selectedConversation={selectedConversation}
//         onMessageSent={(msg) => setMessages((prev) => [...prev, msg])}
//       />
//     </div>
//   );
// };

// export default MessageContainer;

// // 🔹 Shown when no chat is selected
// const NoChatSelected = () => {
//   const { authUser } = useAuthContext();
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
//         <p>Welcome 👋 {authUser.fullName} ❄️</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className="text-3xl md:text-6xl text-center" />
//       </div>
//     </div>
//   );
// };


