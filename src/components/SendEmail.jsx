import { SendEmailData } from '../data/SendEmailData';
import SendEmailInputForm from './subCompoments/SendEmailInputForm';
import EmailIcon from '../assets/emailIcon.svg';
function SendEmail() {
    return (
        <section className="max-w-[1200px] mx-auto px-6  h-[320px] flex flex-col justify-evenly text-center">
            <h1 className="   mx-auto font-[var(--font-secondary)] text-4xl w-[504px]">
                {SendEmailData.header.map((item, index) => {
                    return typeof item === 'string' ? (
                        item
                    ) : (
                        <span key={index} className="text-red-500">
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
