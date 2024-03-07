import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
const UserRequest = () => {
    return (
        <div className="user-request-container  flex w-full h-fit justify-end items-start mt-4 mb-4 ">
            <p className="user-request bg-secondary min-h-fit max-w-[75%] p-3 relative right-2 top-5 rounded-3xl rounded-tr-none text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cum explicabo beatae, iure velit repellat est, nam eaque nulla optio, temporibus consequatur voluptatibus officia impedit ipsum pariatur natus illo maxime consectetur ea eius? Voluptatum explicabo perspiciatis, maxime, eos, fuga cum nobis vero molestias numquam accusamus accusantium vel impedit dicta adipisci?
            </p>
            <Avatar className="">
                <AvatarImage src="https://github.com/shadcn.pg" />
                <AvatarFallback>UR</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default UserRequest;
