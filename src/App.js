import "./App.css";
import { useState } from "react";
import {
	logo,
	mobileHero,
	desktopHero,
	databiz,
	audiophile,
	meet,
	maker,
	todo,
	calendar,
	down,
	reminder,
	planning,
} from "./images";
import MobileMenu from "./components/MobileMenu";

function App() {
	// Transforming Arrow from Down to Up on click
	const [isArrowToggled, setIsArrowToggled] = useState(false);

	function toggleDropDown() {
		setIsArrowToggled(!isArrowToggled);
	}
	// Features Dropdown Toggle
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
		toggleDropDown();
	}
	// Company Dropdown Toggle
	const [isMenuOpen2, setIsMenuOpen2] = useState(false);

	function toggleMenu2() {
		setIsMenuOpen2(!isMenuOpen2);
		toggleDropDown2();
	}
	const [isOpen2, setIsOpen2] = useState(false);

	function toggleDropDown2() {
		setIsOpen2(!isOpen2);
	}
	return (
		<div className="App bg-white">
			{/* Header */}
			<header className="pt-6 ml-12 flex items-center justify-between relative">
				{/* Logo */}
				<img src={logo} alt="logo" />
				{/* Mobile Menu */}
				<MobileMenu />
				{/* Desktop Menu */}
				<ul className="hidden gap-12 text-gray font-medium lg:flex">
					<li className="">
						{/* Features Dropdown Button */}
						<button
							className="flex items-center gap-1 hover:cursor-pointer hover:text-black"
							onClick={toggleMenu}
						>
							<p>Features</p>
							<img
								src={down}
								alt="down arrow"
								className={`${isArrowToggled ? "transform rotate-180" : ""} `}
							/>
						</button>
						{/* Features Dropdown Menu */}
						<div
							className={`${
								isMenuOpen ? "block" : "hidden"
							}  absolute left-[25rem] top-0 mt-16 rounded-md shadow-lg bg-white w-[10%] py-4`}
						>
							<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
								<p>ToDo List</p>
								<img src={todo} alt="todo" />
							</div>

							<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
								<p>Calendar</p>
								<img src={calendar} alt="todo" />
							</div>

							<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
								<p>Reminders</p>
								<img src={reminder} alt="todo" />
							</div>
							<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer">
								<p>Planning</p>
								<img src={planning} alt="todo" />
							</div>
						</div>
					</li>
					<li className="">
						{/* Company Dropdown Button */}
						<button
							className="flex items-center gap-1 hover:cursor-pointer hover:text-black"
							onClick={toggleMenu2}
						>
							<p>Company</p>
							<img
								src={down}
								alt="down arrow"
								className={`${isOpen2 ? "transform rotate-180" : ""} `}
							/>
						</button>
						{/* Company Dropdown Menu */}
						<div
							className={`${
								isMenuOpen2 ? "block" : "hidden"
							}   absolute left-[550px] top-0 mt-16 rounded-md shadow-lg bg-white w-[10%] py-4`}
						>
							<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
								<p>History</p>
							</div>

							<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
								<p>Our Team</p>
							</div>

							<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer">
								<p>Blog</p>
							</div>
						</div>
					</li>
					<li className="hover:cursor-pointer hover:text-black">Careers</li>
					<li className="hover:cursor-pointer hover:text-black">About</li>
				</ul>
				{/* CTA Container */}
				<div className="hidden sm:flex sm:flex-col lg:flex-row lg:items-center lg:mr-12 lg:gap-10">
					<button className="text-gray">Login</button>
					<button className=" text-gray border-2 border-gray p-2 lg:w-[100%] rounded-2xl hover:text-black hover:border-black">
						Register
					</button>
				</div>
			</header>
			{/* Main */}
			<main className=" flex flex-col items-center mt-12 justify-center mx-auto lg:flex-row-reverse lg:mt-0 lg:w-[100%] lg:min-h-[100vh]">
				<div>
					{/* Mobile Hero */}
					<img src={mobileHero} alt="Mobile Hero" className="lg:hidden" />
					{/* Desktop Hero */}
					<img
						src={desktopHero}
						alt="Desktop Hero"
						className="hidden lg:block lg:w-[80%]"
					/>
				</div>

				<div className="flex flex-col lg:text-left  lg:w-[70%] lg:ml-24 ">
					{/* Title */}
					<h1 className="text-5xl font-bold mt-12 lg:text-8xl ">
						Make <br className="hidden lg:block" /> remote work
					</h1>
					{/* Description */}
					<p className="font-medium text-gray mt-6 leading-7 tracking-wide lg:mt-12">
						{" "}
						Get your team in sync, no matter your location.{" "}
						<br className="hidden lg:block" /> Streamline processes, create team
						rituals, and <br className="hidden lg:block" /> watch productivity
						soar.
					</p>
					{/* Learn More Button */}
					<button className="text-white bg-black rounded-2xl p-3 w-[30%] flex items-center justify-center mx-auto mt-8 shadow-lg lg:mx-0 lg:hover:border-[1px] lg:hover:border-black lg:hover:bg-transparent lg:hover:cursor-pointer lg:hover:text-black">
						Learn more
					</button>
					{/* Company Logos */}
					<div className="flex w-[100%] gap-8 mx-auto items-center justify-center mt-16 pb-12 lg:justify-start lg:pt-32">
						<img src={databiz} alt="databiz" />
						<img src={audiophile} alt="audiophile" />
						<img src={meet} alt="meet" />
						<img src={maker} alt="maker" />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
