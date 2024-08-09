//폰트스타일을 구글 폰트 참조하기
import { Inter } from 'next/font/google';

//폰트스타일을 적용하기 위해 Inter 함수를 호출한다.
const inter = Inter({ subsets: ['latin'] });

//가이드 데이터 타입 참조하기
import { GuideType, IGuide } from '@/interface/main';

//각종 재사용 컴포넌트 참조하기
import Header from '@/components/header';
import LogoContents from '@/components/logo-contents';
import Guide from '@/components/guide';

//가이드 자식 컴포넌트에 전달한 props 데이터 타입 정의
// type Guide = {
//   href: string;
//   title: string;
//   desc: string;
// };

// interface IGuide {
//   href: string;
//   title: string;
//   desc: string;
// }

function Main() {
  //next.js 로고 이미지 경로 데이터 정의
  const logoPath = '/next.svg';

  //프론트엔드 핵심 기술 가이드 데이터
  const guides: GuideType[] = [
    {
      href: 'https://nextjs.org',
      title: 'Next.js',
      desc: 'Next.js의 최신기술을 경험해 보세요.',
    },
    {
      href: 'https://tailwindcss.com',
      title: 'Tailwind',
      desc: 'Tailwind CSS Framework에 대해 알아보세요.',
    },
    {
      href: 'https://js.langchain.com',
      title: 'LangChain.js',
      desc: 'LangChain.js의 최신기술을 알아 보세요.',
    },
    {
      href: 'https://mixedcode.com',
      title: 'MixedCode.COM',
      desc: '여러분의 기술과 경험을 공유해보세요.',
    },
  ];

  //자식 컴포넌트에서 발생한 이벤트 처리 함수
  const handleChildClick = (url: string) => {
    console.log('이동할 URL 데이터:', url);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* 헤더 컴포넌트 영역  */}
      <Header mainPage="pages/main.tsx" onClick={handleChildClick} />

      {/* 로고 컴포넌트 영역  */}
      <LogoContents logoPath={logoPath} />

      {/* 가이드 컴포넌트 영역-Props방식으로 자식컴포넌트에게 읽기전용 데이터를 전달  */}
      <Guide guides={guides} />
    </main>
  );
}

export default Main;