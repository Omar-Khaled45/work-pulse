const InputErrorMessage = ({ icon, message }) => {
  return (
    <p className="text-destructive flex items-center gap-2">
      {icon} {message}
    </p>
  );
};

export default InputErrorMessage;
