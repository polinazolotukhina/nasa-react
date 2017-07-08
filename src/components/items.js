import React, { Component } from 'react';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: 'show more'
    };
  }
  ChangeStatus = () =>{
    this.setState({
	   status: !this.state.status,
     text: (this.state.status) ? 'show more' : 'show less'
	  });
  }

  render() {
    const {itemsprop} = this.props;
    var num;
   if(this.state.status){
     num =  24;
   } else{
     num =  6;
   }

    return (
      <div className="row">

            {
              itemsprop && itemsprop.slice(0, `${num}`).map((item) =>
                        <div key={item.id} className="col-sm-4 col-md-4 col-lg-2">
                        <div className="wrapper">
                            <img className="marsPic" src={item.img_src}/>
                        </div>
                            <p className="center">Name : {item.camera.full_name}</p>
                            <p className="center">Date:{item.earth_date}</p>
                        </div>
              )
            }
            <div className="center">
              <button onClick={this.ChangeStatus}>{this.state.text} </button>
            </div>
      </div>
    )
  }
}
