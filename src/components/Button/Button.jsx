export default function Button({
  title,
  hoverText,
  id,
  containerClass,
  leftIcon,
  rightIcon,
}) {
  return (
    <div className="relative group">
      <button
        id={id}
        className={`relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-all duration-500 ease-in-out transform group-hover:rotate-6 group-hover:skew-x-12 group-hover:bg-violet-600 group-hover:text-white ${containerClass}`}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase z-20">
          <div>{title}</div>
        </span>
        {rightIcon}
      </button>

      {/* النص اللي بيطلع عند الهوفر */}
  
    </div>
  );
}