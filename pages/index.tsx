import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Dubai Mall</title>
        <meta name="description" content="A one-stop destination for shopping, dining, and entertainment in Dubai." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl">Dubai Mall</h1>
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>
      <main className="p-5">
        <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: `url('/hero-image.jpg')` }}>
          <div className="text-white h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h2 className="text-4xl">Welcome to Dubai Mall</h2>
            <p className="mt-2">Your ultimate shopping destination</p>
          </div>
        </section>
        <section>
          <h2 className="text-3xl mt-10">Store Directory</h2>
          <ul className="mt-5">
            <li>Store 1</li>
            <li>Store 2</li>
            <li>Store 3</li>
          </ul>
        </section>
        <section>
          <h2 className="text-3xl mt-10">Events</h2>
          <p className="mt-5">Upcoming events at Dubai Mall.</p>
        </section>
        <section>
          <h2 className="text-3xl mt-10">Contact Information</h2>
          <p className="mt-5">Contact us at: contact@dubaimall.com</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-5 text-center">
        © 2026 Dubai Mall. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;