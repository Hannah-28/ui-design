import Image from 'next/image';
import { Inter } from 'next/font/google';
import Card from '@/components/Card';
import Link from 'next/link';
import Menu from '@/components/Menu';
import Palete from '@/components/Palete';
import Explore from '@/components/Explore';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  var options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  var date = new Date().toLocaleDateString('en-us', options);
  var dateShort = new Date().toLocaleDateString();

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="bg-white col-span-1 border rounded-x1">
        <div className="mx-auto w-full justify-center grid pt-6">
          <div className="grid space-y-4">
            <div className="flex font-bold text-xs lg:text-lg justify-center">
              <h1 className="text-indigo-900">Mima</h1>
              <h1 className="text-slate-500"> Booking</h1>
            </div>
            <div
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: '6vw',
                height: '12vh',
              }}
              className="justify-self-center px-1 py-1 items-center border-2 border-indigo-900"
            >
              <div
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: '100%',
                  height: '100%',
                }}
                className="py-auto"
              >
                <Image
                  src="/profile.jpg"
                  objectFit="cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }}
                  alt="Profile Image"
                />
              </div>
            </div>
            <p className="text-slate-500 text-center">ilia jan</p>
          </div>

          <div
            className="w-full justify-self-center mt-20 space-y-4"
            style={{ fontSize: '0.8em' }}
          >
            <Menu
              src="/home.png"
              alt="Home Logo"
              title="Dashboard"
              display="visible"
            />
            <Menu
              src="/menu.png"
              alt="Explore Logo"
              title="Explore City"
              display="invisible"
            />
            <Menu
              src="/envelope.png"
              alt="Ticket Logo"
              title="Ticket"
              display="invisible"
            />
            <Menu
              src="/heart.png"
              alt="Favorites Logo"
              title="Favorites"
              display="invisible"
            />
            <Menu
              src="/setting.png"
              alt="Setting Logo"
              title="Setting"
              display="invisible"
            />
          </div>
        </div>
      </div>
      <div className="px-4 col-span-4 text-xs">
        <div className="bg-white px-5 py-3 justify-between border-0 rounded-xl top-0 flex w-full items-center text-gray-500">
          <div className="border-gray-300 border py-2 px-3 rounded-lg w-1/3 md:w-auto flex items-center ">
            <Image
              src="/magnifying-glass.png"
              alt="Search Logo"
              width={20}
              height={15}
              className="image"
            />
            <p className="ml-2 text-gray-400 hidden md:flex mr-8">
              Search any things ...
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            <h1 className="font-bold hidden md:flex mr-3">{date}</h1>
            <h1 className="font-bold flex md:hidden pr-3">{dateShort}</h1>
            <span
              className=" bg-red-400 px-1 h-4 w-4 text-white py-1 font-bold flex items-center justify-center"
              style={{
                fontSize: '0.8em',
                borderRadius: '50%',
                marginTop: '-2em',
              }}
            >
              3
            </span>
            <div className="border-gray-300 border py-1 px-1 rounded-lg">
              <Image
                src="/bell.png"
                alt="Notification Logo"
                width={20}
                height={20}
                className="image"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-4">
          <div className="bg-image-wrapper w-full h-full mx-auto text-white grid justify-center items-center"></div>
          <div className="bg-white bg-image-wrapper-inner justify-evenly w-11/12 mx-auto px-4 py-3 border-0 rounded-xl top-0 flex items-center text-gray-500">
            <div className="px-3 w-full flex items-center justify-center lg:justify-between">
              <Image
                src="/pin.png"
                alt="Location Logo"
                width={18}
                height={10}
                className="image"
              />
              <p className="ml-2 text-gray-400 hidden lg:flex">
                Where Are You Going?
              </p>
              <div className="hidden lg:flex">
                <Image
                  src="/down.png"
                  alt="Arrow Logo"
                  width={20}
                  height={15}
                  className="image-user"
                />
              </div>
            </div>

            <div className=" border-gray-300 border-x px-3 w-full flex justify-center lg:justify-between items-center">
              <Image
                src="/calendar.png"
                alt="Calendar Logo"
                width={18}
                height={10}
                className="image"
              />
              <p className=" text-gray-400 hidden lg:flex">Check-in Date</p>
              <div className="hidden lg:flex">
                <Image
                  src="/down.png"
                  alt="Arrow Logo"
                  width={20}
                  height={15}
                  className="image-user"
                />
              </div>
            </div>

            <div className="px-3 w-full flex justify-center lg:justify-between items-center">
              <Image
                src="/user.png"
                alt="User Logo"
                width={18}
                height={10}
                className="image-user"
              />
              <h1 className="ml-2 font-bold hidden lg:flex">3 adults</h1>
              <div className="hidden lg:flex">
                <Image
                  src="/down.png"
                  alt="Arrow Logo"
                  width={20}
                  height={15}
                  className="image-user"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" text-white hover:bg-blue-950 px-3 py-2 rounded-lg bg-indigo-950 font-medium"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-5 text-indigo-950 items-center font-medium text-base">
            <h1>Trending destinations</h1>
            <div className="flex space-x-2">
              <div className="border-indigo-950 hover:cursor-pointer hover:bg-indigo-950 border py-1 px-1 rounded-lg">
                <Image
                  src="/left.png"
                  alt="Left Logo"
                  width={20}
                  height={20}
                  className="image"
                />
              </div>
              <div className="border-indigo-950 hover:cursor-pointer hover:bg-transparent bg-indigo-950 border py-1 px-1 rounded-lg">
                <Image
                  src="/right.png"
                  alt="Right Logo"
                  width={20}
                  height={20}
                  className="image-right"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Palete
              src="/city-1.jpg"
              name="Montmartre, France"
              rating="4"
              description="Visiting the best tourist araes shown by the audience"
              price="450,000,00"
            />
            <Palete
              src="/city-2.jpg"
              name="Istanbul, Turkey"
              rating="5"
              description="One of our best-selling tours to Turkey and visting its regions ..."
              price="600,000,00"
            />
            <Palete
              src="/city-3.jpg"
              name="London, UK"
              rating="2"
              description="London is one of the most beautiful places to cisit that ..."
              price="360,000,00"
            />
          </div>
          <div className="flex w-full text-center space-x-2 mt-4 items-center justify-center">
            <div className={`w-2 h-2 rounded-full bg-slate-300`}></div>

            <div className={`w-3 h-3 rounded-full bg-indigo-900`}></div>

            <div className={`w-2 h-2 rounded-full bg-slate-300`}></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-5 text-indigo-950 items-center font-medium text-base">
            <h1>Best Offers</h1>
            <Link href="/" className=" hover:text-blue-950 text-xs">
              <p>View All</p>{' '}
            </Link>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-3">
            <Card
              src="/room-1.jpg"
              name="7Seasons Apartments"
              location="Kensington / London"
              price="65,00"
            />
            <Card
              src="/room-2.jpg"
              name="Along With The Villa"
              location="Hungary / Budapest"
              price="65,00"
            />
            <Card
              src="/room-3.jpg"
              name="Reaort and Recreation"
              location="Wiliamstreet / Boxon"
              price="65,00"
            />
            <Card
              src="/room-4.jpg"
              name="Beautiful and Classy"
              location="Citadines Opera / France"
              price="65,00"
            />
            <Card
              src="/room-5.jpg"
              name="Permanent Peace"
              location="Sugar Apartments / Brazil"
              price="79,00"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="my-5 text-indigo-950 font-medium text-base">
            <h1>Explore France</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <Explore
              src="/france-1.jpg"
              name="Eiffel Tower, Paris, France"
              location="Kensin / France"
              price="63,00"
            />
            <Explore
              src="/france-2.jpg"
              name="L'Arc de Triomphe de l'Etoile"
              location="Ngton / France"
              price="71,00"
            />
            <Explore
              src="/france-3.jpg"
              name="Paris, France"
              location="Enskon / France"
              price="36,00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
