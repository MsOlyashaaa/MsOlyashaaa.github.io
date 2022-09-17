import { Content } from './content/Content';
import Header from './header/Header';
import Image from './image/Image';
import SecondTask from './second_task/SecondTask';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Image />
      <SecondTask/>
    </div>
  );
}

export default App;
