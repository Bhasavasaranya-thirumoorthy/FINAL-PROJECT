// import {createContext, useState, useEffect,useContext} from "react";
// import {useAuthContext} from "./AuthContext"
// import io from "socket.io-client";

// // eslint-disable-next-line react-refresh/only-export-components
// const SocketContext = createContext();

// export const useSocketContext = () => {
//     return useContext(SocketContext);
// }

// export const SocketContextProvider = ({children}) => {

//     const [socket,setSocket] = useState(null);
    
//     const [onlineUsers,setOnlineUsers] = useState([]);
//     const {authUser} = useAuthContext();

//     useEffect(()=> {
//         if(authUser) {
//             const socket = io("http://localhost:5000",{
//                 query:{
//                     userId: authUser._id,
//                 }
//             });

//             setSocket(socket);

//             socket.on("getOnlineUsers",(users)=> {
//                 setOnlineUsers(users)
//             })

//             return () => socket.close()
//         } else{
//             if(socket) {
//                 socket.close();
//                 setSocket(null);
//             }
//         }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[authUser]);``
//     return (
//         <SocketContext.Provider value={{socket,onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
//     )
// }

// chatgpt code 

import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    let newSocket;

    if (authUser) {
      newSocket = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
    }

    // ✅ Cleanup socket on unmount or when authUser changes
    return () => {
      if (newSocket) {
        newSocket.close();
        setSocket(null);
      }
    };
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;


// import { createContext, useState, useEffect, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// const SocketContext = createContext();

// export const useSocketContext = () => {
//   return useContext(SocketContext);
// };

// export const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { authUser } = useAuthContext();

//   useEffect(() => {
//     if (authUser) {
//       const newSocket = io("http://localhost:5000", {
//         query: {
//           userId: authUser._id,
//         },
//       });

//       setSocket(newSocket);

//       newSocket.on("getOnlineUsers", (users) => {
//         setOnlineUsers(users);
//       });

//       return () => newSocket.close();
//     } else {
//       if (socket) {
//         socket.close();
//         setSocket(null);
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [authUser]);

//   return (
//     <SocketContext.Provider value={{ socket, onlineUsers }}>
//       {children}
//     </SocketContext.Provider>
//   );

// };







