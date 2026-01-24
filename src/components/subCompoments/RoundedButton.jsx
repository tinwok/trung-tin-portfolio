import arrowIcon3 from '../../assets/Arrow-icon-3.svg';
function RoundedButton({ className, ...props }) {
    const baseClassName =
        ' rounded-full w-[48px] h-[48px] bg-[var(--color-card)] flex justify-center items-center cursor-pointer hover:bg-[var(--color-orange)';
    return (
        <button className={`${baseClassName} ${className}`}>
            <img src={arrowIcon3} alt="arrow Icon" />
        </button>
    );
}

export default RoundedButton;
