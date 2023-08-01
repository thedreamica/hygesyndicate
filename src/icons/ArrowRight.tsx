interface ArrowProps {
  className: string;
}

const ArrowRight: React.FC<ArrowProps> = ({ className, ...props }) => {
  return (
    <svg
      width="25"
      height="41"
      viewBox="0 0 25 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-0.000116348 35.3088L15.2704 20.005L-0.000116348 4.70117L4.70106 0L24.7061 20.005L4.70106 40.01L-0.000116348 35.3088Z"
        fill="#868686"
      />
    </svg>
  );
};

export default ArrowRight;
