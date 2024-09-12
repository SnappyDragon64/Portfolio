import {cn} from "@/util/Utils.ts";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
    className?: string;
    children: ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ className, children }) => {
    return (
      <div className="flex w-full h-full">
          <div className="w-80">

          </div>
          <div className={`w-full max-w-screen-xl ${className}`}>
              {children}
          </div>
          <div className="w-80">

          </div>
      </div>
    );
};

export default MaxWidthWrapper;