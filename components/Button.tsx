function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Button = ({ bgColor, textColor, darkBgColor, darkTextColor, borderColor, darkBorderColor, children }) => {
  return <button className={classNames(`bg-${bgColor} text-${textColor} dark:bg-${darkBgColor} dark:text-${darkTextColor} rounded-md border border-${borderColor} dark:border-${darkBorderColor} text-md flex cursor-default items-center justify-center space-x-2 px-4 py-2 transition ease-in-out hover:border-teal-500 md:text-base`)}>{children}</button>;
};

export default Button;
