import HoverMenu from "@/components/HoverMenu.tsx";
import StickyText from "@/components/StickyText.tsx";
import MaxWidthWrapper from "./components/MaxWidthWrapper.tsx";

function App() {
  return (
    <MaxWidthWrapper className="font-rem">
      <div className="h-[calc(100dvh)] overflow-y-clip">
        <StickyText text="NAVIGATION" xOffset={10} yOffset={0} theta={90} zIndex={50} className="select-none mix-blend-multiply invisible xs:visible text-7xl lg-h:text-8xl xl-h:text-9xl font-black text-gray-950 opacity-80 italic text-left"/>
        <HoverMenu/>
      </div>
    </MaxWidthWrapper>
  );
}

export default App;
