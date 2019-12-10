import React from 'react';
import {Message} from './message.component';
import {MessageWithVideo} from './message_with_video.component';
import {MessageWithImage} from './message_with_image.component';




class Chat extends React.Component{
    constructor(props)
{
    super(props);
    this.state={
        text:'',
        video:'',
        picture:''
    }
}
componentDidMount(){
  
    fetch("http://167.99.18.235:8080/whatsapp/inbox/messages").then(response => response.json()).then(
      data => this.setState({text:data[1],video:data[2],picture:data[0]},console.log(data)));
      
  }
    render() {
        const { text,video,picture } = this.state;
        return (
          <div>
           <Message text={text}/>
           <MessageWithVideo video={video}/>
           <MessageWithImage picture={picture}/>
          </div>
        );
      }
}


export default Chat;