# E-Shop API Documentation 

Welcome to the E-Shop API, where you can access a curated collection of cutting-edge electronic smart gadgets. This API provides comprehensive information about the latest and greatest devices, allowing you to seamlessly integrate our product catalog into your applications or website.

## Base URL

**https://raghav-0311.github.io/eShop-API**

## Authentication

To access the E-Shop API you do not required to register or need an API key. **It's Totally Free and Open Source** 🚀.

## Endpoint

- ### Get All Top_E_Gadgets
    ``/top_e_gadgets.json``

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
```

### Open to merge new endpoints ❤️
### Thank-you

## Contact Info

- **Email** - raghavkashyap0311@gmail.com
- **Dev. portfolio** - https://raghav-kashyap.vercel.app/
- **GitHub profile** - https://github.com/Raghav-0311
- **LinkedIn profile** - https://www.linkedin.com/in/raghavkashyap03
