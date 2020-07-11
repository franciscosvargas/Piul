import Api from 'newsapi'

const api = new Api(process.env.NEWS_API_KEY)

class NewsAPI {

	searchTerm: string[]

	constructor(SearchTerm: string[]) {
		this.searchTerm = SearchTerm
	}

	async search() {

		const { articles } = await api.v2.topHeadlines({
			sources: 'google-news-br, globo',
			q: this.searchTerm,
		})

		return articles
	}

}

export default NewsAPI