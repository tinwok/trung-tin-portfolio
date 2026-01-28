import { SendEmailData } from '../data/SendEmailData';
import SendEmailInputForm from './subCompoments/SendEmailInputForm';
import EmailIcon from '../assets/emailIcon.svg';
function SendEmail() {
    return (
        <section className="max-w-[1200px] mx-auto px-5 py-10 gap-4  lg:h-[320px] flex lg:flex-col   lg:justify-evenly text-center">
            <h1 className="   mx-auto font-[var(--font-secondary)] lg:text-4xl w-[504px]">
                {SendEmailData.header.map((item, index) => {
                    return typeof item === 'string' ? (
                        item
                    ) : (
                        <span key={index} className="text-[var(--color-orange)]">
                            {item.highlight}
                        </span>
                    );
                })}
            </h1>
            <SendEmailInputForm icon={EmailIcon} placeholder={SendEmailData.sendEmailPlaceHolder} />
        </section>
    );
}

export default SendEmail;
