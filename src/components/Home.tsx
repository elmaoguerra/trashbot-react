import * as React from 'react'
import {Page} from '../widgets/common';
import Chat from './Chat';

interface IHomeProps{
    page : Page
}

class Home extends React.Component<IHomeProps> {

    public render(){
        return (
            (this.props.page === Page.Eventos)?
            (
                <div>Eventos</div>
            )
            :(this.props.page === Page.Chat) &&(
                <Chat/>
            )
        );
    }
}

export default Home;