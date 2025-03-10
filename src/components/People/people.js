import React from "react";
import {Outer,Row,Text,Holder,Content,PeopleImage,Name,Position} from "./peoplestyles";

const Meet = () =>{
    return(
       <Outer>
         <Row>
            <Text>Meet some amazing people!!!</Text>

            <Holder>

                <Content>
                    <PeopleImage src="/images/Alwin.jpg"/>
                    <Name>Alwin John</Name>
                    <Position>GitHub Campus Expert</Position>
                </Content>

                <Content>
                    <PeopleImage src="/images/profile.png"/>
                    <Name>Rithin Samuel</Name>
                    <Position>Javascript TinkerHub <br></br>Learning Facilitator</Position>
                </Content>

                <Content>
                    <PeopleImage src="/images/profile.png"/>
                    <Name>PlaceHolder</Name>
                    <Position>PlaceHolder</Position>
                </Content>

            </Holder>
         </Row>
        </Outer>
    )   
}

export default Meet;