function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = ({
  bgColor,
  textColor,
  darkBgColor,
  darkTextColor,
  borderColor,
  darkBorderColor,
  children,
}) => {
  return (
    <button
      className={classNames(
        `bg-${bgColor} text-${textColor} dark:bg-${darkBgColor} dark:text-${darkTextColor} rounded-md border border-${borderColor} dark:border-${darkBorderColor} align-center flex justify-start space-x-2 py-2 px-4 font-bold text-sm md:text-base transition ease-in-out hover:border-teal-500`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
