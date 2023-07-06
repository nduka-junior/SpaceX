import React from 'react'

function Footer() {
    return (
      <div className="bg-mainBg  text-[14px] flex justify-center items-center p-[20px] text-center text-white">
        <h1>Made with ❤️ by</h1>
        <a
          className="text-blue mx-2"
          href="https://www.linkedin.com/in/nduka-junior-8b55aa1ab/"
        >
          Nduka Sochi
        </a>
        using
        <a
          className="text-blue ml-2"
          href="https://github.com/r-spacex/SpaceX-API"
        >
          SpaceX api
        </a>
      </div>
    );
}

export default Footer