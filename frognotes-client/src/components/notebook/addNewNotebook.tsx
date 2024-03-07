import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const AddNewNoteBookCard = () => {
    return (
        <a href="/createnote" className='col-span-2 '>
            <Card className="h-[200px] w-full border rounded-3xl relative flex flex-col justify-center items-center flex-shrink-0 cursor-pointer">
                <div className="icon-container h-24 w-24 rounded-full flex justify-center items-center ">
                    <Plus className="w-10 h-10 " />
                </div>

                <p className="text-xl font-sans font-light absolute bottom-5  ">Add new notebook</p>
            </Card>
        </a>
    );
};

export default AddNewNoteBookCard;
