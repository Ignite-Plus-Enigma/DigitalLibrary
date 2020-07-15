import React from 'react'
import {Component} from 'react';
import '../App.css';


export default class AudioFile extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            toggleButton:"►",
            // player:document.querySelector('.player'),
            // video:this.state.player.querySelector('.viewer'),
            // progress:this.state.player.querySelector('.progress-bar'),
            // progressBar:this.state.player.querySelector('.progress-filled'),
            // toggle:this.state.player.querySelector('.toggle'),
            // skip:this.state.player.querySelectorAll('[data-skip]'),
            // ranges:this.state.player.querySelectorAll('.player-slider')  
        }
    }
    

    // togglePlay = () => {
    //     if(this.state.video.paused){
    //         this.state.video.play();
    //     }
    //     else{
    //         this.state.video.pause();
    //     }
    // }
    
    
    // togglePlayButton = () => {
    //     this.state.toggle.textContent=this.paused? '►' : '❚ ❚';
    // }
    // videoSkip = () => {
    //     //this.dataset.skip holds the value to skip
    //     this.state.video.currentTime+=parseFloat(this.dataset.skip);
    // }
    // handleRangeUpdate = () => {
    //     //console.log(this.value);
      
    //     this.state.video[this.name] = this.value;
    // }
    // progressUpdate = () => {
    //     const percent=(this.state.video.currentTime/this.state.video.duration)*100;
    //     this.state.progressBar.style.flexBasis=`${percent}%`;
    // }
    // scrub = (e) => {
    //     const scrubTime=(e.offsetX/this.state.progress.offsetWidth)*this.state.video.duration;
    //     this.state.video.currentTime=scrubTime;
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
    //   video.addEventListener('play',togglePlayButton);
    // video.addEventListener('pause',togglePlayButton);
    render(){
        return (
            <div>
                <h2 className = "book-name">The fault  in our Stars</h2>
                <h3 className = "author-name">John Green</h3>
                <div className = "player">
                    <audio className = "audio-player viewer" src = {window.location.origin + '/Audio/The Vamps-Wake Up.mp3'}></audio>
                </div>
                
                <div class="progress-bar">
                    <div className="progress-filled"></div>
                </div>
                <div className="player-controls">
                    <button data-skip="-10" className="player-skip">« 10s</button>
                    <button className="player-button toggle" title="Toggle Play" onClick={this.playAudio}>{this.state.toggleButton}</button>
                    <button data-skip="25" className="player-skip">25s »</button>
                </div>
                <div className="player-controls">
                    <label className = "range-label">Volume</label>
                    <input type="range" name="volume" className="player-slider" min="0" max="1" step="0.05" value="1"/>
                    <label className = "range-label">Speed</label>
                    <input type="range" name="playbackRate" className="player-slider" min="0.5" max="2" step="0.1" value="1"/>
                    
                </div>
            </div>
        );
    }
}