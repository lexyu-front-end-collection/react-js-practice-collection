import { FC } from 'react';
import Navbar from '@/components/ui/Navbar/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

// export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
//     return (
//         <div className="min-h-screen">
//             <Navbar />
//             <main className="p-8">
//                 {children}
//             </main>
//         </div>
//     );
// };


const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="p-8">
                {children}
            </main>
        </div>
    );
};


export default MainLayout;