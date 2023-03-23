import { useDrag } from 'react-dnd';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const BlockItem = ({ id, name, icon, addBlock }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'block',
    item: { id, name, icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <li
      ref={drag}
      style={{ border: isDragging ? '1px solid purple' : 'none' }}
      onClick={() => addBlock({ id, name, icon })}
      key={id}
      className="w-[100px] h-[83px] bg-[#F6F9FE] flex flex-col items-center justify-center rounded-md cursor-pointer hover:bg-[#D9E7FF] hover:text-white transition-all duration-300 "
    >
      <img src={icon} alt={name} className="w-[25px] h-[25px]" />
      <p className="pt-2 text-xs">{name}</p>
    </li>
  );
};

const mapDispatchtoProps = {
  addBlock: actions.addBlock,
};

export default connect(null, mapDispatchtoProps)(BlockItem);
