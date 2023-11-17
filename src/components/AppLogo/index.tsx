import React, { FC } from "react";
import Image from "next/image";

const AppLogo: FC = () => {
  return (
    <div>
      <Image src="/logo/logo.svg" alt="logo" width="108" height="108" />
    </div>
  );
};

export default AppLogo;
