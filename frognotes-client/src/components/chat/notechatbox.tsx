import { ArrowRight, PlusCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import BotResponse from './bot-response';
import UserRequest from './user-request';

const NotechatBox = () => {
    return (
        <div className="chatbox rounded-3xl border  col-start-4 relative col-span-9  h-[85vh] flex flex-col items-center  p-4 ">
            <div className="message-header w-full p-2 mb-2 flex justify-between items-center">
                <h2 className="text-2xl font-extralight"> Note </h2>
                <Button className="rounded-xl">
                    <PlusCircle className="w-5 h-5 " />
                    <span className="m-2">Add new note</span>
                </Button>
            </div>
            <div className="messages-container h-[82%]  w-full rounded-2xl p-4 overflow-y-auto flex-col flex  ">
                <BotResponse />
                <UserRequest />
                <BotResponse />
                <UserRequest />
                <BotResponse />
                <UserRequest />
                <BotResponse />
                <UserRequest />
                <BotResponse />
                <UserRequest />
                <BotResponse />
                <UserRequest />
            </div>
            <div className="input-text border h-14 w-[60%] mx-auto absolute bottom-4 overflow-hidden rounded-full bg-background flex justify-between items-center p-2 gap-2 ">
                <div className="numberofsources h-24 w-36 -ml-2 flex-shrink-0 bg-primary grid place-items-center ">
                    <span className="text-xs text-secondary"> 0 Sources selected</span>
                </div>
                <Input
                    className="w-full h-full outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none"
                    style={{ boxShadow: 'none' }}
                    placeholder="Start typing... "
                />
                <Button className="rounded-full h-10 w-10 ">
                    <ArrowRight className=" scale-[2]" />
                </Button>
            </div>
        </div>
    );
};

export default NotechatBox;
