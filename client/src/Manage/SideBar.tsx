import { DarkThemeToggle, Sidebar } from "flowbite-react";
import {
    HiLockOpen,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiOutlineGift
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { customTheme } from "./sideBarTheme";
import { useNavigate } from "react-router-dom";


type Props = {}

function SideBar({ }: Props) {

    const navigate = useNavigate();

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example" theme={customTheme} >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {/* <NavLink to={"/manage"}> */}
                    <Sidebar.Item className="cursor-pointer" onClick={(() => navigate('/manage'))} icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    {/* </NavLink> */}

                    <Sidebar.Collapse
                        icon={HiShoppingBag}
                        label="E-commerce"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                        <Sidebar.Item className="cursor-pointer" onClick={(() => navigate('/manage/products'))}>Products</Sidebar.Item>
                        <Sidebar.Item className="cursor-pointer">Sales</Sidebar.Item>
                        <Sidebar.Item className="cursor-pointer">Refunds</Sidebar.Item>
                        <Sidebar.Item className="cursor-pointer">Shipping</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item onClick={() => navigate('/manage/reviews')} className="cursor-pointer" icon={HiInbox}>
                        Reviews
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer" icon={HiOutlineGift}>
                        Orders
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer" icon={HiLockOpen}>
                        Sign Out
                    </Sidebar.Item>
                    <Sidebar.Item>
                        <DarkThemeToggle className="w-full" />
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar