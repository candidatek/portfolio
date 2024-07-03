import React, { FC, ReactElement } from 'react'
import data from './experience.json'

const GradientText: FC<{ skill: { name: String, description: string }, fontSize: number, index: number }> = ({ skill, fontSize, index }) => {
    const [expanded, setExpanded] = React.useState(false)

    return (<div
        onMouseLeave={() => setExpanded(false)}
        onMouseEnter={() => setExpanded(true)}
        className={`${expanded ? '!text-[46px] sm:!text-[30px]' : ''} mx-4 sm:!text-[24px] font-logo duration-500 h-18 mt-4 text-center bg-primary-gradient bg-clip-text text-transparent`} style={{ fontSize }}>
        {skill.name}
         {expanded && <div
            onMouseEnter={() => setExpanded(false)}
            className={`${expanded ? 'visibility-100 opacity-100 ' : 'visibility-hidden opacity-0'}
                  w-auto p-2 max-w-[500px] sm:absolute  rounded-lg absolute text-[20px]  duration-1000 bg-primary-gradient text-white font-logo`}>
            {skill.description}
        </div>}
    </div>
    );
};

const DisplayComp = () => {
    return (
        <div className="mx-[12.5%] sm:mx-[5%] pt-[1%]  ">
            <Header />
            <ProfileImage />
            <SeeMyWork />
            <WorkExperience />
            <Skills />
            <Academics />






        </div>
    )
}

const Skills = () => {
    const { skills } = data;
    return (
        <div className=' w-full flex flex-col pb-[10vh] '>
            <div className='z-50 text-[50px] sm:text-[30px] font-logo flex font-semibold   mb-4'>
                Skills
            </div>
            <div className='grid grid-cols-4  sm:grid-cols-3 cursor-pointer  justify-center sm:max-h-[250px] max-h-[450px] items-center'>
                {skills.map((skill, index) => (
                    <GradientText key={index} index={index+1} skill={skill} fontSize={40} />
                ))}
                {/* <GradientText text= fontSize={50} />
                <GradientText text="Rust" fontSize={50} />
                <GradientText text="JavaScript" fontSize={50} />
                <GradientText text="Node Js" fontSize={50} />
                <GradientText text="MERN Stack" fontSize={50} /> */}
            </div>


        </div>
    )


}

const Academics = () => {
    return (
        <div className=' w-full flex flex-col mt-[10vh] pb-[10vh] '>
            <div className='z-50 text-[50px] sm:text-[30px] font-logo flex font-semibold  w-[20vw] h-[8vh] mb-10'>
                Academics
            </div>
            <AcademicsCard />
        </div>
    )

}

const AcademicsCard = () => {
    return (
        <div className='bg-primary-gradient sm:w-full w-[500px] h-[200px] mb-20'>
            <div className='flex justify-between items-center p-5'>
                <div className=' font-primary text-[28px] sm:text-[20px] font-bold text-white'>
                    RV College of Engineering
                </div>
                <div>
                    <img src="/rv_logo.svg" alt="RV College of Engineering" className="h-[65px] w-[65px]" />
                </div>

            </div>
            <div className='flex justify-between items-center px-5'>
                <div className='text-2xl font-primary text-[20px] sm:text-[14px] font-semibold text-white'>
                    Bachelor of Engineering
                </div>
                <div className='text-[20px] sm:text-[14px] font-primary  text-white'>
                    July 2017 - July 2020
                </div>
            </div>
            <div className='text-[20px] sm:text-[14px] font-primary  text-white px-5'>
                Information Science & Engineering
            </div>
        </div>
    )
}
export const GradientCircle = () => {
    return (
        <div className="bg-primary-gradient mt-[-5%] blur-[70px] ml-[15%]  
        opacity-40 absolute rounded-full h-[75%] w-[70%] !sm:w-[70vw] z-[1]" />

    )
}

const WorkExperience = () => {
    return (
        <div className=' w-full flex flex-col  mt-[45vh] '>
            <div className=' font-logo flex z-40 font-semibold text-black w-[20vw] h-[8vh] mb-10'>
                <div className='z-50 text-[50px] sm:text-[30px] w-[500px] whitespace-nowrap	'>
                    Work Experience
                </div>
            </div>

            <WorkExperienceCard />

        </div>
    )

}

const SeeMyWork = () => {
    const handleClick = () => {
        window.scrollBy({
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='mt-10 w-full flex justify-center cursor-pointer'
            onClick={handleClick}
        >
            <div className='items-center font-logo flex justify-center z-40 font-semibold text-white sm:h-[6vh]  
            sm:w-[25vw] w-[20vw] h-[8vh] bg-primary-gradient rounded-sm'>
                <div className='z-50 text-[24px] sm:text-[20px]'>
                    See My Work
                </div>
            </div>
        </div>
    )
}
const ProfileImage = () => {
    return (
        <div>
            <div className=' flex relative justify-center '>
                <div className=" flex justify-center relative items-center sm:max-w-[120px] max-w-[235px] h-[18%] w-[18%] sm:w-[30vw] z-50 bg-white   rounded-full">
                    <img src="/profilePic.svg"
                        alt="Shrihari Kulkarni" className="rounded-full border-white  max-w-[230px] sm:max-w-[115px] p-1.5" />
                </div>

            </div>
            <div className=' flex justify-center flex-col items-center '>
                <div className=' justify-center z-40 mt-[15px] text-black  text-[24px] font-logo font-semibold'>
                    Hey! I’m Shrihari,
                </div>
                <div className='  z-40
            text-black font-logo text-[50px] sm:text-[30px]  font-[800]'>
                    Web3 Solana Developer
                </div>
            </div>

        </div>


    )

}
const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <NameTitle />

        </div>
    )
}

const WorkExperienceCard = () => {
    const { workExperience } = data;
    return (
        <div className='flex overflow-x-auto mb-10 sm:flex-col no-scrollbar sm:h-auto h-[550px]'>
            {workExperience.map((exp, index) => (
                <WorkExperienceCardExpanded key={index} index={index} exp={exp} />
            ))}
        </div>

    )

}
const WorkExperienceCardExpanded: FC<{ index: number, exp: any }> = ({ index, exp }) => {
    const [expand, setExpand] = React.useState(false);
    return (
        <div className='w-[35vw] sm:w-[100%] sm:mb-4 flex-shrink-0 mr-12 sm:mr-2' key={index}
            onMouseLeave={() => setExpand(false)}
            onMouseEnter={() => setExpand(true)}>
            <div className='bg-primary-gradient h-[15vh]  w-full justify-start flex flex-col '>
                <div className='font-primary text-white text-[28px] sm:text-[20px] ml-5 mt-5 font-bold'>
                    {exp.company}
                </div>
                <div className='flex justify-between mt-2'>
                    <div className='font-primary text-white text-[16px] sm:text-[14px] ml-5'>
                        {exp.position}
                    </div>
                    <div className='font-primary text-white text-[14px] mr-5'>
                        {exp.startDate} -
                        {exp.endDate}
                    </div>
                </div>

            </div>
            <div
                style={{ height: expand ? '35vh' : '18vh' }}
                className={`bg-white duration-500 no-scrollbar  w-full   overflow-x-auto`}>
                <div className='m-5 !w-[calc(100% - 40px)] '>
                    {exp.projects.map((project: string, index: number) => (
                        <li key={index} className='text-black '>
                            {project}
                        </li>
                    ))}
                </div>
            </div>
        </div>)
}
const NameTitle = (): ReactElement =>
    <div className='bg-primary font-logo'>
        Shrihari <br /> Kulkarni
    </div>

export default DisplayComp