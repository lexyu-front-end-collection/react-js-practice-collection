import { FC } from 'react';
import MainLayout  from '../../layouts/MainLayout/MainLayout';
import Button from '../../components/ui/Button/Button';

// export const HomePage: FC = () => {
//     return (
//         <MainLayout>
//             <div>
//                 <h1 className="text-2xl font-bold mb-4">首頁</h1>
//                 <Button>點擊我</Button>
//             </div>
//         </MainLayout>
//     );
// };

const HomePage: FC = () => {
    return (
        <MainLayout>
            <div>
                <h1 className="text-2xl font-bold mb-4">首頁</h1>
                <Button>點擊我</Button>
            </div>
        </MainLayout>
    );
};

export default HomePage;