import Header from '@/components/notebook/notebookHeader';
import Info from '@/components/notebook/notebookInfo';

import MyNoteBooksList from '@/components/notebook/mynotebookslist';

const Home = () => {
    return (
        <main className=" w-[95%] min-h-screen mx-auto  ">
            <Header />
            <Info />
            <div className=" grid grid-cols-12  -mt-30">
                <MyNoteBooksList />
            </div>
        </main>
    );
};

export default Home;
