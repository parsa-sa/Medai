import svgPaths from "./svg-xl22omavz5";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[0] relative shrink-0 text-center w-[640px]" data-name="Text">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[40px] text-white w-[572px]">
        <p className="leading-[48px]">Intuitive Intelligence</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#aeaeb8] text-[16px] w-[min-content]">
        <p className="leading-[26px]">Technology should amplify human judgment, not replace it. We build systems that make complex information clear, workflows smooth, and decisions confident.</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center max-w-[640px] relative shrink-0" data-name="Heading">
      <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[99px] shrink-0" data-name="Feature Badge">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[99px]" style={{ backgroundImage: "linear-gradient(102.584deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)" }} />
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap">
          <p className="leading-[18px]">OUR PHILOSOPHY</p>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_#e5e5e8,inset_0px_-1px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <Text />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p5df720} fill="var(--fill-0, black)" id="Vector" />
          <path d="M9 18H15Z" fill="var(--fill-0, white)" id="Vector_2" />
          <path d="M10 22H14Z" fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#82e7ba] content-stretch flex items-center justify-center px-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">Clarity Over Complexity</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#aeaeb8] text-[16px] w-full">
        <p className="leading-[26px]">{`We don't add features for the sake of innovation. Every element serves a clear business purpose.`}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Container />
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 294 286\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-4.6831e-7 -9.5406 19.045 -4.8659e-7 150.47 -40.262)\\'><stop stop-color=\\'rgba(0,77,101,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[32px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p5d36b00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2f1426c0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p25f79f00} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#7cdfde] content-stretch flex items-center justify-center px-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">Human-Centered Design</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#aeaeb8] text-[16px] w-full">
        <p className="leading-[26px]">Systems should feel intuitive to the people who use them every day, not just engineers.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Container1 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 294 286\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-4.6831e-7 -9.5406 19.045 -4.8659e-7 150.47 -40.262)\\'><stop stop-color=\\'rgba(0,77,101,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[32px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M8.16667 23.3333H19.8333Z" fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p368eb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p14902f80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p17578300} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#82e7ba] content-stretch flex items-center justify-center px-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">Growth Through Systems</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#aeaeb8] text-[16px] w-full">
        <p className="leading-[26px]">Sustainable growth comes from better operations, not just more effort. We build the infrastructure for scale.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Container2 />
      <Frame2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 294 286\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-4.6831e-7 -9.5406 19.045 -4.8659e-7 150.47 -40.262)\\'><stop stop-color=\\'rgba(0,77,101,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[32px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p190dabf0} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2a9abe70} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#ff6e6e] content-stretch flex items-center justify-center px-[14px] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">Execution Focused</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#aeaeb8] text-[16px] w-full">
        <p className="leading-[26px]">Strategy matters, but execution is everything. We measure success by what gets done, not what gets discussed.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Container3 />
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 294 286\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-4.6831e-7 -9.5406 19.045 -4.8659e-7 150.47 -40.262)\\'><stop stop-color=\\'rgba(0,77,101,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[32px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame7 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame5 />
      </div>
      <Frame11 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame9 />
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="How It Works">
      <Frame10 />
    </div>
  );
}

function ActiveBar() {
  return <div className="bg-gradient-to-b from-[#025bcf] h-[106.895px] relative rounded-[8px] shrink-0 to-[#0091bd] w-[4px]" data-name="Active bar" />;
}

function Features() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-w-px relative text-white" data-name="Features">
      <div className="capitalize flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[20px] w-full">
        <p className="leading-[28px]">Problem Solving</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[26px]">{`We don't sell technology for its own sake. We solve real operational challenges that impact your bottom line.`}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#1c1c1c] h-[106.9px] relative rounded-[8px] shrink-0 w-[4px]" />;
}

function Features1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-w-px relative text-white" data-name="Features">
      <div className="capitalize flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[20px] w-full">
        <p className="leading-[28px]">Servant Leadership</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[26px]">Your success defines our success. We measure our performance by your operational improvements and business growth.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return <div className="bg-[#1c1c1c] h-[106.9px] relative rounded-[8px] shrink-0 w-[4px]" />;
}

function Features2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-w-px relative text-white" data-name="Features">
      <div className="capitalize flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[20px] w-full">
        <p className="leading-[28px]">State-of-the-Art Technology</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[26px]">Your success defines our success. We measure our performance by your operational improvements and business growth.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#1c1c1c] h-[106.9px] relative rounded-[8px] shrink-0 w-[4px]" />;
}

function Features3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-w-px relative text-white" data-name="Features">
      <div className="capitalize flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[20px] w-full">
        <p className="leading-[28px]">Smooth Process</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[26px]">{`Complex systems shouldn't feel complicated to use. We prioritize clean interfaces, clear workflows, and intuitive design.`}</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative self-stretch shrink-0 w-[730px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between py-[8px] relative size-full">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <ActiveBar />
            <Features />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <Frame13 />
            <Features1 />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <Frame14 />
            <Features2 />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <Frame15 />
            <Features3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid left-0 rounded-[14px] size-[56px] top-0" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] h-px left-[68px] top-[27.5px] w-[24px]" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex items-center justify-center left-0 px-[16px] py-[2px] rounded-[14px] size-[56px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(254,154,0,0.4)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon4 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#fe9a00] left-[48px] rounded-[16777200px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute left-[104px] size-[56px] top-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] h-px left-[172px] top-[27.5px] w-[24px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid left-[208px] rounded-[14px] size-[56px] top-0" data-name="Container" />;
}

function Container5() {
  return (
    <div className="h-[56px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Container7 />
        <Container8 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[163_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[-7px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[55.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#ffb900] text-[15px] top-[-0.5px] whitespace-nowrap">4 mapped</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-end relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function ProblemSolvingVisual() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] flex-[1_0_0] h-full min-w-px relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" data-name="ProblemSolvingVisual">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-end p-[36px] relative size-full">
          <Container4 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="bg-[#020816] content-stretch flex flex-col gap-[56px] items-center p-[96px] relative size-full">
      <Heading />
      <HowItWorks />
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1248px]">
        <Frame17 />
        <div className="h-[552px] relative rounded-[16px] shrink-0 w-[486px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 486 552\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.7414e-7 -18.414 31.483 -9.3916e-7 248.74 -77.709)\\'><stop stop-color=\\'rgba(0,77,101,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,0.53)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,0.765)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} data-name="Right">
          <div className="content-stretch flex items-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
            <ProblemSolvingVisual />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}