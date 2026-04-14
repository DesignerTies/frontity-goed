import connect from '@frontity/connect';

const BannerTC = () => {
  return (
    <div className='banner-tc' role='img'>
      <div className='title-tc-page'>
        <h1 style={{ textTransform: 'uppercase' }}>Therapie</h1>
      </div>
    </div>
  );
};

export default connect(BannerTC);
