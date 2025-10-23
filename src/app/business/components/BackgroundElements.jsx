const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundElements;
