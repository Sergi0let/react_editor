import preview from '../img/images.png';

const Image = ({ content }) => {
  return (
    <div>
      <img src={content ? content : preview} alt="Preview" />
    </div>
  );
};

export default Image;
