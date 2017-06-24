import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
    return(
        <div>
            <Sparklines svgHeight={120} svgWidth={220} data={props.data}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
        </div>
    )
}
