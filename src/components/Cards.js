import React, { Component } from 'react'
import '../App.css';
import { Card } from 'antd';
import Select from './Select';
//import { AntDesignOutlined } from '@ant-design/icons';
import Button from './Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Cards extends Component {
    render() {

        const judul = this.props.judul
        const compe = this.props.compe
        const date = this.props.date
        const img = this.props.img
        const tmbl = this.props.tmbl
        const tebak = this.props.tebak
        const reset = this.props.reset
        const effect = this.props.effect
        return (
            <Card style={{ background: "#9eedff",borderColor: 'black', borderRadius: '25px', minWidth: '20vw' }}>
                <img alt={img} src={img}/>
                <p></p>
                <h3 className="cards-text">{judul}</h3>
                <h3 className="cards-text">{compe}</h3>
                <h3 className="cards-text">{date}</h3>
                <Select>
                    <option>Belum Ditonton</option>
                    <option>Sudah Ditonton</option>
                </Select>
                <Button onClick={tmbl}>Stream Sekarang!</Button>
                <Router>
                <Button>
                    <Link to={tebak}>
                        Tebak Skor
                    </Link>
                </Button>
                <Button>
                    <Link to={reset}>
                        Reset Skor
                    </Link>
                </Button>
                <Switch>
                    <Route path={tebak} exact component={effect}/>
                    <Route path={reset}/>
                </Switch>
                </Router>
            </Card>
        )
    }
}