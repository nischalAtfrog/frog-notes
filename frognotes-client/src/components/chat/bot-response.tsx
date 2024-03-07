import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const BotResponse = () => {
    return (
        <div className="bot-response-container flex w-full h-fit justify-start items-start">
            <Avatar className="">
                <AvatarImage src="https://github.com/shadcn.pg" />
                <AvatarFallback>NB</AvatarFallback>
            </Avatar>
            <p className="bot-response bg-foreground min-h-fit max-w-[75%] p-3 relative left-2 top-5 rounded-3xl rounded-tl-none text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem dolor ipsa quos quam perspiciatis. Velit illo quasi blanditiis
                adipisci. axime vitae amet iste dolorum in, tempore,
            </p>
        </div>
    );
};

export default BotResponse;
