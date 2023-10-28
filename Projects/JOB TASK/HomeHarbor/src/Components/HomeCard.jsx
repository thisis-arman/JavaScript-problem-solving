import { useEffect, useState } from "react";
import { BiBath } from 'react-icons/bi'


const HomeCard = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
        fetch('/public/home.json')
            .then(res => res.json())
            .then(data => setHome(data))
    }, [])
    console.log(home)
    return (
        <div className="container mx-auto px-4">
            <div className="flex py-4 gap-4">
                <div className="rounded-full bg-gray-300">
                    <p className="px-10 py-2 ">Kolkata
                    </p></div>
                <div className="rounded-full bg-gray-300">
                    <p className="px-10 py-2 ">
                    </p></div>
                <div className="rounded-full bg-gray-300">
                    <p className="px-10 py-2 ">
                    </p></div>
                <div className="rounded-full bg-gray-300">
                    <p className="px-10 py-2 ">
                    </p></div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    home.map((home, i) => <a key={i} href="#" className="block rounded-lg p-2 px-4 shadow-sm shadow-indigo-100">
                        <span
                            className="whitespace-nowrap absolute m-2 rounded-full bg-white shadow-md px-2.5 py-0.5 text-sm text-black"
                        >
                            {home?.availability}
                        </span>
                        <img
                            alt="Home"
                            src={home?.image}
                            className="h-56 w-full rounded-md object-cover"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">${`${home?.availability === "For Sale" ? home?.price : home?.monthly_rent_price}`}</dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="text-lg font-medium">{home?.address}</dd>
                                </div>
                            </dl>

                            <div className="mt-6 flex items-center justify-evenly gap-6 w-full text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500"> <svg
                                            className="h-4 w-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-2 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg></p>

                                        <p className="text-lg font-medium">{home?.rooms} Rooms</p>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">
                                            {/* <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                />
                                            </svg> */}
                                            <BiBath className="h-4 w-4 text-indigo-700" />
                                        </p>

                                        <p className="text-lg font-medium">{home?.bathrooms} Bath</p>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500"> <svg
                                            className="h-4 w-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg></p>

                                        <p className="text-lg font-medium">{home?.bedrooms} Beds</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">
                                            <svg
                                                className="h-4 w-4 text-indigo-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                />
                                            </svg></p>

                                        <p className="text-lg font-medium">{home?.area} sft</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4 px-4">
                                <div>
                                    <p className="font-semibold">${`${home?.availability === "For Sale" ? home?.price : home?.monthly_rent_price}`} / Monthly</p>

                                </div>
                                <div>
                                    <button className="px-6 py-2 border rounded-3xl border-blue-600 hover:bg-blue-700 hover:text-white">See More</button>
                                </div>
                            </div>
                        </div>
                    </a>)
                }
            </div>

        </div>
    );
};

export default HomeCard;