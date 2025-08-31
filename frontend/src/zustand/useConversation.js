


import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

// import { create } from "zustand";

// export const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),

//   messages: [],
//   setMessages: (updater) =>
//     set((state) => ({
//       messages:
//         typeof updater === "function" ? updater(state.messages) : updater,
//     })),
// }));
