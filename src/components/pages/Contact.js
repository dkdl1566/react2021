// import React from 'react';
// import Header from "../Header";
// import Layout from '../Layout';

// function Cont({text}) {
//   return(
//     <div>{text}</div>
//   )
// }

// const contactText = [
//   {text: "YOU ARE"},
//   {text: "ALREADY"},
//   {text: "DOING WELL."}
// ]

// function Contact() {
//   return (
//     <div id="wrap">
//       <Header />
//       <Layout>
//         <section id="contactCont">
//           <div className="contact-cont">
//             {contactText.map((txt)=>(
//               <Cont text ={txt.text} />
//             ))}
//           </div>
//         </section>
//       </Layout>
//     </div>
//   );
// }

// export default Contact;
//
//
//
//
//
//
//
//
import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';

function Contact() {
  return (
    <div id='wrap'>
      <Header />
      <Layout />
      <section></section>
      <Footer />
    </div>
  );
}

export default Contact;
