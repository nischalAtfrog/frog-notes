const Info = () => {
    return (
        <div className="w-full rounded-[18px] bg-secondary p-5 col-span-full relative h-fit mt-10 mb-10">
            <h2 className="text-xl font-bold">Welcome to frognotes</h2>
            <p className="text-base mt-4">
                You now have a personal AI collaborator, grounded in information you trust, design to help you do your best thinking
            </p>
            <ul className=" list-disc mx-10 mt-4">
                <li className="text-sm">Click “New Notebook” to create your first notebook</li>
                <li className="text-sm">Add your first source: a PDF or copied text</li>
                <li className="text-sm">Ask frognotes question about your source to help explain, summarize, brainstorm, and more</li>
                <li className="text-sm">Click on your sources to auto-generate a summary and key topics</li>
            </ul>
            <p className="text-base mt-4 ">or see our example Notebooks below to see frognotes in action</p>
        </div>
    );
};

export default Info;
