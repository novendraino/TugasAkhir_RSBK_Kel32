import React, { Component } from "react";
import axios from "axios";
import { Card, Modal, Avatar } from "antd";
import "antd/dist/antd.css";

import Effect from "./useEffect/Effect";

import { Space, Layout } from 'antd';

import Cards from './components/Cards';
//import Links from './components/Links';
import Button from './components/Button';

import FotoI from './ino.jpg';
import FotoD from './dinisya.png';

const { Content } = Layout;
//const { Title } = Typography;
//const header_space = 20;

export default class tekkom extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      count:0,
      tekkom: [],
      visible: false,
      nama: "",
      asal: "",
      nim: "",
    };
  }

  handleButton = (url) => {
    //alert(url);
    this.setState({count: this.state.count + 1});
    window.open(url);
  };
  handleTambahOrang = () => {
    if (window.confirm("Lihat Data Anggota Kelompok 32?")) { 
      this.setState({
        visible: true,
      });
    }
  };
  
  componentDidMount() {
    axios({
      method: "get",
      url: "https://www.scorebat.com/video-api/v1/",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          tekkom: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>Daftar Live Streaming Pertandingan Sepak Bola</h1>
            <p>Stream Viewers Count : {this.state.count}</p>
            <p></p>
          </center>
          <center>
            <button onClick={this.handleTambahOrang}>Kelompok 32</button> 
          </center>
          <Modal
            title="ABOUT"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "center" }}>
              <Avatar src={FotoI} size={{ xs: 30, sm: 35, md: 45, lg: 70, xl: 100, xxl: 120 }}/>
              <p>Heidy Novendra</p>
              <p>21120117130035</p>
              <br/>
              <Avatar src={FotoD} size={{ xs: 30, sm: 35, md: 45, lg: 70, xl: 100, xxl: 120 }}/>
              <p>Dinisya Zalfa Wafi</p>
              <p>21120117130068</p>
            </div>
          </Modal>

          {this.state.tekkom.map((results, index) => { 
            return (
              <div className="card" key={results.title}>
                
                <center>
                <Content style={{ padding: 10, paddingBottom: '1%', paddingTop: '1%', background: 'white', height: '80hv'}}>
                  <Space direction="horizontal" size='large' >
                    <Cards judul={results.title} compe={results.competition.name} date={results.date} img={results.thumbnail} 
                    tmbl={() => this.handleButton(results.url)} tebak="/prediksi" reset="/" effect={Effect}>
                    </Cards>
                  </Space>
                </Content>
                </center>

              </div>
            );
          })}
        </div>
      </div>
      
    );
  }
} 