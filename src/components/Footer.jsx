import { FooterData } from '../data/FooterData';
import Button from './subCompoments/Button';
import MainIcon from './subCompoments/mainIcon';
import tinLogo from '../assets/tinLogo.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagram from '../assets/instagram.svg';
function Footer() {
    return (
        <section className=" px-6   text-white  font-(family-name:--font-secondary)">
            <div className="max-w-[1200px] mx-auto bg-[var(--color-secondary)] h-[572px] rounded-t-4xl p-10 lg:p-20">
                <div
                    className="header flex justify-between relative after:content-[''] 
                after:absolute after:w-[105%] after:bg-[var(--color-description)] after:bottom-[-20px] after:left-[-10px] after:h-[1px] after:rounded-full"
                >
                    <h1 className="lg:text-4xl text-xl">{FooterData.header}</h1>
                    <Button className="!bg-[var(--color-orange)] border-[var(--color-orange)]">Hire Me</Button>
                </div>
                <div
                    className="bottom-box flex justify-between mt-[108px] relative
               after:absolute after:w-[105%] after:bg-[var(--color-description)] after:bottom-[-20px] after:left-[-10px] after:h-[1px] after:rounded-full"
                >
                    <div className="left-side w-[431px]">
                        <MainIcon name="Tin" image={tinLogo} className="mb-[28px]"></MainIcon>
                        <p className="text-l lg:text-xl">{FooterData.des}</p>
                        <div className="flex gap-10 items-center">
                            <a href="#">
                                <img src={facebookIcon} alt={facebookIcon + 'icon'} />
                            </a>
                            <a href="#">
                                <img src={instagram} alt={instagram + 'icon'} />
                            </a>
                        </div>
                    </div>
                    <div className=" flex gap-30 justify-evenly">
                        <ul className="lg:flex flex-col gap-5 hidden">
                            {FooterData.navigation.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className="first:text-[var(--color-orange)] first:font-bold first:text-xl"
                                    >
                                        <a href="#">{item.content} </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className="flex flex-col gap-5">
                            {FooterData.contact.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className="first:text-[var(--color-orange)]  first:font-bold first:text-xl"
                                    >
                                        <a href="#">{item.content} </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <p className="mt-[25px] text-[var(--color-description)]">{FooterData.copyright}</p>
            </div>
        </section>
    );
}

export default Footer;
