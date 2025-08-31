export const funEmojis = [
	"👾",
	"⭐",
	"🌟",
	"🎉",
	"🎊",
	"🎈",
	"🎁",
	"🎂",
	"🎄",
	"🎃",
	"🎗",
	"🎟",
	"🎫",
	"🎖",
	"🏆",
	"🏅",
	"🥇",
	"🥈",
	"🥉",
	"⚽",
	"🏀",
	"🏈",
	"⚾",
	"🎾",
	"🏐",
	"🏉",
	"🎱",
	"🏓",
	"🏸",
	"🥅",
	"🏒",
	"🏑",
	"🏏",
	"⛳",
	"🏹",
	"🎣",
	"🥊",
	"🥋",
	"🎽",
	"⛸",
	"🥌",
	"🛷",
	"🎿",
	"⛷",
	"🏂",
	"🏋️",
	"🤼",
	"🤸",
	"🤺",
	"⛹️",
	"🤾",
	"🏌️",
	"🏇",
	"🧘",
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
	
};

// emojis.js

// export const funEmojis = [
//   "👾", "⭐", "🌟", "🎉", "🎊", "🎈", "🎁", "🎂",
//   "🎄", "🎃", "🎗", "🎟", "🎫", "🎖", "🏆", "🏅",
//   "🥇", "🥈", "🥉", "⚽", "🏀", "🏈", "⚾", "🎾",
//   "🏐", "🏉", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑",
//   "🏏", "⛳", "🏹", "🎣", "🥊", "🥋", "🎽", "⛸",
//   "🥌", "🛷", "🎿", "⛷", "🏂", "🏋️", "🤼", "🤸",
//   "🤺", "⛹️", "🤾", "🏌️", "🏇", "🧘"
// ];

// // React Component version
// export function GetRandomEmoji() {
//   const emoji = funEmojis[Math.floor(Math.random() * funEmojis.length)];
//   return <span>{emoji}</span>;
// }

