import React,{Component} from 'react';
import { withStyles } from '@mui/styles';
import Kanbanstyles from './Kanbancomp.style';

class Kanbancomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:true,
        };
    }

    render() {
        return (
           <div></div>
        );
    }
}

export default withStyles((theme)=>({
    ...Kanbanstyles(theme),}))
    (Kanbancomp);

