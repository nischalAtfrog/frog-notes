// these are the notes that are created by you or the user
// src/components/mynoteslist.tsx

import AddNewNoteBookCard from './addNewNotebook';
import NotesCard from './notescard';

const MyNoteBooksList = () => {
    return (
        <div className=" relative overflow-x-auto gap-4 grid grid-cols-12 col-span-12 ">
            <h2 className="text-2xl col-span-12">My notebooks</h2>
            <AddNewNoteBookCard />
            <NotesCard noteBookTitle={'sample'} />
            <NotesCard noteBookTitle={'sample'} />
            <NotesCard noteBookTitle={'sample'} />
        </div>
    );
};

export default MyNoteBooksList;
