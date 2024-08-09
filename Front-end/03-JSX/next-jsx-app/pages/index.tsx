import Head from 'next/head';

//Image 컴포넌트 참조하기
//Nextjs Image컴포넌트를 이용하면 자동으로 가로세로 비율유지하며 이미지를 최적화하여 화면에 출력합니다.
import Image from 'next/image';

import { Inter } from 'next/font/google';

//홈컴포넌트 전용 css모듈 파일 참조하기
import styles from '@/styles/Home.module.css';

//React패키지 참조와 Fragment 컴포넌트 참조하기
import React, { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

//인삿말 정의 함수컴포넌트
function Hello(isLogin: boolean): JSX.Element {
  if (isLogin) {
    return <b>로그인되었습니다.</b>;
  } else {
    return <b>로그인이 필요합니다.</b>;
  }
}

export default function Home() {
  //프로그래밍 로직을 구현하는 영역입니다.
  const userName: string = '김범수';
  const isLogin: boolean = true;

  //인삿말을 출력하는 컴포넌트 정의하기
  const Greeting = () => {
    if (isLogin) {
      return <b>{userName}님으로 로그인했습니다.</b>;
    } else {
      return <b>Guest님,로그인해주세요.</b>;
    }
  };

  //현재 컴포넌트에서 재사용가능한 스타일 정의하기
  const myStyle = {
    color: 'white',
    backgroundColor: 'gray',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    fontSize: '1.2em',
    fontWeight: 'bold',
  };

  //주제 배열 데이터 생성하기
  const topics = [
    {
      id: 1,
      title: 'React',
      content: '리액트는 페이스북에서 개발한 웹 UI 라이브러리입니다.',
    },
    {
      id: 2,
      title: 'Angular',
      content: '앵귤러는 구글에서 개발한 웹 UI 프레임워크입니다.',
    },
    {
      id: 3,
      title: 'Next.js',
      content: 'Next.js는 버셀사에서 개발한 웹 풀스택 개발 프레임워크입니다.',
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            {/* 안녕하세요.{userName} 님&nbsp; */}
            {/* {isLogin ? '로그인되었습니다.' : '로그인이 필요합니다.'} */}

            {/* {isLogin ? (
              <b>{userName}님으로 로그인했습니다.</b>
            ) : (
              <b>Guest님,로그인해주세요.</b>
            )} */}

            {/* {Hello(isLogin)} */}

            {Greeting()}

            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>

            {/* <img src="/vercel.svg" alt="Vercel Logo" width={100} height={24} /> */}
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        {/* JSX요소내에 인라인 스타일 정의하기 */}
        <div style={{ color: 'white', backgroundColor: 'gray' }}>
          즐거운 React Next.js 코딩 되세요.
          <br />
          JSX 스타일링 방법을 배워봅시다.
        </div>

        <br />
        {/* 직접적으로 스타일정의하는 방법-인라인스타일  */}
        <div style={myStyle}>JSX 스타일링 방법을 배워봅시다1.</div>
        <div style={myStyle}>JSX 스타일링 방법을 배워봅시다2.</div>

        {/* 클래스로 정의된 공통 스타일 적용법 */}
        <div className={styles.sample1}>JSX 스타일링 방법을 배워봅시다2.</div>
        <div className="sample2">
          JSX 스타일링 방법을 배워봅시다-전역클래스스타일적용.
        </div>

        <div className={styles.grid}>
          {/* 동적으로 배열 아이템 수만큼 JSX 요소를 생성합니다. */}
          {topics.map((topic, index) => (
            <a
              href="#"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              key={topic.id}
            >
              <h2>
                {topic.title} <span>-&gt;</span>
              </h2>
              <p>{topic.content}</p>
            </a>
          ))}

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </Fragment>
  );
}