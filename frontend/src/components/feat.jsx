const feat = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row justify-around items-center w-full mt-12">
        <div className="bg-yellow-200 rounded-full p-4 text-center aspect-square h-40 flex flex-col items-center justify-center md:p-8 break-words">
          <h2 className="font-bold mb-2">Sign Up</h2>
        </div>
        <span className="text-4xl hidden md:flex"> --> </span>
        <div className="bg-blue-200 rounded-full p-4 text-center aspect-square h-40 flex flex-col items-center justify-center md:p-8 break-words">
          <h2 className="font-bold mb-2">Submit The Details</h2>
        </div>
        <span className="text-4xl hidden md:flex"> --> </span>
        <div className="bg-green-200 rounded-full p-4 text-center aspect-square h-40 flex flex-col items-center justify-center md:p-8 break-words">
          <h2 className="font-bold mb-2">Find Your Matching Ones</h2>
        </div>
      </div>
    </>
  );
};

export default feat;
