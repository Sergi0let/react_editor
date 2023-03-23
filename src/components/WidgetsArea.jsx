import { connect } from 'react-redux';
import BlockItem from '../common/BlockItem';
import { blocks } from '../data/blocks_data';

import * as actions from '../store/actions';

const WidgetsArea = ({ addBlock }) => {
  return (
    <aside className="lg:min-w-[264px]">
      <ul className="flex justify-around  lg:grid  lg:grid-cols-2 gap-[10px] p-[30px]">
        {blocks &&
          blocks.map(({ id, name, icon }) => (
            <BlockItem
              onClick={addBlock}
              key={id}
              id={id}
              name={name}
              icon={icon}
            />
          ))}
      </ul>
    </aside>
  );
};

const mapDispatchToProps = {
  addBlock: actions.addBlock,
};

export default connect(null, mapDispatchToProps)(WidgetsArea);
