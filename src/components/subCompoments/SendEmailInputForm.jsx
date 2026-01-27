import Button from './Button';
function SendEmailInputForm({ icon, placeholder, className = '' }) {
    return (
        <form
            className={` flex items-center gap-4 ${className}  border border-[var(--color-description)] px-1 py-1 rounded-full w-full lg:max-w-[668px] mx-auto`}
        >
            <div className="w-[48px] h-[48px] bg-[#FEA28D] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={icon} alt="icon" className="h-6 w-auto" />
            </div>
            <input type="text" placeholder={placeholder} className="w-[485px] h-full outline-none flex-1 min-w-0" />
            <Button className="w-[140px] h-[48px] !text-[16px] !bg-[#494949] text-white hover:bg-[var(--color-orange)]">
                Đặt lịch
            </Button>
        </form>
    );
}

export default SendEmailInputForm;
