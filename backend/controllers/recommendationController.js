import axios from "axios"

export const getYoutubeMaterials = async (req, res) => {

  const { topic } = req.query

  try {

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: topic,
          type: "video",
          maxResults: 5,
          key: process.env.YOUTUBE_API_KEY
        }
      }
    )

    const videos = response.data.items.map(video => ({
      title: video.snippet.title,
      url: `https://youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.medium.url
    }))

    res.json(videos)

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch YouTube videos"
    })

  }

}


export const getTextMaterials = async (req, res) => {

  const { topic } = req.query

  try {

    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${topic}`
    )

    const books = response.data.docs.slice(0,5).map(book => ({
      title: book.title,
      author: book.author_name?.[0],
      year: book.first_publish_year
    }))

    res.json(books)

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch books"
    })

  }

}