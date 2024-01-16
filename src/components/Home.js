import React from "react";
import homeShot from '../i/timsimms_headshot.png';
import sdk from '@stackblitz/sdk';
import './Home.css';


export class HomeHero extends React.Component {
  state = {
    typing: false,
    index: 0,
    typedText: ''
  }
  text = `
        Hey, I'm Tim; glad to have you here checking me out!
        Really hoping I can help you in some capacity, either now or in the future. I'm open for coaching, speaking engagements, mentoring, or building some software!
	If you've got ideas for how we might collaborate, let's chat!`;
  timeout = null;
  maxTime = 250;

  updateTyping = () => {
    const waitTime = Math.round(Math.random() * this.maxTime);
    this.timeout = setTimeout(() => { 
      if (this.state.index < this.text.length) {
        this.setState({ index: this.state.index+1,  typedText: this.text.substring(0, this.state.index+1 ) });
        this.updateTyping();
      } else {
        this.setState({ typing: false });
      }
    }, waitTime);
  }

  componentDidMount() {
    this.setState({ typing: true });
    this.updateTyping();
  };

  render() {
    return (
      <div className="HomeHero">
          <img src={homeShot} className="Home-shot" alt="tim simms" />
          <p className="HomeHero-text" 
            dangerouslySetInnerHTML={{ __html: this.state.typedText.replace(/[ ]{2,}/g,"<br/><br/>")}}
            >
          </p>
      </div>
    );
  }
}

export class HomeCode extends React.Component {
  vm = null;
  componentDidMount() {
    sdk.embedProjectId('HomeCode', 'node-sudoku', {
      hideExplorer: true,
      view: 'editor',
      height: window.innerHeight,
      terminalHeight: 25
    });
    const iframe = document.getElementById('HomeCode');
    sdk.connect(iframe)
      .then(vm => {
        this.vm = vm;
        return vm.editor.openFile([ 'README.md', 'index.js'])
      });
  
  }

  render() {
    return (
    <div id="HomeCode"></div>
    );
  };
}

