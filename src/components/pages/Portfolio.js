import axios from 'axios';
import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
// import PortInfo from '../basics/PortInfo';
import Footer from '../Footer';
// import WrapTitle from '../basics/WrapTitle';
import Loader from '../basics/Loader';

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [] //포트폴리오 내용 저장할 곳
  };

  getPorts = async () => {
    const {
      data: {
        data: { ports }
      }
    } = await axios.get('https://webstoryboy.github.io/dothome1/portfolio.json');
    //console.log(ports);
    //console.log(ports.data.data.ports);
    this.setState({ ports, isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      //this.setState({ isLoading: false });
      this.getPorts();
    }, 3000);
  }

  // render() {
  //   const { isLoading, ports } = this.state;//출력할 값을 변수로 저장
  //   return (
  //     <div>
  //       {isLoading ? (
  //         <Loader />
  //       ) : (
  //         <div id="wrap">
  //             <Header info="none" />
  //             <Layout />
  //               <section id="portCont">
  //                   <div className="container">
  //                       <WrapTitle text ={['Portfolio','Site']} />
  //                       <div className="port__cont">
  //                           {ports.map((port) => (
  //                           <PortInfo
  //                               key={port.id}
  //                               link={port.link}
  //                               image={port.image}
  //                               title={port.title}
  //                               category={port.category}
  //                           />
  //                           ))}
  //                       </div>
  //                   </div>
  //               </section>

  //           <Footer />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
  //
  //
  //
  //
  //
  //
  //
  //
  render() {
    const { isLoading } = this.state; //출력할 값을 변수로 저장
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div id='wrap'>
            <Header info='none' />
            <Layout />

            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
