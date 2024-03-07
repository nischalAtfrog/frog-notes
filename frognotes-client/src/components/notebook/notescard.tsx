import { Card } from '@/components/ui/card';

type Props = {
    noteBookTitle: string;
};

const NotesCard = ({ noteBookTitle }: Props) => {
    return (
        <Card className="h-[200px] relative col-span-2 cursor-pointer bg-card border rounded-3xl flex justify-center items-center">
            <p className="text-xl font-sans font-light absolute bottom-5">{noteBookTitle}</p>
        </Card>
    );
};

export default NotesCard;
