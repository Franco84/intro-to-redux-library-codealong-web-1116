class App extends Component {
   handleOnClick(){
     this.props.store.dispatch({type: 'INCREASE_COUNT'})
   }
   render() {
     return (
       <div className="App">
           <button onClick={this.handleOnClick.bind(this)}>Click</button>
           <p> {this.props.store.getState().items.length}</p>
       </div>
     );
   }
 }
