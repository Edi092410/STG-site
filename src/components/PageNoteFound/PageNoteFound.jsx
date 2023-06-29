import React from "react";
import { Image } from "antd";

export const PageNoteFound = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center  w-screen h-screen ">
        {/* <Image src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/326767897_725883715722249_7053786954676734669_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BieQnOY8GwQAX865v7p&_nc_ht=scontent.fuln6-1.fna&oh=00_AfCH55xqAELKaifoBR0qbvTSdyArf-muNdS3Es6ls7FOkw&oe=64849C70" /> */}
        <img
          src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/326767897_725883715722249_7053786954676734669_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BieQnOY8GwQAX865v7p&_nc_ht=scontent.fuln6-1.fna&oh=00_AfCH55xqAELKaifoBR0qbvTSdyArf-muNdS3Es6ls7FOkw&oe=64849C70"
          className="h-auto w-[11%]"
        />
        <span className="ml-4">
          <h1 className=" text-slate-800 text-6xl text-center">404!</h1>
          <div className=" text-lg">Таны хайсан хаяг байхгүй байна.</div>
        </span>
      </div>
    </div>
  );
};
