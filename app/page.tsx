import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-8 grid-cols-12 gap-2 m-2">
      <div className="bg-gradient-to-tr from-green-500 via-fuchsia-500 to-cyan-500 col-span-12 text-3xl text-center content-center border-2 border-black p-10">Box -1</div>
      <div className="bg-gradient-to-tr from-green-500 via-fuchsia-500 to-cyan-500 col-span-2 row-span-6 text-3xl text-center content-center border-2 border-black p-10">Box -2</div>
      <div className="bg-gradient-to-tr from-green-500 via-fuchsia-500 to-cyan-500 col-span-8 row-span-6 text-3xl text-center content-center border-2 border-black p-10">Box -3</div>
      <div className="bg-gradient-to-tr from-green-500 via-fuchsia-500 to-cyan-500 col-span-2 row-span-6 text-3xl text-center content-center border-2 border-black p-10">Box -4</div>
      <div className="bg-gradient-to-tr from-green-500 via-fuchsia-500 to-cyan-500 col-span-12 text-3xl text-center content-center border-2 border-black p-10">Box -5</div>
    </div>
  );
}
