import React from 'react'
import {Component} from 'react';
import '../App.css';


export default class AudioFile extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            toggleButton:"►",
            currentTime:0,
            duration: null
            // player:document.querySelector('.player'),
            // video:this.state.player.querySelector('.viewer'),
            // ,
            // progressBar:this.state.player.querySelector('.progress-filled'),
            // toggle:this.state.player.querySelector('.toggle'),
            // skip:this.state.player.querySelectorAll('[data-skip]'),
            // ranges:this.state.player.querySelectorAll('.player-slider')  
        }
    }
    getTime = (time) => {
        if(!isNaN(time)){
            return(
                Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
            );
        }
    }
    //  const currentTime = getTime(this.state.currentTime);
    //  const duration = getTime(this.state.duration);
    
     videoSkip = (e) => {
        //this.dataset.skip holds the value to skip
        const video = document.querySelector('.viewer');
        const skipValue = e.target.dataset.skip;
        console.log(skipValue);
        console.log(typeof(skipValue));
        // console.log(video);
        console.log("This inside video skip");
        console.log(this);
        video.currentTime+=parseFloat(skipValue);
    }
    componentDidMount(){
        const video = document.querySelector('.viewer');
        console.log("Inside did Mount");
        console.log(video);
        video.addEventListener('timeupdate',this.progressUpdate);
        setInterval(() => this.setState({currentTime:this.getTime(video.currentTime)}),1000);
        video.addEventListener('loadedmetadata', (e) => {
            this.setState({duration:this.getTime(video.duration)});
          });
        // const ranges = document.querySelectorAll('.player-slider')
        // ranges.forEach(range=>range.addEventListener('change',this.handleRangeUpdate));
    }
    
    componentWillUnmount(){
        const video = document.querySelector('.viewer');
        video.removeEventListener('timeupdate',this.progressUpdate);
    }
    handleRangeUpdate = (e) => {
        console.log("Inside handle range update");
        const video = document.querySelector('.viewer');
        console.log(e.target.name);
        console.log(e.target.value);
      
        video[e.target.name] = e.target.value;
    }
    progressUpdate = () => {
        const video = document.querySelector('.viewer')
        const progressBar = document.querySelector('.progress-filled')
        const percent = (video.currentTime/video.duration)*100;
        progressBar.style.flexBasis=`${percent}%`;
    }
    // scrub = (e) => {
    //     const video = document.querySelector('.viewer')
    //     const progress = document.querySelector('.progress-bar')
    //     const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    //     video.currentTime=scrubTime;
    // }
    playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-player")[0]
        if(audioEl.paused){
            audioEl.play();
            console.log(this);
            this.setState({toggleButton : "❚ ❚"});
        }
        else{
            audioEl.pause();
            this.setState({toggleButton : '►'});
        }
      }
    
    render(){
        return (
            <div>
                <h2 className = "book-name">The fault  in our Stars</h2>
                <h3 className = "author-name">John Green</h3>
                <div className = "player">
                    <audio className = "audio-player viewer" src = {window.location.origin + '/Audio/The Vamps-Wake Up.mp3'} ></audio>
                </div>
                <span className = "current-duration">{this.state.currentTime}</span>
                <span className = "total-duration">{this.state.duration}</span>
                <div class="progress-bar">
                    <div className="progress-filled"></div>
                </div>
                <div className="player-controls">
                    <button data-skip="-10" className="player-skip" onClick={this.videoSkip}>« 10s</button>
                    <button className="player-button toggle" title="Toggle Play" onClick={this.playAudio}>{this.state.toggleButton}</button>
                    <button data-skip="25" className="player-skip" onClick={this.videoSkip}>25s »</button>
                </div>
                <div className="player-controls">
                    <label className = "range-label">Volume</label>
                    <input type="range" name="volume" className="player-slider" min="0" max="1" step="0.05" defaultValue="1" onChange = {this.handleRangeUpdate}/>
                    <label className = "range-label">Speed</label>
                    <input type="range" name="playbackRate" className="player-slider" min="0.5" max="2" step="0.1" defaultValue="1" onChange = {this.handleRangeUpdate}/>
                    
                </div>
            </div>
        );
    }
}