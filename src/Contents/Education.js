import React, { Component } from 'react';
import Widecard from '../Components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Software Engineering Bootcamp" where="Outbox EDU Uganda" from="June 2020" to="Present"/>
<Widecard title="SSLC | HSC" where="Bweranyangi Girls Secondary School" from="2009" to="2014"/>
</div>
)
}
}
export default Education