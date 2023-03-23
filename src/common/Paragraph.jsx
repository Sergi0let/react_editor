const Paragraph = ({ content }) => {
  return (
    <div>
      <div className="text-[14px] font-normal ">
        <p>{content ? content : 'Paragraph'}</p>
      </div>
    </div>
  );
};

export default Paragraph;
