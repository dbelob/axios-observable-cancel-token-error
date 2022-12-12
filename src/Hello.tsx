import { Component } from 'react';
import { HelloService } from './HelloService';

type HelloProps = {}

type HelloState = {
    message: string;
}

export default class Hello extends Component<HelloProps, HelloState> {
    private helloService = new HelloService();

    constructor(props: HelloProps) {
        super(props);

        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        this.helloService.getMessage('Jude')
            .subscribe(data => {
                this.setState({message: data});
            });
    }

    render() {
        return (
            <div>Message: {this.state.message}</div>
        );
    }
}
