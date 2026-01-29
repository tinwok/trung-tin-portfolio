import Button from './Button';
function SendEmailInputForm({ icon, placeholder, className = '' }) {
    return (
        <form
            className={` flex items-center gap-4 ${className}  border border-[var(--color-description)] px-1 py-1 w-[70%] rounded-full  lg:max-w-[668px] mx-auto`}
        >
            <div className="lg:w-[48px]  lg:h-[48px] w-8 h-8 bg-[#FEA28D] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={icon} alt="icon" className="lg:h-6 h-4 w-auto" />
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full h-full outline-none flex-1 text-xs lg:text-xl min-w-0"
            />
            <Button className="lg:w-[140px] lg:h-[48px] h-8 !text-[16px] !bg-[#494949] text-white hover:!bg-[var(--color-orange)]">
                Đặt lịch
            </Button>
        </form>
    );
}

export default SendEmailInputForm;
