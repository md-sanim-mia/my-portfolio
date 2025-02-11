// const SkillItem = ({
//   name,
//   level,
//   icon,
//   color,
//   animate,
// }: {
//   name: string;
//   level: number;
//   icon: any;
//   color: string;
//   animate: boolean;
// }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//       <div className="flex items-center mb-4">
//         <span className="text-3xl mr-3" style={{ color }}>
//           {icon}
//         </span>
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//           {name}
//         </h3>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
//         <div
//           className="h-3 rounded-full transition-all duration-1000 ease-out"
//           style={{
//             width: animate ? `${level}%` : "0%",
//             backgroundColor: color,
//           }}
//         />
//       </div>
//       <span className="inline-block mt-2 text-sm text-gray-600 dark:text-gray-300">
//         {level}%
//       </span>
//     </div>
//   );
// };

// export default SkillItem;
