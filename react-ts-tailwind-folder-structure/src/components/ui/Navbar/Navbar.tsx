import { FC } from 'react';
import Button from '@/components/ui/Button';

// import { Button } from '../Button';

// export const Navbar: FC = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <span className="text-xl font-bold">Demo App</span>
//         <Button>登出</Button>
//       </div>
//     </nav>
//   );
// };


const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold">Demo App</span>
        <Button>登出</Button>
      </div>
    </nav>
  );
};

export default Navbar;