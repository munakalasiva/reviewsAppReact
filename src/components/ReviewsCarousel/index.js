import {Component} from 'react'

import './index.css'

class ReviewCarousal extends Component {
  state = {activeCarouselIndex: 0}

  getActiveCarousel = reviewsList => {
    const {activeCarouselIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeCarouselIndex
    ]
    return (
      <div className="card">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  leftArrow = () => {
    const {activeCarouselIndex} = this.state
    if (activeCarouselIndex > 0) {
      this.setState(prevState => ({
        activeCarouselIndex: prevState.activeCarouselIndex - 1,
      }))
    }
  }

  rightArrow = () => {
    const {activeCarouselIndex} = this.state
    const {reviewsList} = this.props
    if (activeCarouselIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeCarouselIndex: prevState.activeCarouselIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="style-col">
        <button
          type="button"
          onClick={this.leftArrow}
          className="btn"
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getActiveCarousel(reviewsList)}
        <button
          type="button"
          onClick={this.rightArrow}
          className="btn"
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewCarousal
