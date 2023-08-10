import {ResumeProvider} from './Context/ResumeContext'
import Main from './Components/Main';

function App() {
  return (
    <>
      <ResumeProvider>
        <Main/>
      </ResumeProvider>
    </>
  );
}

export default App;
