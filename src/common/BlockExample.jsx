import { connect } from 'react-redux';
import Input from './Input';
import * as actions from '../store/actions';
import ConfigBlock from './ConfigBlock';

const BlockExample = ({
  id,
  name,
  icon,
  isActive,
  openModal,
  addContent,
  closeModal,
}) => {
  return (
    <li
      onClick={() => openModal({ id })}
      key={id}
      style={
        isActive
          ? {
              height: 'auto',
              background: '#D9E7FF',
            }
          : { height: '83px' }
      }
      className="relative h-[83px] bg-[#ffffff] flex flex-col items-center justify-center rounded-md cursor-pointer mb-4 py-4 hover:bg-[#D9E7FF] hover:text-white transition-all duration-300"
    >
      <img src={icon} alt={name} className="w-[25px] h-[25px]" />
      <p className="pt-2 text-xs">{name}</p>

      {isActive && (
        <Input
          name={name}
          addContent={addContent}
          onClose={closeModal}
          id={id}
        />
      )}
      {isActive && (
        <ConfigBlock id={id} name={name} isActive={isActive} icon={icon} />
      )}
    </li>
  );
};

const mapDispatchToProps = {
  openModal: actions.openModal,
  closeModal: actions.closeModal,
  addContent: actions.addContent,
};

export default connect(null, mapDispatchToProps)(BlockExample);
