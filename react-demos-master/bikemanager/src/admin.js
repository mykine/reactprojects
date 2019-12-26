import React from 'react'
import { Row,Col } from 'antd'//导入栅格组件
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import 'antd/dist/antd.css'

export default class Admin extends React.Component{
    
    render(){
        return (
            <Row>
                <Col span="3">
                    <NavLeft/>
                </Col>
                <Col span="21">
                    <Header/>
                    <Row>操作区</Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}