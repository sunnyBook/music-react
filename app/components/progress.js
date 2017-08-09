import React from 'react';
import './progress.less';

let Progress = React.createClass({
    getDefaultProps () {
        return {
            barColor: '#7abdff'
        }
    },
    changeProgress (e) {
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.progressChange && this.props.progressChange(progress);
    },
    render() {
        return (
            <div className="components-progress"
                ref="progressBar"
                onClick={this.changeProgress}
            >
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        );
    }
});

export default Progress;