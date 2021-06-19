# 리액트


<br>

## 리액트 설치
```
1. cmd 실행 dir 입력 "애플은 ls"
2. cd Documents 선택 
3. npx create-react-app react2020(폴더명 설정)
```

## vscode 터미널 설치작업
```
1. 작업표시줄의 터미널 새 터미널 출력
2. npm install node-sass 입력 후 설치
3. npm install react-router-dom 설치
4. npm install prop-types 설치
5. npm install axios 설치
```

## 파일삭제

```
src의 app.js,index.js를 제외한 폴더 삭제
src안에 폴더 assets와 components 폴더생성(폴더 경로 확인필수)
public 폴더안 index.html 빼고 전부 파일 삭제
```
앞에 대문자로 시작하는건 함수가아닌 컴포넌트이다.
map이라는 메서드 공부
```
 {textInfo.map((elem, indexn array) => {
    <Info text={txt.text}
  })}
```


```
constructor() 함수 
생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.
componentDidMount() 함수 
컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다. 이 안에서 다른 JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
componentDidUpdate() 함수 
이 함수는 화면이 업데이트 되면 실행되는 함수입니다. 
componentWillUnmount() 함수
컴포넌트가 죽을 때 실행되는 함수


```
## portfolio2
```
import React from 'react';
import Header from "../Header";
import Layout from '../Layout';
import WrapTitle from '../basics/WrapTitle'
import Footer from '../Footer';
import PropTypes from "prop-types";

function Port({link, image, title, category}) {
    return (
        <div className="port__item">
            <figure className="port__item__img">
            <a href={link}>
                <img src={image} alt={title} />
            </a>
            </figure>
            <div className="port__item__txt">
            <h2>{title}</h2>
            <p>{category}</p>
            </div>
        </div>
    )
}


const portfolioInfo = [
    {   
        id: "1",
        link: "https://webstoryboy.github.io/portfolio/port2/",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG1",
        category: "PORTFOLIO",
        rating: 5
    },
    {
        id: "2",
        link: "https://webstoryboy.github.io/portfolio/port1/",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG2",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "3",
        link: "https://webstoryboy.github.io/portfolio/port3/pf03.html",
        image: "../img/port03.jpg",
        title: "PORTFOLIO HWANG3",
        category: "PORTFOLIO",
        rating: 5
    },
    {
        id: "4",
        link: "https://webstoryboy.github.io/portfolio/port4/index4.html",
        image: "../img/port04.jpg",
        title: "PORTFOLIO HWANG4",
        category: "PORTFOLIO",
        rating: 5
    },
    {
        id: "5",
        link: "https://webstoryboy.github.io/portfolio/port5/indexs/main.html",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG5",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "6",
        link: "https://webstoryboy.github.io/portfolio/port6/port05.html",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG6",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "7",
        link: "https://webstoryboy.github.io/portfolio/port7/",
        image: "../img/port03.jpg",
        title: "PORTFOLIO HWANG7",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "8",
        link: "https://webstoryboy.github.io/portfolio/port8/index4.html",
        image: "../img/port04.jpg",
        title: "PORTFOLIO HWANG8",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "9",
        link: "https://webstoryboy.github.io/portfolio/port9/index5.html",
        image: "../img/port01.jpg",
        title: "PORTFOLIO HWANG9",
        category: "PORTFOLIO",
        rating: 4.9
    },
    {
        id: "10",
        link: "https://webstoryboy.github.io/portfolio/port10/portfolio/index.html",
        image: "../img/port02.jpg",
        title: "PORTFOLIO HWANG10",
        category: "PORTFOLIO",
        rating: 4.9
    }
];



function Portfolio() {
  return (
    <div id="wrap">
      <Header info="none" />
      <Layout>
        <section id="portCont">
          <div className="container">
            <WrapTitle  text={["Portfolio","Site"]} />
            <div className="port__cont">
              {portfolioInfo.map((info) =>(
                  <Port 
                    link={info.link} 
                    image={info.image} 
                    title={info.title} 
                    category={info.category} 
                  />
              ))}
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

Port.propTypes = {
    link: PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    category :PropTypes.string.isRequired,
}// 리액트 규칙 : propTypes 를 설정해주어야 한다.

export default Portfolio;
```

## portfolio3
```
import React from 'react';

class Portfolio extends React.Component {

    constructor(props){
        super(props);// 상속받은것을 그대로 쓰는것 super
        console.log("constructor()");
    }

    state = {
        count : 0,
    };

    add =() => {
        console.log("add");
        // this.state.count += 1; 자바스크립트일때
        // this.setState({count:1});
        // this.setState({count:this.state.count + 1});
        this.setState( current => ({
            count: current.count +1,
        }));// 리액트의 표준 방법
    };
    min =() =>{
        console.log("minus");
        // this.setState({count:this.state.count - 1});
        this.setState( current => ({
            count: current.count -1,
        }));
    };

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render(){
        return(
            <div>
                <h1>class {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.min}>minus</button>
            </div>
        )
    }
}

export default Portfolio;
```

```
// import { render } from '@testing-library/react';
import React from 'react';

// function ReferDetail(props) {
//   console.log(props);
//   return <span>props</span>;
// }

class ReferDetail extends React.Component{
  componentDidMount(){
    const { location, history } = this.props;
    if( location.state === undefined ){
      history.push('/reference');
    }
  };

  render(){
    const {location} =this.props;
    if(location.state){
      return <span>{location.state.title}</span>
    }else{
      return null;
    }
  }

}


export default ReferDetail;
```
세부페이지를 새 창에서 접속하려할때 막는역할 



# youtube api 연동하기
postman 설치
youtube api 시작하기 검색후 영어버전으로 실행
youtube api 안에 console api 클릭 후 로그인 실행
    새 프로젝트 만들기
    사용자 인증정보 들어가기
    youtube data v3 사용
    api 제품키 복사

youtube>data api> search> list 
part에 snippet입력
maxResult 25입력
q 에 검색하고싶은거 입력
show code 클릭후 상단에 url 복사후 제품키 복사한거 입력
입력할때 [] 지우고 제품키 복사할것

웹스토어 json viewer 설치


## vue 설치
cmd 실행  
npm i -g @vue/cli 입력
설치완료후 vue create 파일명
3번째 항목 enter 후
1,2,5,6,7,8 항목 스페이스바로 선택

## yarn 설치
npm i -g yarn