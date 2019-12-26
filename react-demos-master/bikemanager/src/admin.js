import React from 'react'
import { Row,Col } from 'antd'//导入栅格组件
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import 'antd/dist/antd.css'
import './style/common.less'

export default class Admin extends React.Component{
    
    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                    <Header/>
                    <Row className="content" className="content">操作区</Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}