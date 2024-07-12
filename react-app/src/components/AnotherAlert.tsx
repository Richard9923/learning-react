interface Props {
  onClick: () => void;
}

const ButtonAlert = ({ onClick }: Props) => {
  return (
    <div className="alert-warning alert-dismissible fade show" role="alert">
      <button
        onClick={() => {
          console.log("t");
        }}
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        My Second Button
      </button>
    </div>
  );
};

export default ButtonAlert;
