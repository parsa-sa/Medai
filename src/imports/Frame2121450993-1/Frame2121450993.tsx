function Frame() {
  return <div className="bg-[#1c1c1c] h-[106.9px] relative rounded-[8px] shrink-0 w-[4px]" />;
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

function Frame1() {
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

function ActiveBar() {
  return <div className="bg-gradient-to-b from-[#025bcf] h-[106.895px] relative rounded-[8px] shrink-0 to-[#0091bd] w-[4px]" data-name="Active bar" />;
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

function Frame2() {
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

function Frame5() {
  return (
    <div className="relative self-stretch shrink-0 w-[730px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between py-[8px] relative size-full">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <Frame />
            <Features />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[730px]">
            <Frame1 />
            <Features1 />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[730px]">
            <ActiveBar />
            <Features2 />
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
            <Frame2 />
            <Features3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[256px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g id="Icon">
          <path d="M128 128H224" id="Vector" stroke="var(--stroke-0, #0091BD)" strokeDasharray="6.4 4.8" strokeOpacity="0.3" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[256px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g id="Icon">
          <path d="M128 128V224" id="Vector" stroke="var(--stroke-0, #0091BD)" strokeDasharray="6.4 4.8" strokeOpacity="0.3" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[256px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g id="Icon">
          <path d="M128 128H32" id="Vector" stroke="var(--stroke-0, #0091BD)" strokeDasharray="6.4 4.8" strokeOpacity="0.3" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[256px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 256">
        <g id="Icon">
          <path d="M128 128V32" id="Vector" stroke="var(--stroke-0, #0091BD)" strokeDasharray="6.4 4.8" strokeOpacity="0.3" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return <div className="bg-white opacity-51 relative rounded-[26843520px] shrink-0 size-[19.2px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_16px_12px_rgba(0,145,189,0.2),0px_6.4px_4.8px_rgba(0,145,189,0.2)] flex items-center justify-center left-[76.8px] px-[41.6px] rounded-[25.6px] size-[102.4px] top-[76.8px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(2, 91, 207) 0%, rgb(0, 95, 206) 7.1429%, rgb(0, 100, 205) 14.286%, rgb(0, 104, 204) 21.429%, rgb(0, 108, 203) 28.571%, rgb(0, 112, 201) 35.714%, rgb(0, 116, 200) 42.857%, rgb(0, 120, 199) 50%, rgb(0, 123, 198) 57.143%, rgb(0, 127, 196) 64.286%, rgb(0, 131, 195) 71.429%, rgb(0, 134, 193) 78.571%, rgb(0, 138, 192) 85.714%, rgb(0, 142, 191) 92.857%, rgb(0, 145, 189) 100%)" }} data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#00bc7d] relative rounded-[26843520px] shrink-0 size-[9.6px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[192px] px-[27.2px] py-[1.6px] rounded-[22.4px] size-[64px] top-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[22.4px]" />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#00bc7d] relative rounded-[26843520px] shrink-0 size-[9.6px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[96px] px-[27.2px] py-[1.6px] rounded-[22.4px] size-[64px] top-[192px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[22.4px]" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#00bc7d] relative rounded-[26843520px] shrink-0 size-[9.6px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-0 px-[27.2px] py-[1.6px] rounded-[22.4px] size-[64px] top-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[22.4px]" />
      <Container9 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#00bc7d] relative rounded-[26843520px] shrink-0 size-[9.6px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[96px] px-[27.2px] py-[1.6px] rounded-[22.4px] size-[64px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[22.4px]" />
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute left-[91px] size-[256px] top-[74px]" data-name="Container">
      <Icon />
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container14() {
  return <div className="bg-[#00bc7d] opacity-51 relative rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#00d492] text-[15px] top-[-0.5px] whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[51.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container14 />
        <Text />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] flex-[1_0_0] h-full min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[36px] relative size-full">
          <Container />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full">
      <Frame5 />
      <div className="h-[552px] relative rounded-[16px] shrink-0 w-[486px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 486 552\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.7414e-7 -18.414 31.483 -9.3916e-7 248.74 -77.709)\\'><stop stop-color=\\'rgba(0,77,101,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,43,61,0.53)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(2,25,42,0.765)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(2,8,22,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} data-name="Right">
        <div className="content-stretch flex items-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
          <Frame3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}