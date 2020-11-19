import axios from '../utils/axios';

export const newsCategory = {
    technology: 'technology',
    science: 'science',
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    sports: 'sports'
}

const MAX_ITEM_PER_PAGE = 10;

export default class news {
    constructor(category) {
        this._category = category;
        this._searchTerm = '';
        this._pageSize = MAX_ITEM_PER_PAGE;
        this._currentPage = 1;
        this._totalPage = 1;
    }

    async getNews() {
        try {
            const { data } = await axios.get(this._getUrl());
            this._totalPage = Math.ceil(data.totalResults / this._pageSize);
            return {
                articles: data.articles,
                totalPage: this._totalPage,
                currentPage: this._currentPage,
                category: this._category,
                totalResults: data.totalResults
            }
        } catch(e) {
            throw new Error(e)
        }
    }

    prev() {}

    next() {}

    setCurrentPage() {}

    changeCategory() {}

    search() {}

    _getUrl() {
        let url = '/?';

        if(this._category) url += `category=${this._category}`;
        if(this._searchTerm) url += `&q=${this._searchTerm}`;
        if(this._pageSize) url += `&pageSize=${this._pageSize}`;
        if(this._currentPage) url += `&page=${this._currentPage}`;

        return url;
    }
}