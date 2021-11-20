import connect from '@frontity/connect';
import ReviewPosts from './reviews-posts';

const Reviews = () => {
	return (
		<div className="reviews-wrapper">
			<h1 className="reviews-title">Reviews</h1>
			<ReviewPosts className="review-tekst"/>
		</div>
	)
}

export default connect(Reviews)