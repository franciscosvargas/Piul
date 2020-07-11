import Api from 'newsapi'

const api = new Api(process.env.NEWS_API_KEY)

class NewsAPI {

	searchTerm: string[]

	constructor(SearchTerm: string[]) {
		this.searchTerm = SearchTerm
	}

	async search() {

		const { articles } = await api.v2.everything({
			qInTitle: this.searchTerm,
			language: 'pt',
			page: 1,
			pageSize: 5,
			sortBy: ['publishedAt', 'popularity','relevancy']
		})

		return articles
	}

}

export default NewsAPI