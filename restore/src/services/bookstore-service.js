export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production',
                author: 'Susan',
                price: 32,
                coverImage: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-12/19/18/asset/3a6729677dba/sub-buzz-665-1576781603-2.jpg?resize=990:1476?output-quality=auto&output-format=auto&downsize=640:*'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael',
                price: 54,
                coverImage: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
            }
        ];
    }
}