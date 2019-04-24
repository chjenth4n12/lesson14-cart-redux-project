var initialState = [
    {
        id : 1,
        name : 'iphone 7 plus',
        image : 'https://bizweb.dktcdn.net/thumb/large/100/340/264/products/vi-vn-iphone-7-red-slider05.jpg',
        description : 'made in apple',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'iphone 8 plus',
        image : 'https://phongvanmobile.vn/wp-content/uploads/2018/12/iPhone-8-Plus-64GB-8-480x480.jpg',
        description : 'made in apple',
        price : 700,
        inventory : 10,
        rating : 5
    },
    {
        id : 3,
        name : 'iphone 6s plus',
        image : 'https://thongtindienthoai.org/wp-content/uploads/2018/11/thay-pin-iphone-6s-plus-pisen-1-480x480.jpg',
        description : 'made in apple',
        price : 300,
        inventory : 10,
        rating : 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;