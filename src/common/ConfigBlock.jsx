import { connect } from 'react-redux';
import * as actions from '../store/actions';

import arrowIcon from '../img/arrow.svg';
import copyIcon from '../img/copy.svg';
import deleteIcon from '../img/delete.svg';

const ConfigBlock = ({
  removeBlock,
  copyBlock,
  content,
  removeDown,
  removeUp,
  id,
  name,
  icon,
  isActive,
}) => {
  return (
    <div className="absolute right-2 -top-8 flex">
      <div className="rounded-t bg-[#449CF4] mr-1">
        <button onClick={() => removeDown({ id })} className="p-2">
          <img className="" src={arrowIcon} alt="down" />
        </button>
        <button onClick={() => removeUp({ id })} className="p-2 ">
          <img className="rotate-180" src={arrowIcon} alt="up" />
        </button>
      </div>
      <div className=" rounded-t bg-[#68C2E9]">
        <button
          onClick={() => copyBlock({ name, icon, isActive, content })}
          className="p-2"
        >
          <img className="bg-[#4B97B8] rounded" src={copyIcon} alt="copy" />
        </button>
        <button onClick={() => removeBlock({ id })} className="p-2">
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addContent: actions.addContent,
  removeBlock: actions.removeBlock,
  copyBlock: actions.copyBlock,
  removeDown: actions.removeDown,
  removeUp: actions.removeUp,
};

export default connect(null, mapDispatchToProps)(ConfigBlock);
