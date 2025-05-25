
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col gap-2 justify-center items-center h-[44vh] ">
        <div className="font-bold text-4xl flex">Buy Me a Chai <span><img src="/tea.gif" className="w-10" alt="" /></span></div>
        <p className=" text-center">A crowdfunding platform for creators to fund their projects. </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer">Start now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer">Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-20">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XzVWKY_Ebqk?si=HsnX5HMzatTZ6LLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>
    </div>

  );
}
