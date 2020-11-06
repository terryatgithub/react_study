class TabStrip extends React.Component {

    render() {
      return (
        <div className="TabStrip">
          {this.props.titles.map((title, index) => {
            const className = "TabStrip-title" +
              (this.isActive(index) ? " TabStrip-title-active" : "");
  
            return (
              <div onClick={() => this.setActiveIndex(index)} key={index} className={className}>
                {title}
              </div>
            );
          })}
        </div>
      );
    }
  
    isActive(index) {
      return index === this.getActiveIndex();
    }
    
    setActiveIndex(activeIndex) {/* Write your code here */}
    
    getActiveIndex() {/* Write your code here */}
  }
  
  class App extends React.Component {
    state = { activeIndex: 1 };
    render() {
      return (<div>
        <TabStrip activeIndex={this.state.activeIndex}
          onActiveIndexChange={activeIndex => {
            this.setState({
              activeIndex
            });
          }}
          titles={["My account", "Settings", "Dashbboard"]} 
        />
      </div>);
    }
  }
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);