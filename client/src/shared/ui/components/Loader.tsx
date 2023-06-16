interface LoaderProps{
  height?: number,
  width?: number
}

const Loader = ({height = 32, width = 32}: LoaderProps) => (
    <div className="flex justify-center items-center py-3">
      <div className={`animate-spin rounded-full h-${height} w-${width}  border-b-2 border-red-700`} />
    </div>
  );
  
  export default Loader;