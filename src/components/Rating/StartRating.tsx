import { MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md'

type RatingProps = {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  const maxStars = 5
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex ">
      {[...Array(fullStars)].map((_, index) => (
        <MdOutlineStar
          key={index}
          className="w-6 h-6 text-yellow-400 fill-yellow-400"
        />
      ))}
      {hasHalfStar && (
        <MdOutlineStarHalf className="w-6 h-6 text-yellow-400 fill-yellow-400" />
      )}
      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => (
          <MdOutlineStar
            key={index + fullStars + 1}
            className="w-6 h-6 text-gray-300"
          />
        ),
      )}
    </div>
  )
}

export default Rating
