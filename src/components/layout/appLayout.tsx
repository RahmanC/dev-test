import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Navigation {
  previous?: {
    text: string;
    path: string;
  };
  next?: {
    text: string;
    path: string;
  };
}

interface IAppLayout {
  children: ReactNode;
  leftContent: {
    title: string;
    description: string;
    tags: string[];
    navigation: Navigation;
  };
}

export const AppLayout = ({ children, leftContent }: IAppLayout) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden relative flex bg-white p-4 lg:p-11.5">
      <div className="relative w-full h-full overflow-y-auto md:overflow-y-hidden rounded-4xl flex flex-col lg:flex-row gap-0 lg:gap-44.5 items-center justify-center shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] p-5 lg:ps-[113px] lg:pe-[201px]">
        {/* Left Side Content */}
        <div className="w-full lg:w-[351px] flex flex-col">
          <div className="flex-1">
            <p className="text-base font-medium mb-3 text-[#292929]">
              {leftContent.title}
            </p>
            <p className="text-sm leading-5 font-normal mb-4 text-[#737373]">
              {leftContent.description}
            </p>
            <div className="flex items-center gap-2 w-full overflow-x-auto">
              {leftContent.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#F7F7F7] rounded-lg text-[13px] font-normal leading-[19.5px] text-[#737373] min-w-max"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-5 lg:bottom-[94px] left-5 lg:left-[113px]">
            {leftContent.navigation.previous && (
              <button
                type="button"
                onClick={() => navigate(leftContent.navigation.previous!.path)}
                className="bg-white/5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]
                rounded-lg py-1.5 px-2.5 text-[#292929] text-sm font-medium cursor-pointer hover:bg-[#F5F5F5]"
              >
                {leftContent.navigation.previous.text}
              </button>
            )}
            {leftContent.navigation.next && (
              <button
                type="button"
                onClick={() => navigate(leftContent.navigation.next!.path)}
                className="bg-white/5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]
                rounded-lg py-1.5 px-2.5 text-[#292929] text-sm font-medium cursor-pointer hover:bg-[#F5F5F5]"
              >
                {leftContent.navigation.next.text}
              </button>
            )}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-1 items-center justify-center p-2 lg:p-8 w-full lg-w-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
