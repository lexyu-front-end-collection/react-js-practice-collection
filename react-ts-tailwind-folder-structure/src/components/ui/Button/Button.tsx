import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

// export const Button: FC<ButtonProps> = ({ children, onClick }) => {
//   return (
//     <button 
//       onClick={onClick}
//       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//     >
//       {children}
//     </button>
//   );
// };


const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;