import Api from 'newsapi'

const api = new Api(process.env.NEWS_API_KEY)

async function search(searchTerm: string) {

	const { articles } = await api.v2.everything({
		qInTitle: searchTerm,
		language: 'pt',
		page: 1,
		pageSize: 5,
		sortBy: ['publishedAt', 'popularity','relevancy']
	})

	return articles
}

export default search
