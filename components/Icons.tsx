
import React from 'react';

const iconBaseProps = {
    className: "w-8 h-8",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
};

export const LogoIcon = () => (
    <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5L12 2zm0 18.5L4.5 16H12v4.5zm0 0L19.5 16H12v4.5zM4.5 9.47L12 13.5v-4.03L4.5 9.47zm15 0L12 13.5v-4.03L19.5 9.47z"/>
    </svg>
);
  
export const ResolutionIcon = () => (
  <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
);

export const SpeedIcon = () => (
  <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
);

export const VolumeIcon = () => (
  <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
);

export const SmartIcon = () => (
  <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
);

export const ConnectivityIcon = () => (
  <svg {...iconBaseProps}><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>
);

export const ChevronDownIcon = () => (
    <svg {...iconBaseProps} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
);

export const ChevronUpIcon = () => (
    <svg {...iconBaseProps} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
);

export const ChevronLeftIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
);

export const ChevronRightIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
);

export const CloseIcon = () => (
    <svg {...iconBaseProps} className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

export const LinkIcon = () => (
    <svg {...iconBaseProps} className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125V10.5m-7.5-4.5h4.5" /></svg>
);

export const RocketIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.18a14.98 14.98 0 00-12.12 6.16.03.03 0 00.02.04l3.52 3.52a.5.5 0 00.71 0l2.83-2.83a.5.5 0 01.71 0l3.52 3.52a.5.5 0 00.71 0l2.83-2.83a.5.5 0 01.71 0l1.41 1.41z" /></svg>
);

export const HelpIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
);

export const CogIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5" /></svg>
);

export const GalleryIcon = () => (
    <svg {...iconBaseProps} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
);

export const PlayIcon = () => (
    <svg {...iconBaseProps} className="w-16 h-16 text-white/80"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
);


const toolIconProps = {
    ...iconBaseProps,
    className: "w-10 h-10",
};

export const LumaIcon = () => <svg {...toolIconProps}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>;
export const OpenAiIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L20 7v10l-8 5-8-5V7l8-5z M4 7l8 5 8-5 M12 2v20"></path></svg>;
export const MidjourneyIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.18v-2.36L8.14 5h7.72L21 10.82v2.36l-5.14 5.82h-7.72L3 13.18z"></path></svg>;
export const PrintablesIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9v9h-9zM3 3h3.75v3.75H3zM17.25 3h3.75v3.75h-3.75zM3 17.25h3.75v3.75H3zM17.25 17.25h3.75v3.75h-3.75z"></path></svg>;
export const OctoPrintIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm-3.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm1.75-1.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"></path></svg>;
export const MeshroomIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l-5.5 9h11L12 2zm0 20l-5.5-9h11L12 22zm9-9.5H3l5.5 4L3 16h18l-5.5-4L21 12.5z"></path></svg>;
export const CopilotIcon = () => <svg {...toolIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-8 0a8 8 0 1016 0 8 8 0 10-16 0M12 12l4-4m-4 4l-4 4m4-4l4 4m-4-4l-4-4"></path></svg>;
