import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const SourceCard = () => {
    return (
        <Card className="h-[240px] border w-full rounded-3xl flex items-center  bg-card flex-col flex-shrink-0 p-4 justify-between gap-3 ">
            <div className="source-image-holder h-[160px] w-[100%] border  rounded-t-[16px]">
                <img src="" alt="" />
            </div>

            <div className="text-xl h-fit font-sans font-light footer flex w-full items-center justify-between p-1 mt-2 ">
                <p className=" text-base">Source title</p>

                <Checkbox id="terms" className="h-6 w-6" />
            </div>
        </Card>
    );
};

export default SourceCard;
