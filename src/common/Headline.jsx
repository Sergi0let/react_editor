const Headline = ({ content }) => {
  return (
    <div>
      <h1 className="text-[22px] font-bold">
        {content ? content : 'Headline'}
      </h1>
    </div>
  );
};

export default Headline;
