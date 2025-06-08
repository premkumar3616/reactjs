import './App.css';
import Accordian from './components/accordin/';
import Randomcolor from './components/hex random';
import Star from './components/star rating/Star';
import ImageSlider from './components/img slider/ImageSlider';
import Loading from './components/loading';
import Menu from './components/menu-view';
import menus from './components/menu-view/data.js';
import Qrcode from './components/qr-code/index.jsx';
import Theme from './components/dark theme/index.jsx';
import ScrollIndicator from './components/scroll-indicator/index.jsx';
import Tabtest from './components/custom-tabs/tab-test.jsx';
import ModalTest from './components/modal popup/index.jsx';
import GithubProfileFinder from './components/github-finder/github.jsx';

function App() {
  return (
    <div className="App">
      <Accordian />
      <Randomcolor />
      <Star noOfstars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <Loading />
      <Menu menus = {menus} />
      <Qrcode />
      <Theme />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      <Tabtest />
      <ModalTest />
      <GithubProfileFinder />
    </div>
  );
}

export default App;
