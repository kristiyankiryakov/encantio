import Facebook from "../../assets/Facebook.png";
import LinkedIn from "../../assets/LinkedIn.png";
import MailIcon from "../../assets/Mail.png";
import PhoneIcon from "../../assets/Phone.png";
import Twitter from "../../assets/Twitter.png";
import PerkElement from './PerkElement';

const perks = ["Бърза доставка с Еконт", "Дълъг живот на продуктите", "Отстъпки за комплекти"];

const Index = () => {
    return (
        <div className='bg-[#090A18]' >

            <div className='Card bg-electricGreen w-10/12 rounded-xl mx-auto flex flex-col justify-between items-center py-20 gap-20' >
                <p className='text-[#090A18] text-center text-6xl font-bold w-10/12 text-pretty tracking' >Постигнете повече комфорт<br /> и точност с нови крачета за<br /> мишката си</p>

                <button className='text-white px-10 py-4 text-xl bg-[#090A18] w-fit rounded-md' >Разгледайте моделите</button>

                <div className='flex lg:flex-row xs:flex-col gap-2 justify-around items-center lg:w-10/12 '>
                    {
                        perks.map((text) => {
                            return <PerkElement circleColor='black' textColor='#090A18' text={text} />
                        })
                    }
                </div>
            </div>

            <div className='Links border-b-[1px] border-[#51535D] w-10/12 mx-auto flex flex-col md:flex-row justify-between pt-20 pb-10 text-white' >

                <div className='social-container flex gap-6 justify-between w-fit' >
                    <div>
                        <img src={Twitter} alt="twitter-icon" />
                    </div>
                    <div>
                        <img src={Facebook} alt="facebook-icon" />
                    </div>
                    <div>
                        <img src={LinkedIn} alt="linkedin-icon" />
                    </div>
                </div>

                <div className='contact-container gap-8 flex justify-between w-fit' >
                    <div className='phone flex gap-2' >
                        <div>
                            <img src={PhoneIcon} alt="phone-icon" />
                        </div>

                        <p>088888888</p>
                    </div>

                    <div className='mail flex gap-2' >
                        <div>
                            <img src={MailIcon} alt="mail-icon" />
                        </div>

                        <p>mail@mail.com</p>
                    </div>

                    <div>

                    </div>
                </div>

                <div className=' flex gap-2 justify-between w-fit'>
                    <p>Продукти</p>
                    <p>Предимства</p>
                    <p>За нас</p>
                    <p>Контакти</p>

                </div>

            </div>

            <div className='flex py-10 justify-between w-10/12 mx-auto text-[#C0C0C0]' >

                <p>© 2024 Encantio. Всички права запазени.</p>

                <div className='flex gap-5 justify-between' >
                    <p>Общи условия</p>
                    <p>Политика за поверителност</p>
                </div>
            </div>

        </div>
    )
}

export default Index