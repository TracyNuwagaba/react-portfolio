import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../Img/tracy_photo.jpeg';
import Social from '../Components/Social'
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" alt="Tracy's profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['I am Tracy Nuwagaba','I am a web developer']} speed={100} eraseDelay={700}/>
<Social />
</div>
)
}
}
export default Home