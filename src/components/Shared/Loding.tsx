const Loding = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white font-semibold text-xl animate-pulse">
        Loading...
        </p>
      </div>
    </div>
  );
};

export default Loding;
