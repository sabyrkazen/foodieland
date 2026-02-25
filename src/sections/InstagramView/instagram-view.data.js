import image1 from '@assets/images/instagram-posts/1.jpg'
import image2 from '@assets/images/instagram-posts/2.jpg'
import image3 from '@assets/images/instagram-posts/3.jpg'
import image4 from '@assets/images/instagram-posts/4.jpg'

const images = [image1, image2, image3, image4]

export const instagramPosts = images.map((imgSrc, index) => ({
  id: index + 1,
  imgSrc,
}))
