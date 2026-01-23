import { AboutData } from '../data/AboutData/aboutData';

function About() {
    return (
        <>
            <div className="container mx-auto ">
                <div className="top-container flex-col items-center justify-center block h-100%">
                    <h1 className="flex items-center px-[4px] py-[18px] border-solid border-[#9D9696] text-[24px] w-[20px] h-auto">
                        {AboutData.miniHeader}
                    </h1>
                    <img src={AboutData.arrowIcon} alt="arrowIcon" />
                    <h1>Mình là Tín, Web developer</h1>
                </div>
                <div className="about-container">
                    <div className="box">
                        <img src={AboutData.quotationIcon} alt="quotationMarkss" />
                        <p>{AboutData.des}</p>
                        <div>
                            <span>{AboutData.stateNumber}</span>
                            {AboutData.stateDes}
                        </div>
                    </div>
                    <div className="box">
                        <img src={AboutData.avatar} alt="Avatar " />
                    </div>
                    <div className="box">
                        <div className="star-icon-box flex ">
                            <img src={AboutData.staricon} alt="Star icon" />
                            <img src={AboutData.staricon} alt="Star icon" />
                            <img src={AboutData.staricon} alt="Star icon" />
                            <img src={AboutData.staricon} alt="Star icon" />
                            <img src={AboutData.staricon} alt="Star icon" />
                        </div>
                        <div className="box experience">
                            <span>{AboutData.experience}</span>
                            {AboutData.experienceDes}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
