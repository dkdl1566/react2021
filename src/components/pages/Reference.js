import axios from "axios";
import React from 'react';
import ReferInfo from '../basics/ReferInfo';
import Loader from '../basics/Loader';
import Header from "../Header";
import Layout from '../Layout';
import WrapTitle from '../basics/WrapTitle'
import Footer from '../Footer';

class Reference extends React.Component{
  state = {
    isLoading : true,
    refer: [],
  };

  getRefer = async () => {
    const {data:{
      data:{htmlRefer},
    }} = await axios.get("https://webstoryboy.github.io/dothome1/refer.json");
    this.setState({htmlRefer, isLoading:false});
  };
  // 비동기 동기 맞추려면 async await를 써주어야한다 ES6 이상

  componentDidMount(){
    setTimeout(()=> {
      // this.setState({isLoading : false});
      this.getRefer();
    },3000);
  }

  render(){
    const{isLoading, htmlRefer } = this.state;
    return (
    <div>
      {isLoading 
      ? <Loader color="light" /> 
      : (
      <div id="wrap" className="light">
        <Header info="none" />
        <Layout>
          <section id="referCont">
            <div className="container">
              <WrapTitle text={["portfopli","site"]} />
              <div className="refer-cont">
                <div className="refer-table">
                  <ul>
                    {htmlRefer.map((refer) => (
                      <ReferInfo
                        id={refer.id} 
                        title={refer.title}
                        desc={refer.desc}
                        key= {refer.id}
                        category={refer.category}
                        property={refer.property}
                        version={refer.version}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
        <Footer />
      </div>)}
    </div>
    );
  };
};

export default Reference;
