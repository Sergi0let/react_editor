import { connect } from 'react-redux';

import ButtonBlock from '../common/ButtonBlock';
import Headline from '../common/Headline';
import Image from '../common/Image';
import Paragraph from '../common/Paragraph';

const ContentBlock = ({ blocks }) => {
  return (
    <div className=" flex flex-col lg:w-2/5  items-center gap-[30px] pt-[30px] pl-[30px] text-center leading-6 pr-[30px]">
      {blocks &&
        blocks.map(({ id, name, content }) => {
          switch (name) {
            case 'Headline':
              return <Headline id={id} content={content} key={id} />;
            case 'Paragraph':
              return <Paragraph id={id} content={content} key={id} />;
            case 'Image':
              return <Image id={id} content={content} key={id} />;
            case 'Button':
              return <ButtonBlock key={id} content={content} />;
            default:
              return (
                <div key={id}>
                  <p>{name}</p>
                </div>
              );
          }
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  };
};

export default connect(mapStateToProps, null)(ContentBlock);
