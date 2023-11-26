import ContentBlock from './components/ContentBlock';
import Header from './components/Header';
import WidgetsArea from './components/WidgetsArea';
import WorkingArea from './components/WorkingArea';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="">
        <Header title="REACT EDITOR Test" />

        <main className="lg:flex max-w-[1500px] mx-auto min-h-screen">
          <WidgetsArea />
          <WorkingArea />
          <ContentBlock />
        </main>
      </div>
    </DndProvider>
  );
};

export default App;
