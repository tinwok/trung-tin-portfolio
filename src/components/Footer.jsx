import { FooterData } from '../data/FooterData';
import Button from './subCompoments/Button';
import MainIcon from './subCompoments/MainIcon';
import tinLogo from '../assets/tinLogo.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagram from '../assets/instagram.svg';
function Footer() {
    return (
        <section className="   text-white  font-(family-name:--font-secondary)">
            <div className="max-w-[1200px] mx-auto bg-[var(--color-secondary)] lg:h-[572px] lg:rounded-t-4xl p-10 lg:p-20">
                <div
                    className="header flex justify-between relative after:content-[''] 
                after:absolute after:w-[105%] after:bg-[var(--color-description)] after:bottom-[-20px] after:left-[-10px] after:h-[1px] after:rounded-full"
                >
                    <h1 className="lg:text-4xl text-base">{FooterData.header}</h1>
                    <Button className="!bg-[var(--color-orange)] border-[var(--color-orange)] !text-[18px]">
                        Hire Me
                    </Button>
                </div>
                {/* bottom box */}
                <div
                    className="bottom-box flex justify-between mt-[50px] lg:mt-[108px] relative
               after:absolute after:w-[105%] after:bg-[var(--color-description)] after:bottom-[-20px] after:left-[-10px] after:h-[1px] after:rounded-full"
                >
                    {/* left side */}
                    <div className="left-side w-1/3 lg:w-[431px]">
                        <MainIcon
                            name="Tin"
                            textSize="[24px]"
                            logoSize="8"
                            image={tinLogo}
                            className=" mb-[12px] lg:mb-[28px]"
                        ></MainIcon>
                        <p className="text-sm lg:text-xl">{FooterData.des}</p>
                        <div className="flex gap-2 items-center ">
                            <a href="#">
                                <img src={facebookIcon} alt={facebookIcon + 'icon'} />
                            </a>
                            <a href="#">
                                <img src={instagram} alt={instagram + 'icon'} />
                            </a>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className=" flex gap-30 justify-evenly">
                        {/* Nav */}
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
                        {/* Contact */}
                        <ul className="flex flex-col gap-2 lg:gap-5">
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
