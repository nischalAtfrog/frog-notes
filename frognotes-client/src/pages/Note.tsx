import SourceCard from '@/components/sourcecard';
import { ArrowLeft, PlusSquareIcon } from 'lucide-react';
import NotechatBox from '../components/chat/notechatbox';

const Note = () => {
    return (
        <main className=" w-[95%] min-h-screen mx-auto grid grid-cols-12 gap-8">
            <div className="note-header col-span-full  h-fit relative top-10 flex items-center">
                <a href="/" className="flex items-center">
                    <ArrowLeft className="w-10 h-10 " />
                    <h2 className="note-title text-3xl ml-4 ">Notebooks</h2>
                </a>
            </div>

            <div className="sources col-start-1 col-span-3 place-items-center gap-2 ">
                <div className="flex  h-fit items-center justify-between col-start-1 relative w-full  ">
                    <h2 className="text-2xl font-extralight">Sources</h2>
                    <PlusSquareIcon className="w-8 h-8  " strokeWidth={1.5} />
                </div>

                <div className="sources col-start-1 col-span-2 p-2 flex items-start flex-col gap-4 h-[76vh] overflow-y-auto  relative top-5">
                    <SourceCard />
                    <SourceCard />
                    <SourceCard />
                    <SourceCard />
                </div>
            </div>
            <NotechatBox />
        </main>
    );
};

export default Note;
