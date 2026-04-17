import connect from '@frontity/connect';
import { styled, css } from 'frontity';
import instaIcon from '../../static/instagram-icon.svg';
import Link from '@frontity/components/link';

const InstaProm = () => (
  <FlexContainerOuter>
    <div id='flex-inner'>
      <Link link='https://www.instagram.com/franciscakramerpsycholoog'>
        <img src={instaIcon} />
      </Link>
      <p>
        Vind je het leuk om tips te krijgen over psychologie in het dagelijks leven? Volg me dan op Instagram
        (@franciscakramerpsycholoog)
      </p>
    </div>
  </FlexContainerOuter>
);

export default connect(InstaProm);

const FlexContainerOuter = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  #flex-inner {
    max-width: 900px;
		width: 100%
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  p {
    margin: 0;
  }

  img {
    filter: brightness(0);
  }
`;
