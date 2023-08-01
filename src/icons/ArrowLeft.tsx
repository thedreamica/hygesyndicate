interface ArrowProps {
    className: string;
  }
  
  const ArrowLeft: React.FC<ArrowProps> = ({ className, ...props }) => {
  return (
    <svg
      width="25"
      height="41"
      viewBox="0 0 25 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.7062 35.3088L9.43569 20.005L24.7062 4.70117L20.005 0L0 20.005L20.005 40.01L24.7062 35.3088Z"
        fill="#868686"
      />
    </svg>
  );
};

export default ArrowLeft;