// 3 parallel panes inside a div
    //will have to animate so that it is wider than viewport
    //but parent div is viewport sized so no weird bars and just animations
    //choose whether to have navbar on the hero and change color when switching
        //or only make it appear when we're on section B and C
    //fetch and wait data from json stored on the repo?

  // 1st one is a hero landing page with a few featured properties and a search bar~~~~~~~~~~~~
      //decide whether I'm going with the advanced form or not?
          //should probably do it but it will require more data

  // 2nd one is section B which includes listings and the map~~~~~~~~~~~~~
      //with markers referencing each listing
      //so for example when you hover on the marker
      //listing gets highlighted and vice versa
            // I will still have to think whether to make them into cards or a list
            // definitely cards... with pictures, should have been obvious

  // 3rd one is the actual listing details~~~~~~~~~~~~~~~~~~~~~~~~~
      //possibly including another map of the location zoomed in
      //a jumbo tron
      //the usual info and stuff/buttons
          // price, number of bedrooms and bathrooms, size, location
          // images
          // owner
          // appliances, close to X
          // maybe some of this stuff in table-like presentation
    
    ////////////
    
    const defaultState = {name: 'Guest'};
    const reducer = (state = defaultState, action) => {
      switch(action.type) {
        case 'RENAME':
          state = { ...state , name: action.value};
          return state;
          break;
        default:
          return state;
          break;
      }
    }
    const store = Redux.createStore(reducer);
    const nameAction = (newName) => {return({type: 'RENAME', value: newName});};
    //store.dispatch(nameAction('Oscar'));
    
    
    ////////////
    
    class Hello extends React.Component {
		
      constructor(props) {
        super(props);   
        this.state = {
          name: "Guest",
        }
      }
      
      render() { /*it invalidated this*/
        return <p>Hello {this.state.name}!</p>;
      }
    }

    class PropertiesList extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <div id="properties-list">
            
            <div className="property-list">
              <div className="list-pic"></div>
              <div className="list-info">
                <h4>Beautiful Penthouse by the Beach</h4><h5>$500/m</h5><p>Saint John's St. <br />5 bedrooms | 300sqft</p>
              </div>
            </div>
            
            <div className="property-list">
              <div className="list-pic"></div>
              <div className="list-info">
                <h4>House</h4><h5>$price/m</h5><p>street <br />bedrooms | sqft</p>
              </div>
            </div>
            
            <div className="property-list">
              <div className="list-pic"></div>
              <div className="list-info">
                <h4>House</h4><h5>$price/m</h5><p>street <br />bedrooms | sqft</p>
              </div>
            </div>
            
            <div className="property-list">
              <div className="list-pic"></div>
              <div className="list-info">
                <h4>House</h4><h5>$price/m</h5><p>street <br />bedrooms | sqft</p>
              </div>
            </div>
            
            <div className="property-list">
              <div className="list-pic"></div>
              <div className="list-info">
                <h4>House</h4><h5>$price/m</h5><p>street <br />bedrooms | sqft</p>
              </div>
            </div>
            
          </div>
        );
      };
      
    };

    class Map extends React.Component {
      constructor(props){
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <div id="map-container">
          </div>
        );
      };
      
    };

    class NavBar extends React.Component {
      constructor(props){
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <nav id="navbar">
            <p><a href="">Browse</a></p>
            <p><a href="">Listings</a></p>
            <a href=""><h1>LOGO</h1></a>
            <Hello />
            <p><a href="">Log In</a></p>
          </nav>
        );
      };
      
    };

    class SectionA extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <div id="section-a" className="section-hidden">
           <div id="hero">
            <h1>Find Your Dream Home</h1>
            <input /><button>Search</button>
           </div>
           <div id="featured-listings">
            <h2>Featured Listings</h2>
            <div className='featured-listing'>
              <img></img>
              <p>Listing</p>
            </div>
            
            <div className='featured-listing'>
              <img></img>
              <p>Listing</p>
            </div>
            
            <div className='featured-listing'>
              <img></img>
              <p>Listing</p>
            </div>
            
            <div className='featured-listing'>
              <img></img>
              <p>Listing</p>
            </div>
           </div>
            
            <h3><a href="">Browse By Location</a></h3>
            <Footer />
          </div>
        );
      };
      
    };

    class SectionB extends React.Component {
      constructor(props){
        super(props);
        this.state = {};
      };
      
      render() {
        const renderedMap = L.map('map-container').setView([51.505, -0.09], 13);
    const osmAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors';
    const mapApiUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const mapImages = L.tileLayer(mapApiUrl, { osmAttribution });
    
    mapImages.addTo(renderedMap);
    
    L.marker([51.505, -0.09]).addTo(renderedMap);
        return(
          <div id="section-b" className="section-hidden">
            <Map />
            <PropertiesList />
          </div>
        );
      };
      
    };

    class SectionC extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <div id="section-c">
           <div id="c-content">
            <div id="c-images">
              <img />
              <img />
              <img />
              <img />
              <img />
            </div>
            <div id="c-description">
              <h2>Apartment Name</h2>
              <h5>$price/m</h5><p>street <br />bedrooms | bathrooms | sqft</p>
              <p>Short description beautiful awesome beautiful awesome beautiful awesome beautiful awesome beautiful awesome beautiful awesome beautiful awesome beautiful awesome beautiful awesome</p>
              <h4>Person Name</h4><img />
              <p>+1 403 555</p>
              <button>Call to Action</button>
            </div>
           </div>
          <Footer />
          </div>
        );
      };
      
    };

    class Footer extends React.Component{
      constructor(props){
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <footer id="footer">
            Copyright 2022.
          </footer>
        );
      };
    };

    class App extends React.Component {
      constructor(props){
        super(props);
        this.state = {};
      };
      
      render() {
        return(
          <div>
            <NavBar />
            <SectionA />
            <SectionB />
            <SectionC />
          </div>
        );
      };
      
    };

 ////////////
    
    const Provider = ReactRedux.Provider;
    
    const mapStateToProps = (state) => {
      return({
        name: state.name
      });
     };
    
    const mapDispatchToProps = (disp) => {
      return({
        rename: (name) => {
          disp(nameAction(name))
        }
      });
    };

    const connect = ReactRedux.connect;
	
    const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
    
    class Wrapper extends React.Component {
      render() {
        return(
          <Provider store={store}>
            <ConnectedApp />
          </Provider>
        );
      };
    }

   

//////////////////////////////

    const documentRoot = document.getElementById('app');
    const reactRoot = ReactDOM.createRoot(documentRoot);
    reactRoot.render(
      <div>
        <Wrapper />
      </div>
    );
