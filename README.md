# E-Shop Rest API Documentation 

Welcome to the E-Shop API, where you can access a curated collection of cutting-edge electronic smart gadgets. This API provides comprehensive information about the latest and greatest devices, allowing you to seamlessly integrate our product catalog into your applications or website.

## Base Welcome Page URL

**https://raghav-0311.github.io/eShop-API**

## Base API URL

**https://e-shop-api-steel.vercel.app**

> If you see ``Hi, I am live``, it means you are on right url ✅

## Authentication

To access the E-Shop API you do not required to register or need an API key. **It's Totally Free and Open Source** 🚀.

## Endpoint

- ### Get All Products
    ``/api/products``

- ### Get Single Product
    ``/api/products?_id=YOUR_PRODUCT_ID``

## Features

- ### Data Filteration 
    - **_id** - ``/api/products?_id=YOUR_PRODUCT_ID``
    - **brand** - ``/api/products?brand=PRODUCT_BRAND_NAME``
    - **name** - ``/api/products?name=PRODUCT_NAME``
    - **category** - ``/api/products?category=PRODUCT_CATEGORY``
    - **featured** - ``/api/products?featured``

    > You can add multiple filtering parameters using **&** - <br /><br />
        ``/api/products?brand=PRODUCT_BRAND_NAME&category=PRODUCT_CATEGORY&featured``

- ### Data Sorting
    - ``/api/products?sort=SORT_PARAMETER`` - **Sort in Ascending Order**
    - ``/api/products?sort=-SORT_PARAMETER`` - **Sort in Descending Order**

- ### Data Selection
    - ``/api/products?select=DOCUMENT_FIELD`` - **DOCUMENT_FIELD can be any field of your document**

    > You can add multiple selection parameters using **,** - <br /><br />
        ``/api/products?select=DOCUMENT_FIELD_1,DOCUMENT_FIELD_2,DOCUMENT_FIELD_3``

- ### Data Pagination & Limiting
    - ``/api/products?page=PAGE_NUMBER&limit=DOCUMENTS_PER_PAGE`` 

## Handling multiple queries
``/api/products/brand=apple&category=laptop&sort=price&select=name,brand,price,features,specifications``

**Output -**

```json
{
    "count": 2,
    "limit": 27,
    "page": 1,
    "Products": [
        {
            "specifications": {
                "processor": "M2 Max",
                "cpu": "8-Core CPU",
                "gpu": "10-Core GPU",
                "ram": "8 GB Unified Memory",
                "storage": "512 GB SSD Storage",
                "display": "15.3-inch Liquid Retina Display"
            },
            "_id": "657f9d538e614ee3e2fa16dd",
            "name": "MacBook Air",
            "brand": "Apple",
            "price": 154900,
            "features": [
                "Four stellar colors",
                "Liquid Retina display",
                "Advanced camera and audio",
                "All-day battery life"
            ]
        },
        {
            "specifications": {
                "processor": "M3 Max",
                "cpu": "16-Core CPU",
                "gpu": "40-Core GPU",
                "ram": "48 GB Unified Memory",
                "storage": "1 TB SSD Storage",
                "display": "16-inch Liquid Retina XDR Display"
            },
            "_id": "657f9d538e614ee3e2fa16dc",
            "name": "MacBook Pro",
            "brand": "Apple",
            "price": 350000,
            "features": [
                "Game-changing performance",
                "Next-level graphics",
                "Best-in-class battery life",
                "Liquid Retina XDR display"
            ]
        }
    ]
}
```


## Top E-Gadgets Schema 

```yaml
Data:
    type: object
    properties:
    id:
        type: string
    name:
        type: string
    brand:
        type: string
    price:
        type: number
    colors:
        type: array
        items:
        type: string
    image:
        type: string
    description:
        type: string
    category:
        type: string
    featured:
        type: boolean
    shipping:
        type: boolean
    features:
        type: array
        items:
        type: string
    url:
        type: string
    rating:
        type: number
    specifications:
        type: object
        properties:
        processor:
            type: string
        cpu:
            type: string
        gpu:
            type: string
        ram:
            type: string
        storage:
            type: string
        display:
            type: string
    productImages:
        type: object
        properties:
        pi_1:
            type: string
        pi_2: 
            type: string
        pi_3: 
            type: string
        pi_4: 
            type: string
```

### Open to merge new endpoints ❤️
### Thank-you

## Contact Info

- **Email** - raghavkashyap0311@gmail.com
- **Dev. portfolio** - https://raghav-kashyap.vercel.app/
- **GitHub profile** - https://github.com/Raghav-0311
- **LinkedIn profile** - https://www.linkedin.com/in/raghavkashyap03
