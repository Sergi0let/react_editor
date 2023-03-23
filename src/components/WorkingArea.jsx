import { useDrop } from 'react-dnd';
import { connect } from 'react-redux';

import BlockExample from '../common/BlockExample';
import * as actions from '../store/actions';

const WorkingArea = ({ blocks, addBlock }) => {
  const [, drop] = useDrop(() => ({
    accept: 'block',
    drop: (item) => addBlock(item),
  }));

  return (
    <div ref={drop} className="bg-[#F5F5FC] px-[30px] py-[25px] flex-1 ">
      <ul className="min-w-[300px]">
        {blocks &&
          blocks.map((block) => <BlockExample key={block.id} {...block} />)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  };
};

const mapDispatchToProps = {
  addBlock: actions.addBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkingArea);
